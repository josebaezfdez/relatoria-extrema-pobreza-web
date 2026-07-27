export type Locale = "es" | "en";

export const SITE_URL = import.meta.env.PUBLIC_SITE_URL || "https://srextremepovertyhr.org";

export const localeConfig = {
  es: {
    htmlLang: "es",
    label: "Español",
    short: "ES",
    home: "/es/",
    skip: "Saltar al contenido",
    menu: "Menú",
    close: "Cerrar",
    search: "Buscar",
    readMore: "Leer la información completa",
    latest: "Actualidad",
    all: "Ver todo",
    external: "Abre en un sitio externo",
    disclaimer:
      "Esta web no está gestionada por la Oficina del Alto Comisionado de las Naciones Unidas para los Derechos Humanos. Su contenido no refleja la postura oficial de las Naciones Unidas.",
    complaint: "Presentar una comunicación ante OHCHR",
    complaintNote: "Esta web no recibe ni tramita denuncias.",
  },
  en: {
    htmlLang: "en",
    label: "English",
    short: "EN",
    home: "/en/",
    skip: "Skip to content",
    menu: "Menu",
    close: "Close",
    search: "Search",
    readMore: "Read the full information",
    latest: "Latest",
    all: "View all",
    external: "Opens on an external website",
    disclaimer:
      "This website is not managed by the Office of the United Nations High Commissioner for Human Rights. Its content does not reflect the official position of the United Nations.",
    complaint: "Submit information to OHCHR",
    complaintNote: "This website does not receive or process complaints.",
  },
} satisfies Record<Locale, Record<string, string>>;

export const navigation = {
  es: [
    { label: "Mandato", href: "/es/mandato/" },
    { label: "Titular", href: "/es/titular-actual/" },
    { label: "Informes", href: "/es/informes/" },
    { label: "Visitas", href: "/es/visitas/" },
    { label: "Actualidad", href: "/es/actualidad/" },
    { label: "Iniciativas", href: "/es/iniciativas/" },
  ],
  en: [
    { label: "Mandate", href: "/en/mandate/" },
    { label: "Holder", href: "/en/current-holder/" },
    { label: "Reports", href: "/en/reports/" },
    { label: "Visits", href: "/en/visits/" },
    { label: "News", href: "/en/news/" },
    { label: "Initiatives", href: "/en/initiatives/" },
  ],
} satisfies Record<Locale, { label: string; href: string }[]>;

export const footerNavigation = {
  es: [
    { label: "Contacto", href: "/es/contacto/" },
    { label: "Aviso legal", href: "/es/aviso-legal/" },
    { label: "Privacidad", href: "/es/privacidad/" },
    { label: "Accesibilidad", href: "/es/accesibilidad/" },
  ],
  en: [
    { label: "Contact", href: "/en/contact/" },
    { label: "Legal notice", href: "/en/legal-notice/" },
    { label: "Privacy", href: "/en/privacy/" },
    { label: "Accessibility", href: "/en/accessibility/" },
  ],
} satisfies Record<Locale, { label: string; href: string }[]>;

export const socialImage = "/media/elena-diaz-galan-portrait/cover.jpg";
