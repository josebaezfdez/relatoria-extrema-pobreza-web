import type { EditorialItem, MediaImage } from "./content";
import { locales, type Locale } from "./site";
import assetData from "./grigny2026-assets.json";

const assets = assetData as Record<string, {
  slug: string;
  width: number;
  height: number;
  alt: Record<Locale, string>;
}>;

const content = {
  es: {
    path: "/es/actualidad/eventos/encuentro-alcalde-grigny-philippe-rio/",
    title: "Encuentro con el alcalde de Grigny, Philippe Rio",
    summary: "Análisis de las políticas públicas y de los proyectos de Grigny para combatir la pobreza, la pobreza extrema y la exclusión social.",
    eyebrow: "Reunión de trabajo",
    displayDate: "12 de octubre de 2026",
    location: "Grigny, Francia",
    body: `<p class="lead">El 12 de octubre de 2026, Elena Díaz Galán mantuvo un encuentro con el alcalde de Grigny, Philippe Rio, y su equipo en esta localidad francesa.</p><p>Durante la reunión analizaron las políticas públicas desarrolladas para luchar contra la pobreza, la pobreza extrema y la exclusión social. También comentaron los proyectos y las acciones puestos en marcha en el marco de la Estrategia de lucha contra la pobreza en Grigny, con especial atención a los grupos en situación de vulnerabilidad.</p>`,
  },
  en: {
    path: "/en/news/events/meeting-grigny-mayor-philippe-rio/",
    title: "Meeting with the Mayor of Grigny, Philippe Rio",
    summary: "Discussion of Grigny’s public policies and projects to combat poverty, extreme poverty and social exclusion.",
    eyebrow: "Working meeting",
    displayDate: "12 October 2026",
    location: "Grigny, France",
    body: `<p class="lead">On 12 October 2026, Elena Díaz Galán met the Mayor of Grigny, Philippe Rio, and his team in the French town.</p><p>They discussed the public policies developed to combat poverty, extreme poverty and social exclusion. The meeting also covered the projects and actions implemented as part of Grigny’s strategy to combat poverty, with particular attention to vulnerable groups.</p>`,
  },
  fr: {
    path: "/fr/actualites/evenements/rencontre-maire-grigny-philippe-rio/",
    title: "Rencontre avec le maire de Grigny, Philippe Rio",
    summary: "Échanges sur les politiques publiques et les projets de Grigny pour lutter contre la pauvreté, l’extrême pauvreté et l’exclusion sociale.",
    eyebrow: "Réunion de travail",
    displayDate: "12 octobre 2026",
    location: "Grigny, France",
    body: `<p class="lead">Le 12 octobre 2026, Elena Díaz Galán a rencontré le maire de Grigny, Philippe Rio, et son équipe dans cette ville française.</p><p>Les échanges ont porté sur les politiques publiques mises en œuvre pour lutter contre la pauvreté, l’extrême pauvreté et l’exclusion sociale. Ils ont également abordé les projets et les actions menés dans le cadre de la stratégie de lutte contre la pauvreté à Grigny, avec une attention particulière aux groupes vulnérables.</p>`,
  },
};

function photo(number: string, locale: Locale): MediaImage {
  const { slug, width, height, alt } = assets[number];
  return { slug, width, height, alt: alt[locale] };
}

export const grigny2026Items: EditorialItem[] = locales.map((locale) => {
  const entry = content[locale];
  const image = photo("2825", locale);
  return {
    ...entry,
    id: `grigny-mayor-meeting-${locale}`,
    type: "event",
    locale,
    translation_group: "grigny-mayor-meeting",
    alternatePath: content[locale === "es" ? "en" : "es"].path,
    date: "2026-10-12",
    image: image.slug,
    imageWidth: image.width,
    imageHeight: image.height,
    imageAlt: image.alt,
    gallery: ["2772", "2777", "2782", "2791", "2820"].map((number) => photo(number, locale)),
  };
});
