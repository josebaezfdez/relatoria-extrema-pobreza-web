import type { EditorialItem, StaticPage } from "./content";
import { locales, type Locale } from "./site";
import media from "./poverty-day-2026-media.json";

export const povertyDayTopic = "day-against-poverty";

export const povertyDayCopy = {
  es: {
    path: "/es/actualidad/dia-lucha-contra-pobreza/",
    itemPath: "/es/actualidad/medios/video-dia-lucha-contra-pobreza-2026/",
    title: "Día de la lucha contra la pobreza",
    description: "Vídeos, actividades y materiales en torno al 17 de octubre y la lucha contra la pobreza.",
    introduction: "El 17 de octubre es una ocasión para poner el foco en la lucha contra la pobreza. Este espacio reúne vídeos, actividades y materiales relacionados con esta jornada.",
    videoTitle: "Vídeo · 17 de octubre de 2026",
    itemTitle: "Vídeo para el Día de la lucha contra la pobreza 2026",
    summary: "Vídeo elaborado en el marco del Día de la lucha contra la pobreza, conmemorado el 17 de octubre de 2026.",
    body: "Compartimos este vídeo elaborado en el marco del Día de la lucha contra la pobreza del 17 de octubre de 2026. Forma parte de los materiales reunidos en el apartado dedicado a esta jornada.",
    languageNote: "Se conserva el audio original y los subtítulos en inglés integrados en el vídeo. Las pistas de subtítulos accesibles y la transcripción están en revisión.",
    displayDate: "17 de octubre de 2026",
    eyebrow: "17 de octubre",
    action: "Explorar el apartado",
    imageAlt: "Imagen del vídeo para el Día de la lucha contra la pobreza: una intervención ante la Universidad Carlos III de Madrid.",
  },
  en: {
    path: "/en/news/day-against-poverty/",
    itemPath: "/en/news/media/day-against-poverty-video-2026/",
    title: "Day against poverty",
    description: "Videos, activities and resources marking 17 October and the fight against poverty.",
    introduction: "17 October is an opportunity to focus on the fight against poverty. This space brings together videos, activities and resources related to the day.",
    videoTitle: "Video · 17 October 2026",
    itemTitle: "Video for the Day against poverty 2026",
    summary: "A video produced to mark the Day against poverty, commemorated on 17 October 2026.",
    body: "We share this video produced to mark the Day against poverty on 17 October 2026. It is part of the material brought together in the section dedicated to this day.",
    languageNote: "The original audio and the English subtitles embedded in the video are preserved. Accessible caption tracks and the transcript are under review.",
    displayDate: "17 October 2026",
    eyebrow: "17 October",
    action: "Explore the section",
    imageAlt: "Still from the video for the Day against poverty: a contribution outside Universidad Carlos III de Madrid.",
  },
  fr: {
    path: "/fr/actualites/journee-lutte-contre-pauvrete/",
    itemPath: "/fr/actualites/medias/video-journee-lutte-contre-pauvrete-2026/",
    title: "Journée de lutte contre la pauvreté",
    description: "Vidéos, activités et ressources autour du 17 octobre et de la lutte contre la pauvreté.",
    introduction: "Le 17 octobre est l’occasion de mettre en lumière la lutte contre la pauvreté. Cet espace rassemble des vidéos, des activités et des ressources liées à cette journée.",
    videoTitle: "Vidéo · 17 octobre 2026",
    itemTitle: "Vidéo pour la Journée de lutte contre la pauvreté 2026",
    summary: "Une vidéo réalisée à l’occasion de la Journée de lutte contre la pauvreté, commémorée le 17 octobre 2026.",
    body: "Nous partageons cette vidéo réalisée dans le cadre de la Journée de lutte contre la pauvreté du 17 octobre 2026. Elle fait partie des ressources réunies dans la rubrique consacrée à cette journée.",
    languageNote: "La piste audio originale et les sous-titres anglais intégrés à la vidéo sont conservés. Les pistes de sous-titres accessibles et la transcription sont en cours de révision.",
    displayDate: "17 octobre 2026",
    eyebrow: "17 octobre",
    action: "Explorer la rubrique",
    imageAlt: "Image de la vidéo pour la Journée de lutte contre la pauvreté : une intervention devant l’Université Carlos III de Madrid.",
  },
} satisfies Record<Locale, Record<string, string>>;

export const povertyDay2026Items: EditorialItem[] = locales.map((locale) => {
  const copy = povertyDayCopy[locale];
  return {
    id: `poverty-day-video-2026-${locale}`,
    translation_group: "poverty-day-video-2026",
    type: "media",
    topics: [povertyDayTopic],
    locale,
    path: copy.itemPath,
    alternatePath: povertyDayCopy[locale === "es" ? "en" : "es"].itemPath,
    title: copy.itemTitle,
    eyebrow: copy.eyebrow,
    summary: copy.summary,
    date: "2026-10-17",
    displayDate: copy.displayDate,
    image: "2026-10-17-day-against-poverty",
    imageWidth: 1920,
    imageHeight: 1080,
    imageAlt: copy.imageAlt,
    body: `<p class="lead">${copy.body}</p><p>${copy.languageNote}</p>`,
    video: {
      title: copy.videoTitle,
      src: media.public_src,
      poster: media.public_poster,
      width: 1920,
      height: 1080,
    },
    links: [{ label: copy.title, href: copy.path }],
  };
});

export const povertyDayPages: StaticPage[] = locales.map((locale) => {
  const copy = povertyDayCopy[locale];
  return {
    id: `poverty-day-${locale}`,
    locale,
    path: copy.path,
    alternatePath: povertyDayCopy[locale === "es" ? "en" : "es"].path,
    title: copy.title,
    description: copy.description,
    eyebrow: copy.eyebrow,
    body: `<p class="lead">${copy.introduction}</p><p>${copy.languageNote}</p>`,
    listing: "news",
    topic: povertyDayTopic,
    featuredItemId: `poverty-day-video-2026-${locale}`,
  };
});
