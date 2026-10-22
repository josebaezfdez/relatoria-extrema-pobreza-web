import type { EditorialItem, StaticPage } from "./content";
import type { Locale } from "./site";

type Labels = Record<Locale, string>;
export const categories = {
  meetings: { es: "Reuniones y encuentros", en: "Meetings and encounters", fr: "Réunions et rencontres" },
  academic: { es: "Jornadas y actividad académica", en: "Events and academic activity", fr: "Événements et activités universitaires" },
  culture: { es: "Actividades culturales", en: "Cultural activities", fr: "Activités culturelles" },
  press: { es: "Entrevistas y prensa", en: "Interviews and press", fr: "Entretiens et presse" },
  reports: { es: "Informes", en: "Reports", fr: "Rapports" },
  statements: { es: "Comunicados", en: "Statements", fr: "Communiqués" },
  resources: { es: "Recursos y divulgación", en: "Resources and outreach", fr: "Ressources et sensibilisation" },
} satisfies Record<string, Labels>;
export type EditorialCategory = keyof typeof categories;

export const topics = {
  "cities-housing": { es: "Ciudades y vivienda", en: "Cities and housing", fr: "Villes et logement" },
  "child-poverty": { es: "Infancia y pobreza", en: "Children and poverty", fr: "Enfance et pauvreté" },
  "equality-inclusion": { es: "Igualdad y no discriminación", en: "Equality and non-discrimination", fr: "Égalité et non-discrimination" },
  "social-protection": { es: "Protección social", en: "Social protection", fr: "Protection sociale" },
  participation: { es: "Participación", en: "Participation", fr: "Participation" },
  "cooperation-development": { es: "Cooperación y desarrollo", en: "Cooperation and development", fr: "Coopération et développement" },
  "day-against-poverty": { es: "Día de la lucha contra la pobreza", en: "Day against poverty", fr: "Journée de lutte contre la pauvreté" },
} satisfies Record<string, Labels>;
export type EditorialTopic = keyof typeof topics;

export const newsPaths: Record<Locale, string> = { es: "/es/actualidad/", en: "/en/news/", fr: "/fr/actualites/" };
export const reportPaths: Record<Locale, string> = { es: "/es/informes/", en: "/en/reports/", fr: "/fr/rapports/" };
export const archiveCopy = {
  es: { explore: "Explorar la actualidad", all: "Todas las categorías", allTopics: "Todos los temas", category: "Categoría", topic: "Tema", clear: "Limpiar filtros", results: "contenidos", empty: "No hay contenidos con esta combinación. Prueba otra categoría o limpia los filtros.", previous: "Anterior", next: "Siguiente", page: "Página", of: "de", related: "Seguir explorando", onPage: "En esta página", view: "Ver contenido", video: "Vídeo", audio: "Audio", document: "Documento", active: "Filtros activos", navigation: "Explorar por categoría", fullArchive: "Archivo completo", section: "En foco" },
  en: { explore: "Explore the latest", all: "All categories", allTopics: "All topics", category: "Category", topic: "Topic", clear: "Clear filters", results: "items", empty: "No items match these filters. Try another category or clear the filters.", previous: "Previous", next: "Next", page: "Page", of: "of", related: "Explore further", onPage: "On this page", view: "View item", video: "Video", audio: "Audio", document: "Document", active: "Active filters", navigation: "Explore by category", fullArchive: "Full archive", section: "In focus" },
  fr: { explore: "Explorer les actualités", all: "Toutes les catégories", allTopics: "Tous les thèmes", category: "Catégorie", topic: "Thème", clear: "Effacer les filtres", results: "contenus", empty: "Aucun contenu ne correspond à ces filtres. Essayez une autre catégorie ou effacez les filtres.", previous: "Précédent", next: "Suivant", page: "Page", of: "sur", related: "Poursuivre la découverte", onPage: "Sur cette page", view: "Voir le contenu", video: "Vidéo", audio: "Audio", document: "Document", active: "Filtres actifs", navigation: "Explorer par catégorie", fullArchive: "Toutes les actualités", section: "À la une" },
};

/** Explicit editorial decisions, shared by all translations; never keyword inference. */
export const classification: Record<string, { category: EditorialCategory; topics: EditorialTopic[] }> = {
  "poverty-day-video-2026": { category: "resources", topics: ["day-against-poverty"] },
  "grigny-mayor-meeting": { category: "meetings", topics: ["cities-housing", "equality-inclusion"] },
  "ach-meeting": { category: "meetings", topics: ["cooperation-development"] },
  "celios-meeting": { category: "meetings", topics: [] },
  "upv-child-poverty": { category: "academic", topics: ["child-poverty"] },
  "cermi-women": { category: "academic", topics: ["equality-inclusion", "cities-housing"] },
  "luarca-peace": { category: "academic", topics: ["cooperation-development"] },
  "eapn-meeting": { category: "meetings", topics: ["equality-inclusion"] },
  "valedora-meeting": { category: "meetings", topics: ["equality-inclusion"] },
  "aporophobia-symposium": { category: "academic", topics: ["equality-inclusion"] },
  "eldiario-housing-interview": { category: "press", topics: ["cities-housing", "equality-inclusion"] },
  "ilo-social-protection": { category: "meetings", topics: ["social-protection"] },
  "afriw-hrc63": { category: "academic", topics: ["cooperation-development"] },
  "brussels-academic": { category: "academic", topics: ["cooperation-development"] },
  "sdg16-urjc": { category: "academic", topics: ["cooperation-development"] },
  "world-habitat-day": { category: "academic", topics: ["cities-housing"] },
  "oman-foreign-affairs": { category: "meetings", topics: [] },
  "oman-economy": { category: "meetings", topics: [] },
  "unhabitat-rossbach": { category: "meetings", topics: ["cities-housing", "cooperation-development"] },
  "afriw-cooperation": { category: "meetings", topics: ["cooperation-development"] },
  "cities-poverty": { category: "reports", topics: ["cities-housing", "equality-inclusion"] },
  "hrc62-roadmap": { category: "reports", topics: ["equality-inclusion", "participation"] },
  paris: { category: "meetings", topics: ["cities-housing", "equality-inclusion"] },
  dujol: { category: "meetings", topics: [] },
  "sambhali-trust": { category: "meetings", topics: ["equality-inclusion"] },
  extremadura: { category: "meetings", topics: [] },
  "international-organisations": { category: "meetings", topics: ["cooperation-development"] },
  "platform-childhood": { category: "meetings", topics: ["child-poverty", "equality-inclusion"] },
  aacid: { category: "meetings", topics: ["cooperation-development"] },
  emmaus: { category: "meetings", topics: ["participation"] },
  "just-fair": { category: "meetings", topics: ["participation"] },
  "press-release": { category: "statements", topics: ["equality-inclusion"] },
  uc3m: { category: "academic", topics: [] },
  participation: { category: "academic", topics: ["participation"] },
  "human-rights-city": { category: "academic", topics: ["cities-housing", "cooperation-development"] },
  pretoria: { category: "academic", topics: ["equality-inclusion"] },
  yuste: { category: "academic", topics: ["cooperation-development"] },
  mpdl: { category: "academic", topics: ["cooperation-development"] },
  "death-penalty": { category: "academic", topics: [] },
  community: { category: "academic", topics: [] },
  minister: { category: "meetings", topics: [] },
  "cadena-ser": { category: "press", topics: ["cities-housing"] },
  "once-meeting": { category: "meetings", topics: ["equality-inclusion", "participation"] },
  "la-laguna-exhibitions": { category: "culture", topics: [] },
  "la-laguna-campus": { category: "academic", topics: [] },
  "muna-visit": { category: "culture", topics: [] },
  "la-razon-interview": { category: "press", topics: [] },
  "hoy-interview": { category: "press", topics: ["cities-housing", "equality-inclusion"] },
  "el-pais-interview": { category: "press", topics: ["cities-housing"] },
  "efe-la-laguna": { category: "press", topics: [] },
};

export function editorialKey(item: EditorialItem): string {
  return item.translation_group || item.id.replace(/-(es|en|fr)$/, "");
}

export function classifyEditorialItem(item: EditorialItem): EditorialItem {
  const key = editorialKey(item);
  const assignment = classification[key];
  if (!assignment) return {
    ...item,
    category: item.category && Object.hasOwn(categories, item.category) ? item.category : undefined,
    topics: item.topics?.filter((topic) => Object.hasOwn(topics, topic)),
  };
  const isReclassifiedVisit = ["paris", "la-laguna-exhibitions", "muna-visit"].includes(key);
  return { ...item, type: isReclassifiedVisit ? "event" : item.type, category: assignment.category, topics: [...assignment.topics] };
}

export function categoryHref(locale: Locale, category: EditorialCategory): string {
  return `${newsPaths[locale]}?category=${category}#archive`;
}

export function contentCount(locale: Locale, count: number): string {
  const singular = { es: "contenido", en: "item", fr: "contenu" };
  return `${count} ${count === 1 ? singular[locale] : archiveCopy[locale].results}`;
}

export function topicHref(locale: Locale, topic: EditorialTopic): string {
  return `${newsPaths[locale]}?topic=${topic}#archive`;
}

export function formatsFor(item: EditorialItem): ("video" | "audio" | "document")[] {
  const result: ("video" | "audio" | "document")[] = [];
  if (item.video?.src || item.links?.some((link) => /^https:\/\/webtv\.un\.org\//.test(link.href))) result.push("video");
  if (item.audio?.href) result.push("audio");
  if (item.download?.href || item.links?.some((link) => /\.(pdf|docx?)(?:[?#]|$)/i.test(link.href))) result.push("document");
  return result;
}

export function relatedItems(item: EditorialItem, collection: EditorialItem[]): EditorialItem[] {
  const key = editorialKey(item);
  const score = (candidate: EditorialItem) => candidate.topics?.filter((topic) => item.topics?.includes(topic)).length || 0;
  const seen = new Set<string>();
  return collection.filter((candidate) => {
    const candidateKey = editorialKey(candidate);
    if (candidate.locale !== item.locale || candidateKey === key || seen.has(candidateKey) || !score(candidate)) return false;
    seen.add(candidateKey);
    return true;
  }).sort((a, b) => score(b) - score(a) || b.date.localeCompare(a.date)).slice(0, 3);
}

export function updateStaticPageNavigation(page: StaticPage): StaticPage {
  if (page.id === `news-${page.locale}`) {
    const descriptions = { es: "Encuentros, actividades, informes y recursos sobre pobreza y derechos humanos. Explora por categoría y tema.", en: "Meetings, activities, reports and resources on poverty and human rights. Explore by category and topic.", fr: "Rencontres, activités, rapports et ressources sur la pauvreté et les droits humains. Explorez par catégorie et par thème." };
    return { ...page, description: descriptions[page.locale] };
  }
  if (page.id === `media-${page.locale}`) return { ...page, title: categories.press[page.locale] };
  if (page.id !== `visits-${page.locale}`) return page;
  const copy = {
    es: { title: "Visitas del mandato", description: "Espacio reservado a las visitas del mandato que se confirmen.", label: "Próximamente", heading: "Un espacio para las visitas del mandato", body: "Las visitas del mandato se publicarán aquí cuando se confirmen. Los encuentros institucionales y las actividades culturales se pueden consultar en Actualidad.", action: "Explorar otras actividades" },
    en: { title: "Mandate visits", description: "A dedicated space for confirmed mandate visits.", label: "Coming soon", heading: "A dedicated space for mandate visits", body: "Mandate visits will be published here when confirmed. Institutional meetings and cultural activities are available in News.", action: "Explore other activities" },
    fr: { title: "Visites du mandat", description: "Un espace réservé aux visites confirmées du mandat.", label: "Bientôt disponible", heading: "Un espace consacré aux visites du mandat", body: "Les visites du mandat seront publiées ici lorsqu’elles seront confirmées. Les rencontres institutionnelles et les activités culturelles sont disponibles dans les Actualités.", action: "Explorer d’autres activités" },
  }[page.locale];
  return { ...page, title: copy.title, description: copy.description, body: `<section class="empty-state" aria-labelledby="visits-coming-soon"><p class="empty-state__label">${copy.label}</p><h2 id="visits-coming-soon">${copy.heading}</h2><p>${copy.body}</p><p><a class="button button--secondary" href="${newsPaths[page.locale]}">${copy.action}</a></p></section>` };
}
