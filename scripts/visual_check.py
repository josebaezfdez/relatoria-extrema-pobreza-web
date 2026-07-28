import os
from pathlib import Path

from playwright.sync_api import sync_playwright


BASE_URL = os.getenv("BASE_URL", "http://127.0.0.1:4321")
OUTPUT = Path(__file__).resolve().parents[1] / "artifacts"
OUTPUT.mkdir(exist_ok=True)

routes = {
    "home": "/es/",
    "news": "/es/actualidad/",
    "reports": "/es/informes/",
    "mandate": "/es/mandato/",
    "article": "/es/actualidad/medios/cadena-ser-oeste/",
    "mpdl": "/es/actualidad/eventos/desafios-cooperacion-paz/",
    "pretoria": "/es/actualidad/eventos/dialogo-pobreza-derechos-humanos/",
    "gallery": "/es/visitas/paris-julio-2026/",
}

issues: list[str] = []

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True)

    for viewport_name, viewport in {
        "desktop": {"width": 1440, "height": 1000},
        "tablet": {"width": 768, "height": 1024},
        "mobile": {"width": 390, "height": 844},
        "narrow": {"width": 320, "height": 720},
        "landscape": {"width": 667, "height": 375},
    }.items():
        context = browser.new_context(viewport=viewport, device_scale_factor=1)

        for route_name, route in routes.items():
            page = context.new_page()
            page.on(
                "console",
                lambda message, name=f"{viewport_name}/{route_name}": (
                    issues.append(f"{name}: console {message.type}: {message.text}")
                    if message.type in {"error", "warning"}
                    else None
                ),
            )
            page.on(
                "response",
                lambda response, name=f"{viewport_name}/{route_name}": (
                    issues.append(
                        f"{name}: broken image response {response.status} {response.url}"
                    )
                    if response.request.resource_type == "image"
                    and response.status >= 400
                    else None
                ),
            )
            response = page.goto(f"{BASE_URL}{route}", wait_until="networkidle")
            if response is None or not response.ok:
                issues.append(f"{viewport_name}/{route_name}: route did not return OK")

            for image in page.locator("img").all():
                image.scroll_into_view_if_needed()
            page.wait_for_timeout(150)

            broken_images = page.locator("img").evaluate_all(
                """(images) => images
                  .filter((image) => image.complete && image.naturalWidth === 0)
                  .map((image) => image.currentSrc || image.src)"""
            )
            if broken_images:
                issues.append(
                    f"{viewport_name}/{route_name}: broken DOM images {broken_images}"
                )

            if route_name == "home":
                quote_author = page.locator(".quote-band cite").inner_text()
                if quote_author.strip().casefold() != "Nelson Mandela".casefold():
                    issues.append(
                        f"{viewport_name}/home: unexpected quote attribution {quote_author!r}"
                    )

            if route_name == "mpdl":
                if "22 de junio de 2026" not in page.locator("article").inner_text():
                    issues.append(f"{viewport_name}/mpdl: verified event date is missing")

            if route_name == "pretoria":
                poster = page.locator(".article-header__image img")
                if "dialogue-poverty-human-rights-poster" not in (poster.get_attribute("src") or ""):
                    issues.append(f"{viewport_name}/pretoria: event poster is not the lead image")

            if route_name == "gallery":
                gallery_images = page.locator(".media-gallery__item").count()
                if gallery_images != 6:
                    issues.append(
                        f"{viewport_name}/gallery: expected 6 images, found {gallery_images}"
                    )

            overflow = page.evaluate(
                """() => ({
                    documentWidth: document.documentElement.scrollWidth,
                    viewportWidth: document.documentElement.clientWidth,
                    offenders: [...document.querySelectorAll('body *')]
                      .filter((el) => el.getBoundingClientRect().right >
                        document.documentElement.clientWidth + 1)
                      .slice(0, 8)
                      .map((el) => `${el.tagName}.${el.className}`)
                })"""
            )
            if overflow["documentWidth"] > overflow["viewportWidth"] + 1:
                issues.append(
                    f"{viewport_name}/{route_name}: horizontal overflow "
                    f"{overflow['documentWidth']} > {overflow['viewportWidth']} "
                    f"{overflow['offenders']}"
                )

            if route_name in {"home", "news", "reports", "article"} or (
                viewport_name in {"desktop", "mobile"}
                and route_name in {"mpdl", "pretoria", "gallery"}
            ):
                page.screenshot(
                    path=OUTPUT / f"{viewport_name}-{route_name}.png",
                    full_page=True,
                )

            if route_name != "home":
                breadcrumb = page.locator(".breadcrumbs__list").bounding_box()
                content = page.locator(".page-header .container, .article-header .container").first.bounding_box()
                if breadcrumb and content and abs(breadcrumb["x"] - content["x"]) > 1:
                    issues.append(
                        f"{viewport_name}/{route_name}: breadcrumb misaligned "
                        f"{breadcrumb['x']} != {content['x']}"
                    )

            if viewport_name == "mobile" and route_name == "home":
                menu = page.locator(".mobile-nav summary")
                menu.focus()
                page.keyboard.press("Enter")
                if page.locator(".mobile-nav").get_attribute("open") is None:
                    issues.append("mobile/home: menu did not open with keyboard")

            page.close()

        context.close()

    browser.close()

print("VISUAL_CHECK_COMPLETE")
if issues:
    print("\n".join(issues))
else:
    print("No console, route, overflow, or keyboard-menu issues detected.")
