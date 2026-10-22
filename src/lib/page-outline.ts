/** Add stable anchors to the existing section headings of trusted static pages. */
export function pageOutline(body: string) {
  const headings: { id: string; title: string }[] = [];
  const html = body.replace(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/g, (_match, attributes: string, title: string) => {
    const existing = attributes.match(/\bid="([^"]+)"/);
    const id = existing?.[1] || `section-${headings.length + 1}`;
    headings.push({ id, title: title.replace(/<[^>]*>/g, "") });
    return `<h2${attributes}${existing ? "" : ` id="${id}"`}>${title}</h2>`;
  });
  return { html, headings };
}
