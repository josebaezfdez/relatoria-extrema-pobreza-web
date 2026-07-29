import { locales, type Locale, type LocalizedPaths } from "./site";

export type ContentType = "report" | "visit" | "event" | "media" | "press_release";

export interface EditorialItem {
  id: string;
  type: ContentType;
  locale: Locale;
  path: string;
  alternatePath: string;
  translation_group?: string;
  translations?: Partial<Record<Locale, { path: string }>>;
  eyebrow: string;
  title: string;
  summary: string;
  date: string;
  displayDate: string;
  location?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  gallery?: MediaImage[];
  body: string;
  links?: { label: string; href: string }[];
  download?: { label: string; href: string };
  video?: { id: string; title: string };
  audio?: { label: string; href: string };
}

export interface MediaImage {
  slug: string;
  alt: string;
  width: number;
  height: number;
}

export interface StaticPage {
  id: string;
  locale: Locale;
  path: string;
  alternatePath: string;
  title: string;
  description: string;
  eyebrow?: string;
  body?: string;
  listing?: ContentType | "news";
}

type GalleryAsset = Omit<MediaImage, "alt"> & {
  alt: Record<Locale, string>;
};

const gallerySets = {
  hrc62Report: [
    {
      slug: "2026-06-25-hrc62-report-02",
      width: 1200,
      height: 1600,
      alt: {
        es: "Sesión del Consejo de Derechos Humanos durante la presentación del informe.",
        en: "Human Rights Council session during the presentation of the report.",
        fr: "Session du Conseil des droits de l’homme pendant la présentation du rapport.",
      },
    },
    {
      slug: "2026-06-25-hrc62-report-03",
      width: 1200,
      height: 1600,
      alt: {
        es: "Intervención de Elena Díaz Galán en la 62.ª sesión del Consejo de Derechos Humanos.",
        en: "Elena Díaz Galán speaking at the 62nd session of the Human Rights Council.",
        fr: "Intervention d’Elena Díaz Galán lors de la 62e session du Conseil des droits de l’homme.",
      },
    },
  ],
  participation: [
    {
      slug: "2026-06-hrc62-participation-02",
      width: 1200,
      height: 1600,
      alt: {
        es: "Intervención durante el evento paralelo del Consejo de Derechos Humanos.",
        en: "Intervention during the Human Rights Council side event.",
        fr: "Intervention pendant l’événement parallèle du Conseil des droits de l’homme.",
      },
    },
    {
      slug: "2026-06-hrc62-participation-03",
      width: 2000,
      height: 1126,
      alt: {
        es: "Mesa del evento paralelo sobre estrategias más allá del crecimiento.",
        en: "Panel at the side event on beyond-growth strategies.",
        fr: "Table ronde de l’événement parallèle sur les stratégies au-delà de la croissance.",
      },
    },
  ],
  humanRightsCity: [
    {
      slug: "2026-06-hrc62-human-rights-city-01",
      width: 1600,
      height: 900,
      alt: {
        es: "Evento paralelo sobre gobiernos locales y ciudades de derechos humanos.",
        en: "Side event on local government and human rights cities.",
        fr: "Événement parallèle sur les collectivités locales et les villes des droits de l’homme.",
      },
    },
  ],
  paris: [
    {
      slug: "2026-07-paris-field-visit-02",
      width: 1536,
      height: 2048,
      alt: {
        es: "Reunión institucional sobre solidaridad y lucha contra la exclusión en París.",
        en: "Institutional meeting on solidarity and the fight against exclusion in Paris.",
        fr: "Réunion institutionnelle sur la solidarité et la lutte contre l’exclusion à Paris.",
      },
    },
    {
      slug: "2026-07-paris-field-visit-03",
      width: 2048,
      height: 1536,
      alt: {
        es: "Visita a la Fabrique de la Solidarité de París.",
        en: "Visit to Paris’s Fabrique de la Solidarité.",
        fr: "Visite à la Fabrique de la Solidarité de Paris.",
      },
    },
    {
      slug: "2026-07-paris-field-visit-04-duplicate",
      width: 2048,
      height: 1536,
      alt: {
        es: "Otra imagen de la visita a la Fabrique de la Solidarité.",
        en: "Another image from the visit to the Fabrique de la Solidarité.",
        fr: "Autre image de la visite à la Fabrique de la Solidarité.",
      },
    },
    {
      slug: "2026-07-paris-field-visit-05",
      width: 3024,
      height: 4032,
      alt: {
        es: "Equipo participante en la visita a la Fabrique de la Solidarité.",
        en: "Team taking part in the visit to the Fabrique de la Solidarité.",
        fr: "Équipe participant à la visite de la Fabrique de la Solidarité.",
      },
    },
    {
      slug: "2026-07-paris-field-visit-06",
      width: 2016,
      height: 1512,
      alt: {
        es: "Espacio de trabajo de la Fabrique de la Solidarité.",
        en: "Working space at the Fabrique de la Solidarité.",
        fr: "Espace de travail de la Fabrique de la Solidarité.",
      },
    },
    {
      slug: "2026-07-paris-field-visit-07",
      width: 2016,
      height: 1512,
      alt: {
        es: "Visita al Atelier parisien d’urbanisme.",
        en: "Visit to the Atelier parisien d’urbanisme.",
        fr: "Visite à l’Atelier parisien d’urbanisme.",
      },
    },
  ],
  uc3m: [
    {
      slug: "2026-05-21-uc3m-experts-02",
      width: 1600,
      height: 1200,
      alt: {
        es: "Participantes en el encuentro de expertos académicos.",
        en: "Participants at the academic experts meeting.",
        fr: "Participants à la rencontre d’experts universitaires.",
      },
    },
    {
      slug: "2026-05-21-uc3m-experts-03",
      width: 1600,
      height: 1200,
      alt: {
        es: "Intervención durante el encuentro académico en Madrid.",
        en: "Intervention during the academic meeting in Madrid.",
        fr: "Intervention pendant la rencontre universitaire à Madrid.",
      },
    },
    {
      slug: "2026-05-21-uc3m-experts-04",
      width: 1200,
      height: 1600,
      alt: {
        es: "Mesa de trabajo del encuentro de expertos.",
        en: "Working panel at the experts meeting.",
        fr: "Table de travail de la rencontre d’experts.",
      },
    },
    {
      slug: "2026-05-21-uc3m-experts-05",
      width: 1600,
      height: 1200,
      alt: {
        es: "Asistentes al encuentro de presentación de la Relatoría.",
        en: "Attendees at the meeting presenting the mandate.",
        fr: "Participants à la rencontre de présentation du mandat.",
      },
    },
    {
      slug: "2026-05-21-uc3m-experts-06",
      width: 1600,
      height: 1200,
      alt: {
        es: "Fotografía de grupo del encuentro académico.",
        en: "Group photograph from the academic meeting.",
        fr: "Photographie de groupe de la rencontre universitaire.",
      },
    },
  ],
  deathPenalty: [
    {
      slug: "2026-07-death-penalty-congress-collage",
      width: 452,
      height: 640,
      alt: {
        es: "Composición de imágenes del Congreso Mundial contra la Pena de Muerte.",
        en: "Image collage from the World Congress Against the Death Penalty.",
        fr: "Montage d’images du Congrès mondial contre la peine de mort.",
      },
    },
    {
      slug: "2026-07-death-penalty-congress-02-duplicate",
      width: 720,
      height: 1280,
      alt: {
        es: "Otra imagen de la participación en el Congreso Mundial contra la Pena de Muerte.",
        en: "Another image of the participation in the World Congress Against the Death Penalty.",
        fr: "Autre image de la participation au Congrès mondial contre la peine de mort.",
      },
    },
    {
      slug: "2026-07-death-penalty-congress-03",
      width: 1200,
      height: 1600,
      alt: {
        es: "La Relatora con representantes de la Comisión Africana de Derechos Humanos y de los Pueblos.",
        en: "The Special Rapporteur with representatives of the African Commission on Human and Peoples’ Rights.",
        fr: "La Rapporteuse spéciale avec des représentants de la Commission africaine des droits de l’homme et des peuples.",
      },
    },
    {
      slug: "2026-07-death-penalty-congress-poster",
      width: 1584,
      height: 396,
      alt: {
        es: "Cartel del IX Congreso Mundial contra la Pena de Muerte.",
        en: "Poster for the 9th World Congress Against the Death Penalty.",
        fr: "Affiche du 9e Congrès mondial contre la peine de mort.",
      },
    },
  ],
  yuste: [
    {
      slug: "2026-07-yuste-course-02",
      width: 4592,
      height: 2576,
      alt: {
        es: "Sesión del curso sobre la Unión Europea, América Latina y el Caribe.",
        en: "Session of the course on the European Union, Latin America and the Caribbean.",
        fr: "Session du cours sur l’Union européenne, l’Amérique latine et les Caraïbes.",
      },
    },
    {
      slug: "2026-07-yuste-course-03",
      width: 4592,
      height: 2576,
      alt: {
        es: "Ponentes y participantes en el curso de Yuste.",
        en: "Speakers and participants at the Yuste course.",
        fr: "Intervenants et participants au cours de Yuste.",
      },
    },
    {
      slug: "2026-07-yuste-course-04",
      width: 4592,
      height: 2576,
      alt: {
        es: "Intervención en el curso UE-ALC celebrado en Yuste.",
        en: "Intervention at the EU-LAC course held in Yuste.",
        fr: "Intervention au cours UE-ALC organisé à Yuste.",
      },
    },
  ],
  community: [
    {
      slug: "2026-07-17-community-interests-congress-02",
      width: 1200,
      height: 1600,
      alt: {
        es: "Participantes en el congreso sobre intereses generales de la comunidad internacional.",
        en: "Participants at the congress on the general interests of the international community.",
        fr: "Participants au congrès sur les intérêts généraux de la communauté internationale.",
      },
    },
  ],
  minister: [
    {
      slug: "2026-07-21-minister-meeting-02",
      width: 958,
      height: 1280,
      alt: {
        es: "Segunda publicación sobre la reunión institucional con el ministro de Derechos Sociales.",
        en: "Second post about the institutional meeting with the Minister for Social Rights.",
        fr: "Deuxième publication sur la rencontre institutionnelle avec le ministre des Droits sociaux.",
      },
    },
  ],
  cadenaSer: [
    {
      slug: "2026-07-23-cadena-ser-02",
      width: 2000,
      height: 1128,
      alt: {
        es: "Estudio de Cadena SER Oeste durante la entrevista.",
        en: "Cadena SER Oeste studio during the interview.",
        fr: "Studio de Cadena SER Oeste pendant l’entretien.",
      },
    },
    {
      slug: "2026-07-23-cadena-ser-03",
      width: 1280,
      height: 960,
      alt: {
        es: "Participantes en la entrevista radiofónica.",
        en: "Participants in the radio interview.",
        fr: "Participants à l’entretien radiophonique.",
      },
    },
    {
      slug: "2026-07-23-cadena-ser-04-duplicate",
      width: 1280,
      height: 960,
      alt: {
        es: "Otra imagen de la entrevista radiofónica en Cadena SER Oeste.",
        en: "Another image from the Cadena SER Oeste radio interview.",
        fr: "Autre image de l’entretien radiophonique sur Cadena SER Oeste.",
      },
    },
  ],
  onceMeeting: [
    {
      slug: "2026-07-23-once-meeting-02",
      width: 2048,
      height: 1536,
      alt: {
        es: "Fotografía de grupo tras la reunión con la Fundación ONCE.",
        en: "Group photograph after the meeting with Fundación ONCE.",
        fr: "Photographie de groupe après la réunion avec la Fundación ONCE.",
      },
    },
  ],
  laLagunaCampus: [
    {
      slug: "2026-07-28-la-laguna-campus-02",
      width: 1600,
      height: 1200,
      alt: {
        es: "Fotografía de las personas participantes en el II Campus Internacional Ciudad de La Laguna.",
        en: "Group photograph of participants in the 2nd International Campus City of La Laguna.",
        fr: "Photographie de groupe des participants au IIe Campus international Ciudad de La Laguna.",
      },
    },
    {
      slug: "2026-07-28-la-laguna-campus-03",
      width: 1600,
      height: 1200,
      alt: {
        es: "Ponentes y organización del curso sobre democracia y derechos humanos en La Laguna.",
        en: "Speakers and organisers of the course on democracy and human rights in La Laguna.",
        fr: "Intervenants et organisateurs du cours sur la démocratie et les droits de l’homme à La Laguna.",
      },
    },
    {
      slug: "2026-07-28-la-laguna-campus-04",
      width: 1200,
      height: 1600,
      alt: {
        es: "Intervención de Elena Díaz Galán en el II Campus Internacional Ciudad de La Laguna.",
        en: "Elena Díaz Galán speaking at the 2nd International Campus City of La Laguna.",
        fr: "Intervention d’Elena Díaz Galán au IIe Campus international Ciudad de La Laguna.",
      },
    },
  ],
  laLagunaExhibitions: [
    {
      slug: "2026-07-27-la-laguna-exhibitions-02",
      width: 1200,
      height: 1600,
      alt: {
        es: "Visita a la exposición del Legado-Archivo Gregorio Peces-Barba.",
        en: "Visit to the Gregorio Peces-Barba Legacy Archive exhibition.",
        fr: "Visite de l’exposition consacrée au fonds d’archives Gregorio Peces-Barba.",
      },
    },
  ],
  munaVisit: [
    {
      slug: "2026-07-29-muna-visit-02",
      width: 2048,
      height: 1536,
      alt: {
        es: "Presentación de materiales arqueológicos durante la visita al MUNA.",
        en: "Presentation of archaeological materials during the visit to MUNA.",
        fr: "Présentation de matériaux archéologiques lors de la visite au MUNA.",
      },
    },
    {
      slug: "2026-07-29-muna-visit-03",
      width: 2048,
      height: 1536,
      alt: {
        es: "Explicación sobre piezas arqueológicas en el área de conservación del MUNA.",
        en: "Explanation of archaeological pieces in MUNA’s conservation area.",
        fr: "Présentation de pièces archéologiques dans l’espace de conservation du MUNA.",
      },
    },
  ],
} satisfies Record<string, GalleryAsset[]>;

function galleryFor(key: keyof typeof gallerySets, locale: Locale): MediaImage[] {
  return gallerySets[key].map(({ alt, ...asset }) => ({ ...asset, alt: alt[locale] }));
}

const mandateEs = `
  <p class="lead">Muchos derechos humanos resultan inaccesibles para quienes viven en la extrema pobreza. El mandato examina esta realidad desde la dignidad, la igualdad y la rendición de cuentas.</p>
  <h2>Objetivo del mandato</h2>
  <ul>
    <li>Dar mayor visibilidad a la situación de las personas que viven en extrema pobreza.</li>
    <li>Poner de relieve las consecuencias para los derechos humanos del abandono sistemático al que están sometidas.</li>
    <li>Examinar las iniciativas adoptadas para promover y proteger sus derechos y formular recomendaciones.</li>
  </ul>
  <h2>Origen y continuidad</h2>
  <p>La Comisión de Derechos Humanos estableció el mandato en 1998. El Consejo de Derechos Humanos, que sucedió a la Comisión en 2006, lo mantuvo y desarrolló mediante sucesivas resoluciones.</p>
  <p><a href="https://docs.un.org/A/HRC/RES/8/11">Resolución 8/11</a> · <a href="https://docs.un.org/A/HRC/RES/53/10">Resolución 53/10</a></p>
  <aside class="note"><strong>Archivo oficial.</strong> La documentación histórica y los materiales de titulares anteriores se consultan en la <a href="https://www.ohchr.org/es/special-procedures/sr-poverty">página oficial de OHCHR</a>.</aside>
`;

const mandateEn = `
  <p class="lead">Many human rights remain inaccessible to people living in extreme poverty. The mandate examines this reality through dignity, equality and accountability.</p>
  <h2>Purpose of the mandate</h2>
  <ul>
    <li>Give greater visibility to the situation of people living in extreme poverty.</li>
    <li>Highlight the human rights consequences of the systematic neglect they face.</li>
    <li>Examine initiatives to promote and protect their rights and make recommendations.</li>
  </ul>
  <h2>Origin and continuity</h2>
  <p>The Commission on Human Rights established the mandate in 1998. The Human Rights Council, which succeeded the Commission in 2006, maintained and developed it through successive resolutions.</p>
  <p><a href="https://docs.un.org/A/HRC/RES/8/11">Resolution 8/11</a> · <a href="https://docs.un.org/A/HRC/RES/53/10">Resolution 53/10</a></p>
  <aside class="note"><strong>Official archive.</strong> Historical documentation and material from previous mandate holders are available on the <a href="https://www.ohchr.org/en/special-procedures/sr-poverty">official OHCHR page</a>.</aside>
`;

const mandateFr = `
  <p class="lead">De nombreux droits de l’homme restent inaccessibles aux personnes vivant dans l’extrême pauvreté. Le mandat examine cette réalité sous l’angle de la dignité, de l’égalité et de la responsabilité.</p>
  <h2>Objectif du mandat</h2>
  <ul>
    <li>Donner une plus grande visibilité à la situation des personnes vivant dans l’extrême pauvreté.</li>
    <li>Mettre en lumière les conséquences, pour les droits de l’homme, de la négligence systématique dont elles font l’objet.</li>
    <li>Examiner les initiatives prises pour promouvoir et protéger leurs droits et formuler des recommandations.</li>
  </ul>
  <h2>Origine et continuité</h2>
  <p>La Commission des droits de l’homme a établi le mandat en 1998. Le Conseil des droits de l’homme, qui a succédé à la Commission en 2006, l’a maintenu et développé au moyen de résolutions successives.</p>
  <p><a href="https://docs.un.org/A/HRC/RES/8/11">Résolution 8/11</a> · <a href="https://docs.un.org/A/HRC/RES/53/10">Résolution 53/10</a></p>
  <aside class="note"><strong>Archives officielles.</strong> La documentation historique et les documents des précédents titulaires du mandat sont disponibles sur la <a href="https://www.ohchr.org/fr/special-procedures/sr-poverty">page officielle du HCDH</a>.</aside>
`;

const holderEs = `
  <p class="lead">Elena Carolina Díaz Galán fue nombrada Relatora Especial de las Naciones Unidas sobre la extrema pobreza y los derechos humanos por el Consejo de Derechos Humanos el 31 de marzo de 2026 y asumió sus funciones el 1 de mayo de 2026.</p>
  <h2>Trayectoria</h2>
  <p>Es profesora titular de Derecho Internacional Público y Relaciones Internacionales de la Universidad Rey Juan Carlos de Madrid. Su trabajo académico se centra en la erradicación de la pobreza, los derechos humanos y el desarrollo sostenible.</p>
  <p>Ha liderado proyectos sobre la feminización de la pobreza, los grupos en situación de vulnerabilidad y las relaciones entre la Unión Europea, América Latina y el Caribe. Ha formado parte de cátedras dedicadas al desarrollo sostenible, la inclusión social, la diversidad y los derechos humanos.</p>
  <p>Ha impartido conferencias en universidades de América, Asia, Europa y África y ha realizado estancias de investigación en universidades extranjeras.</p>
  <p><a class="text-link" href="https://www.ohchr.org/es/special-procedures/sr-poverty/ms-elena-carolina-diaz-galan">Consultar el perfil oficial en OHCHR</a> · <a class="text-link" href="https://spinternet.ohchr.org/ViewAllCountryMandates.aspx?Type=TM&lang=sp">Directorio oficial de procedimientos especiales</a></p>
`;

const holderEn = `
  <p class="lead">Elena Carolina Díaz Galán was appointed United Nations Special Rapporteur on extreme poverty and human rights by the Human Rights Council on 31 March 2026 and took up her duties on 1 May 2026.</p>
  <h2>Background</h2>
  <p>She is Associate Professor of Public International Law and International Relations at Rey Juan Carlos University in Madrid. Her academic work focuses on poverty eradication, human rights and sustainable development.</p>
  <p>She has led projects on the feminisation of poverty, groups in situations of vulnerability, and relations between the European Union, Latin America and the Caribbean. She has been a member of academic chairs on sustainable development, social inclusion, diversity and human rights.</p>
  <p>She has lectured at universities in the Americas, Asia, Europe and Africa and has undertaken research stays at universities abroad.</p>
  <p><a class="text-link" href="https://www.ohchr.org/en/special-procedures/sr-poverty/ms-elena-carolina-diaz-galan">View the official OHCHR profile</a> · <a class="text-link" href="https://spinternet.ohchr.org/ViewAllCountryMandates.aspx?Type=TM&lang=en">Official Special Procedures directory</a></p>
`;

const holderFr = `
  <p class="lead">Elena Carolina Díaz Galán a été nommée Rapporteuse spéciale des Nations Unies sur l’extrême pauvreté et les droits de l’homme par le Conseil des droits de l’homme le 31 mars 2026 et a pris ses fonctions le 1er mai 2026.</p>
  <h2>Parcours</h2>
  <p>Elle est professeure de droit international public et de relations internationales à l’Université Rey Juan Carlos de Madrid. Ses travaux universitaires portent sur l’éradication de la pauvreté, les droits de l’homme et le développement durable.</p>
  <p>Elle a dirigé des projets sur la féminisation de la pauvreté, les groupes en situation de vulnérabilité et les relations entre l’Union européenne, l’Amérique latine et les Caraïbes. Elle a participé à des chaires consacrées au développement durable, à l’inclusion sociale, à la diversité et aux droits de l’homme.</p>
  <p>Elle a donné des conférences dans des universités d’Amérique, d’Asie, d’Europe et d’Afrique et effectué des séjours de recherche dans des universités étrangères.</p>
  <p><a class="text-link" href="https://www.ohchr.org/fr/special-procedures/sr-poverty/ms-elena-carolina-diaz-galan">Consulter le profil officiel sur le site du HCDH</a> · <a class="text-link" href="https://spinternet.ohchr.org/ViewAllCountryMandates.aspx?Type=TM&lang=fr">Répertoire officiel des procédures spéciales</a></p>
`;

export const editorialItems: EditorialItem[] = [
  {
    id: "hrc62-roadmap-es",
    type: "report",
    locale: "es",
    path: "/es/informes/hoja-ruta-erradicar-pobreza-mas-alla-crecimiento/",
    alternatePath: "/en/reports/roadmap-eradicating-poverty-beyond-growth/",
    eyebrow: "Informe · Consejo de Derechos Humanos",
    title: "Hoja de ruta para erradicar la pobreza más allá del crecimiento",
    summary: "Presentación del informe elaborado por el anterior Relator Especial ante la 62.ª sesión del Consejo de Derechos Humanos.",
    date: "2026-06-25",
    displayDate: "25 de junio de 2026",
    location: "Ginebra",
    image: "2026-06-25-hrc62-report-01",
    imageAlt: "Elena Díaz Galán durante la presentación ante el Consejo de Derechos Humanos.",
    imageWidth: 1200,
    imageHeight: 1600,
    gallery: galleryFor("hrc62Report", "es"),
    body: `
      <p class="lead">El 25 de junio de 2026, Elena Carolina Díaz Galán presentó ante el Consejo de Derechos Humanos, en su 62.ª sesión, el informe elaborado por el anterior Relator Especial.</p>
      <h2>Una estrategia más allá del crecimiento</h2>
      <p>El informe propone situar el bienestar, la igualdad, la sostenibilidad y la participación efectiva de las personas en situación de pobreza en el centro de las estrategias nacionales.</p>
      <p>La presentación subrayó que la pobreza es multidimensional y que su erradicación no puede reducirse al aumento de los ingresos o del producto interior bruto.</p>
      <h2>Vídeo de la presentación</h2>
      <p>El vídeo se carga únicamente cuando la persona visitante lo solicita, para evitar conexiones automáticas con plataformas externas.</p>
    `,
    video: { id: "g134D1hsoXw", title: "Presentación ante la 62.ª sesión del Consejo de Derechos Humanos" },
    links: [{ label: "Mandato oficial en OHCHR", href: "https://www.ohchr.org/es/special-procedures/sr-poverty" }],
  },
  {
    id: "hrc62-roadmap-en",
    type: "report",
    locale: "en",
    path: "/en/reports/roadmap-eradicating-poverty-beyond-growth/",
    alternatePath: "/es/informes/hoja-ruta-erradicar-pobreza-mas-alla-crecimiento/",
    eyebrow: "Report · Human Rights Council",
    title: "Roadmap for eradicating poverty beyond growth",
    summary: "Presentation of the report prepared by the previous Special Rapporteur to the 62nd session of the Human Rights Council.",
    date: "2026-06-25",
    displayDate: "25 June 2026",
    location: "Geneva",
    image: "2026-06-25-hrc62-report-01",
    imageAlt: "Elena Díaz Galán during the presentation to the Human Rights Council.",
    imageWidth: 1200,
    imageHeight: 1600,
    gallery: galleryFor("hrc62Report", "en"),
    body: `
      <p class="lead">On 25 June 2026, Elena Carolina Díaz Galán presented the report prepared by the previous Special Rapporteur to the Human Rights Council at its 62nd session.</p>
      <h2>A strategy beyond growth</h2>
      <p>The report proposes placing well-being, equality, sustainability and the effective participation of people living in poverty at the centre of national strategies.</p>
      <p>The presentation stressed that poverty is multidimensional and that its eradication cannot be reduced to increases in income or gross domestic product.</p>
      <h2>Video of the presentation</h2>
      <p>The video loads only when requested by the visitor, avoiding automatic connections to external platforms.</p>
    `,
    video: { id: "g134D1hsoXw", title: "Presentation to the 62nd session of the Human Rights Council" },
    links: [{ label: "Official OHCHR mandate page", href: "https://www.ohchr.org/en/special-procedures/sr-poverty" }],
  },
  {
    id: "paris-es",
    type: "visit",
    locale: "es",
    path: "/es/visitas/paris-julio-2026/",
    alternatePath: "/en/visits/paris-july-2026/",
    eyebrow: "Visita sobre el terreno",
    title: "Encuentros institucionales y sociales en París",
    summary: "Reuniones con el Ayuntamiento de París y visitas a la Fabrique de la Solidarité y al Atelier parisien d’urbanisme.",
    date: "2026-07-01",
    displayDate: "Julio de 2026",
    location: "París, Francia",
    image: "2026-07-paris-field-visit-01",
    imageAlt: "Reunión de la Relatora Especial con representantes del Ayuntamiento de París.",
    gallery: galleryFor("paris", "es"),
    body: `
      <p class="lead">La visita reunió perspectivas institucionales, sociales y urbanas sobre desigualdad, exclusión y respuestas locales frente a la pobreza.</p>
      <h2>Ayuntamiento de París</h2>
      <p>La Relatora Especial mantuvo reuniones con responsables municipales de relaciones internacionales, solidaridad, lucha contra las desigualdades y exclusión.</p>
      <h2>Fabrique de la Solidarité</h2>
      <p>La visita permitió conocer este espacio de movilización ciudadana para las personas que desean actuar en el ámbito de la solidaridad.</p>
      <h2>Atelier parisien d’urbanisme</h2>
      <p>El encuentro con APUR abordó la dimensión urbana de la pobreza y el papel de la información territorial.</p>
    `,
  },
  {
    id: "paris-en",
    type: "visit",
    locale: "en",
    path: "/en/visits/paris-july-2026/",
    alternatePath: "/es/visitas/paris-julio-2026/",
    eyebrow: "Field visit",
    title: "Institutional and social meetings in Paris",
    summary: "Meetings with the City of Paris and visits to the Fabrique de la Solidarité and the Atelier parisien d’urbanisme.",
    date: "2026-07-01",
    displayDate: "July 2026",
    location: "Paris, France",
    image: "2026-07-paris-field-visit-01",
    imageAlt: "Meeting of the Special Rapporteur with representatives of the City of Paris.",
    gallery: galleryFor("paris", "en"),
    body: `
      <p class="lead">The visit brought together institutional, social and urban perspectives on inequality, exclusion and local responses to poverty.</p>
      <h2>City of Paris</h2>
      <p>The Special Rapporteur met municipal officials responsible for international relations, solidarity, combating inequalities and exclusion.</p>
      <h2>Fabrique de la Solidarité</h2>
      <p>The visit explored this space for mobilising residents who wish to act in the field of solidarity.</p>
      <h2>Atelier parisien d’urbanisme</h2>
      <p>The meeting with APUR addressed the urban dimension of poverty and the role of territorial information.</p>
    `,
  },
  {
    id: "press-release-es",
    type: "press_release",
    locale: "es",
    path: "/es/actualidad/comunicados/repensar-progreso-mas-alla-crecimiento/",
    alternatePath: "/en/news/press-releases/rethinking-progress-beyond-growth/",
    eyebrow: "Comunicado de prensa",
    title: "Repensar el progreso: combatir la pobreza más allá del crecimiento",
    summary: "La Relatora Especial llama a ampliar la protección social y redefinir el progreso situando a las personas, y no al PIB, en el centro.",
    date: "2026-06-25",
    displayDate: "25 de junio de 2026",
    location: "Ginebra",
    image: "2026-06-25-hrc62-report-02",
    imageAlt: "Sesión del Consejo de Derechos Humanos durante la presentación del informe.",
    body: `
      <p class="lead"><strong>GINEBRA (25 de junio de 2026)</strong> — Debe producirse un cambio fundamental en las estrategias mundiales de lucha contra la pobreza, superando la idea de que el crecimiento económico es la única vía para erradicarla, afirmó Elena Díaz Galán.</p>
      <blockquote>«Lo que importa a las personas que viven en la pobreza no es una expansión económica abstracta, sino mejoras reales en sus condiciones de vida. La pobreza es multidimensional y se experimenta en la vida cotidiana».</blockquote>
      <p>El informe y la Hoja de Ruta, elaborados por el anterior Relator Especial Olivier De Schutter, destacan el potencial transformador de las estrategias nacionales desarrolladas mediante procesos auténticamente participativos.</p>
      <p>Cuando las personas que experimentan la pobreza ayudan a definir prioridades, las políticas se vuelven más ambiciosas, realistas y eficaces. Además, fortalecen la toma de decisiones democrática al situar a quienes se ven más afectados en el centro del diseño de políticas públicas.</p>
      <p>Las estrategias cuestionan la creencia de que el crecimiento es una condición previa para el progreso social. Aunque sigue siendo necesario especialmente en países de bajos ingresos, debe orientarse para no agravar las desigualdades ni la degradación ambiental.</p>
      <p>La Hoja de Ruta es resultado de un proceso colaborativo de más de 18 meses, con más de 400 participantes entre gobiernos, sindicatos, organizaciones sociales, comunidad académica y agencias de Naciones Unidas.</p>
      <blockquote>«La pobreza no es inevitable; es el resultado de decisiones políticas. Acabar con ella requiere participación democrática, valentía política y una redefinición del propio concepto de progreso».</blockquote>
      <p>La Hoja de Ruta amplía las políticas disponibles más allá del modelo de crecer, gravar y transferir, e integra redistribución, reformas de mercado e inversión social.</p>
      <h2>Sobre los Procedimientos Especiales</h2>
      <p>Las relatorías especiales son expertas independientes nombradas por el Consejo de Derechos Humanos. Actúan a título individual, de forma voluntaria, y no forman parte del personal de Naciones Unidas.</p>
    `,
    download: { label: "Descargar comunicado original en inglés, francés y español (DOCX)", href: "/documents/2026-06-25-beyond-growth-press-release.docx" },
  },
  {
    id: "press-release-en",
    type: "press_release",
    locale: "en",
    path: "/en/news/press-releases/rethinking-progress-beyond-growth/",
    alternatePath: "/es/actualidad/comunicados/repensar-progreso-mas-alla-crecimiento/",
    eyebrow: "Press release",
    title: "Rethinking progress: fighting poverty beyond growth",
    summary: "The Special Rapporteur calls for expanded social protection and a redefinition of progress that puts people, not GDP, at the centre.",
    date: "2026-06-25",
    displayDate: "25 June 2026",
    location: "Geneva",
    image: "2026-06-25-hrc62-report-02",
    imageAlt: "Human Rights Council session during the report presentation.",
    body: `
      <p class="lead"><strong>GENEVA (25 June 2026)</strong> — There must be a fundamental shift in global anti-poverty strategies, moving beyond the idea that economic growth is the only path to eradication, Elena Díaz Galán said.</p>
      <blockquote>“What matters to people living in poverty is not abstract economic expansion, but real improvements in living conditions. Poverty is multidimensional and lived.”</blockquote>
      <p>The report and Roadmap, prepared by former Special Rapporteur Olivier De Schutter, highlight the transformative potential of national strategies developed through genuinely participatory processes.</p>
      <p>When people experiencing poverty help define priorities, policies become more ambitious, realistic and effective. They also strengthen democratic decision-making by placing those most affected at the centre of public policy design.</p>
      <p>These strategies challenge the belief that growth is a precondition for social progress. While growth remains necessary, particularly in low-income countries, it must be shaped so it does not worsen inequality or environmental degradation.</p>
      <p>The Roadmap is the result of an 18-month collaborative process involving more than 400 contributors from governments, trade unions, civil society, academia and UN agencies.</p>
      <blockquote>“Poverty is not inevitable — it is the product of policy choices. Ending it requires democratic participation, political courage and a redefinition of progress itself.”</blockquote>
      <p>The Roadmap expands the policy toolbox beyond the grow-tax-transfer model, combining redistribution, market reforms and social investment.</p>
      <h2>About the Special Procedures</h2>
      <p>Special Rapporteurs are independent experts appointed by the Human Rights Council. They serve in their individual capacity, work voluntarily and are not United Nations staff.</p>
    `,
    download: { label: "Download the original release in English, French and Spanish (DOCX)", href: "/documents/2026-06-25-beyond-growth-press-release.docx" },
  },
  {
    id: "uc3m-es",
    type: "event",
    locale: "es",
    path: "/es/actualidad/eventos/encuentro-expertos-uc3m/",
    alternatePath: "/en/news/events/uc3m-experts-meeting/",
    eyebrow: "Encuentro académico",
    title: "Encuentro de expertos sobre pobreza y derechos humanos",
    summary: "Presentación académica de la Relatoría Especial y puesta en marcha de un observatorio internacional en la Universidad Carlos III de Madrid.",
    date: "2026-05-21",
    displayDate: "21 de mayo de 2026",
    location: "Madrid",
    image: "2026-05-21-uc3m-experts-01",
    imageAlt: "Encuentro académico sobre pobreza y derechos humanos en la Universidad Carlos III.",
    gallery: galleryFor("uc3m", "es"),
    body: `<p class="lead">La Relatora impulsó un encuentro de expertos académicos para presentar el mandato y promover investigación aplicada sobre erradicación de la pobreza y protección de los derechos humanos.</p><p>El encuentro se vinculó a la creación del Observatorio Internacional para la Investigación de la Erradicación de la Pobreza y la Protección de los Derechos Humanos.</p>`,
    links: [{ label: "Observatorio Internacional en UC3M", href: "https://www.uc3m.es/ss/Satellite/INST-FranciscoVitoria/es/TextoDosColumnas/1371477256191/Observatorio_Internacional_para_la_Investigacion_de_la_Erradicacion_de_la_Pobreza_y_la_Proteccio" }],
  },
  {
    id: "uc3m-en",
    type: "event",
    locale: "en",
    path: "/en/news/events/uc3m-experts-meeting/",
    alternatePath: "/es/actualidad/eventos/encuentro-expertos-uc3m/",
    eyebrow: "Academic meeting",
    title: "Experts meeting on poverty and human rights",
    summary: "Academic presentation of the mandate and launch of an international observatory at Universidad Carlos III de Madrid.",
    date: "2026-05-21",
    displayDate: "21 May 2026",
    location: "Madrid",
    image: "2026-05-21-uc3m-experts-01",
    imageAlt: "Academic meeting on poverty and human rights at Universidad Carlos III.",
    gallery: galleryFor("uc3m", "en"),
    body: `<p class="lead">The Special Rapporteur promoted a meeting of academic experts to present the mandate and foster applied research on poverty eradication and human rights protection.</p><p>The meeting was linked to the creation of the International Observatory for Research on Poverty Eradication and Human Rights Protection.</p>`,
    links: [{ label: "International Observatory at UC3M", href: "https://www.uc3m.es/ss/Satellite/INST-FranciscoVitoria/es/TextoDosColumnas/1371477256191/Observatorio_Internacional_para_la_Investigacion_de_la_Erradicacion_de_la_Pobreza_y_la_Proteccio" }],
  },
  {
    id: "participation-es",
    type: "event",
    locale: "es",
    path: "/es/actualidad/eventos/participacion-personas-pobreza/",
    alternatePath: "/en/news/events/participation-people-in-poverty/",
    eyebrow: "Evento paralelo · HRC62",
    title: "Participación efectiva de las personas en situación de pobreza",
    summary: "Un diálogo sobre herramientas para incorporar el conocimiento directo de quienes experimentan la pobreza a las políticas públicas.",
    date: "2026-06-25",
    displayDate: "Junio de 2026",
    location: "Ginebra",
    image: "2026-06-hrc62-participation-01",
    imageAlt: "Participantes en el evento sobre participación efectiva de las personas en situación de pobreza.",
    gallery: galleryFor("participation", "es"),
    body: `<p class="lead">El evento exploró el principio de participación en la erradicación de la pobreza y herramientas concebidas para garantizar que las personas con experiencia directa puedan intervenir de forma efectiva.</p><p>Entre ellas se abordaron la Fusión de Conocimientos y la elaboración y evaluación inclusiva y deliberativa de políticas.</p>`,
  },
  {
    id: "participation-en",
    type: "event",
    locale: "en",
    path: "/en/news/events/participation-people-in-poverty/",
    alternatePath: "/es/actualidad/eventos/participacion-personas-pobreza/",
    eyebrow: "Side event · HRC62",
    title: "Effective participation of people living in poverty",
    summary: "A dialogue on tools for bringing the direct knowledge of people experiencing poverty into public policy.",
    date: "2026-06-25",
    displayDate: "June 2026",
    location: "Geneva",
    image: "2026-06-hrc62-participation-01",
    imageAlt: "Participants at the event on the effective participation of people in poverty.",
    gallery: galleryFor("participation", "en"),
    body: `<p class="lead">The event explored the principle of participation in poverty eradication and tools designed to ensure that people with direct experience can participate effectively.</p><p>These included the Merging of Knowledge and the Inclusive and Deliberative Elaboration and Evaluation of Policies.</p>`,
  },
  {
    id: "human-rights-city-es",
    type: "event",
    locale: "es",
    path: "/es/actualidad/eventos/ciudad-derechos-humanos/",
    alternatePath: "/en/news/events/human-rights-city/",
    eyebrow: "Evento paralelo · HRC62",
    title: "Gobiernos locales y ciudades de derechos humanos",
    summary: "Debate práctico sobre cómo integrar los derechos humanos en la gobernanza local.",
    date: "2026-06-25",
    displayDate: "Junio de 2026",
    location: "Ginebra",
    image: "2026-06-hrc62-human-rights-city-poster",
    imageAlt: "Cartel del evento sobre el marco para crear una ciudad de derechos humanos.",
    gallery: galleryFor("humanRightsCity", "es"),
    body: `<p class="lead">Representantes de OHCHR, personas expertas y responsables locales examinaron cómo un marco de orientación puede ayudar a integrar los derechos humanos en la gobernanza municipal.</p><p>El diálogo abordó también la cooperación entre niveles de gobierno y la relación con los mecanismos internacionales de derechos humanos.</p>`,
  },
  {
    id: "human-rights-city-en",
    type: "event",
    locale: "en",
    path: "/en/news/events/human-rights-city/",
    alternatePath: "/es/actualidad/eventos/ciudad-derechos-humanos/",
    eyebrow: "Side event · HRC62",
    title: "Local government and human rights cities",
    summary: "A practical discussion on integrating human rights into local governance.",
    date: "2026-06-25",
    displayDate: "June 2026",
    location: "Geneva",
    image: "2026-06-hrc62-human-rights-city-poster",
    imageAlt: "Poster for the event on the framework for creating a human rights city.",
    gallery: galleryFor("humanRightsCity", "en"),
    body: `<p class="lead">OHCHR representatives, thematic experts and local practitioners examined how a guidance framework can support the integration of human rights into municipal governance.</p><p>The discussion also considered cooperation between levels of government and engagement with international human rights mechanisms.</p>`,
  },
  {
    id: "pretoria-es",
    type: "event",
    locale: "es",
    path: "/es/actualidad/eventos/dialogo-pobreza-derechos-humanos/",
    alternatePath: "/en/news/events/dialogue-poverty-human-rights/",
    eyebrow: "Webinario",
    title: "Diálogo sobre pobreza y derechos humanos",
    summary: "Webinario del Centre for Human Rights de la Universidad de Pretoria sobre respuestas jurídicas y políticas inclusivas.",
    date: "2026-07-15",
    displayDate: "15 de julio de 2026",
    location: "En línea · Pretoria",
    image: "2026-07-15-dialogue-poverty-human-rights-poster",
    imageAlt: "Cartel del segundo Diálogo sobre Pobreza y Derechos Humanos.",
    imageWidth: 1241,
    imageHeight: 1754,
    body: `
      <p class="lead">El segundo Diálogo sobre Pobreza y Derechos Humanos abrió un espacio para examinar la conexión entre pobreza, dignidad, igualdad y rendición de cuentas.</p>
      <h2>Objetivos</h2>
      <ul><li>Analizar la pobreza desde una perspectiva de derechos humanos.</li><li>Debatir cómo la desigualdad y la injusticia social agravan la pobreza.</li><li>Destacar las obligaciones estatales y compartir buenas prácticas africanas.</li></ul>
      <h2>Programa publicado</h2>
      <p>La invitación anuncia el encuentro de 14:00 a 16:00 SAST y detalla intervenciones entre 14:30 y 15:30. Esta diferencia se mantiene señalada para revisión editorial.</p>
      <p>Participaron Elena Carolina Díaz Galán y Mudford Zachariah Mwandenga, de la Comisión Africana de Derechos Humanos y de los Pueblos.</p>
    `,
    download: { label: "Descargar invitación y programa original (PDF)", href: "/documents/2026-07-15-dialogue-poverty-human-rights.pdf" },
  },
  {
    id: "pretoria-en",
    type: "event",
    locale: "en",
    path: "/en/news/events/dialogue-poverty-human-rights/",
    alternatePath: "/es/actualidad/eventos/dialogo-pobreza-derechos-humanos/",
    eyebrow: "Webinar",
    title: "Dialogue on poverty and human rights",
    summary: "University of Pretoria Centre for Human Rights webinar on inclusive legal and policy responses.",
    date: "2026-07-15",
    displayDate: "15 July 2026",
    location: "Online · Pretoria",
    image: "2026-07-15-dialogue-poverty-human-rights-poster",
    imageAlt: "Poster for the second Dialogue on Poverty and Human Rights.",
    imageWidth: 1241,
    imageHeight: 1754,
    body: `
      <p class="lead">The second Dialogue on Poverty and Human Rights created a space to examine the relationship between poverty, dignity, equality and accountability.</p>
      <h2>Objectives</h2>
      <ul><li>Analyse poverty from a human rights perspective.</li><li>Discuss how inequality and social injustice exacerbate poverty.</li><li>Highlight state obligations and share good practices from African states.</li></ul>
      <h2>Published programme</h2>
      <p>The invitation announces the event from 14:00 to 16:00 SAST while the detailed programme runs from 14:30 to 15:30. The discrepancy remains flagged for editorial review.</p>
      <p>Speakers included Elena Carolina Díaz Galán and Mudford Zachariah Mwandenga of the African Commission on Human and Peoples’ Rights.</p>
    `,
    download: { label: "Download the original invitation and programme (PDF)", href: "/documents/2026-07-15-dialogue-poverty-human-rights.pdf" },
  },
  {
    id: "yuste-es",
    type: "event",
    locale: "es",
    path: "/es/actualidad/eventos/curso-ue-alc-yuste/",
    alternatePath: "/en/news/events/eu-lac-yuste-course/",
    eyebrow: "Curso",
    title: "UE-ALC: oportunidades y desafíos en un mundo en transformación",
    summary: "Participación en el curso de la Fundación Academia Europea e Iberoamericana de Yuste.",
    date: "2026-07-08",
    displayDate: "8–10 de julio de 2026",
    location: "Yuste, España",
    image: "2026-07-yuste-course-01",
    imageAlt: "Participación de Elena Díaz Galán en el curso UE-ALC de Yuste.",
    gallery: galleryFor("yuste", "es"),
    body: `<p class="lead">La intervención abordó las relaciones entre la Unión Europea, América Latina y el Caribe en un contexto de transformación internacional.</p><aside class="note"><strong>Vídeo pendiente.</strong> El vídeo maestro entregado corresponde exclusivamente a este curso. Se publicará tras completar control audiovisual, subtítulos y transcripción.</aside>`,
    links: [{ label: "Página oficial del curso en la Fundación Yuste", href: "https://www.fundacionyuste.org/campusyuste2026_2/" }],
  },
  {
    id: "yuste-en",
    type: "event",
    locale: "en",
    path: "/en/news/events/eu-lac-yuste-course/",
    alternatePath: "/es/actualidad/eventos/curso-ue-alc-yuste/",
    eyebrow: "Course",
    title: "EU-LAC: opportunities and challenges in a changing world",
    summary: "Participation in the course organised by the European and Ibero-American Academy of Yuste Foundation.",
    date: "2026-07-08",
    displayDate: "8–10 July 2026",
    location: "Yuste, Spain",
    image: "2026-07-yuste-course-01",
    imageAlt: "Elena Díaz Galán taking part in the EU-LAC course in Yuste.",
    gallery: galleryFor("yuste", "en"),
    body: `<p class="lead">The intervention addressed relations between the European Union, Latin America and the Caribbean in a changing international context.</p><aside class="note"><strong>Video pending.</strong> The supplied master video belongs exclusively to this course. It will be published after audiovisual quality control, captions and a transcript are complete.</aside>`,
    links: [{ label: "Official course page at Fundación Yuste", href: "https://www.fundacionyuste.org/campusyuste2026_2/" }],
  },
  {
    id: "mpdl-es",
    type: "event",
    locale: "es",
    path: "/es/actualidad/eventos/desafios-cooperacion-paz/",
    alternatePath: "/en/news/events/cooperation-peace-challenges/",
    eyebrow: "Cooperación y paz",
    title: "Desafíos de la cooperación y la paz",
    summary: "Participación en la presentación del número 159 de la revista Tiempo de Paz, dedicado al presente y futuro de la cooperación internacional.",
    date: "2026-06-22",
    displayDate: "22 de junio de 2026",
    location: "Madrid",
    body: `
      <p class="lead">Elena Carolina Díaz Galán participó en la jornada organizada por Movimiento por la Paz con motivo de la presentación del número 159 de la revista <em>Tiempo de Paz</em>.</p>
      <p>El encuentro, celebrado en la sede del Parlamento Europeo en Madrid, analizó los desafíos de la cooperación internacional en un contexto marcado por el aumento de los conflictos, las desigualdades y la crisis climática.</p>
      <p>La jornada reunió a representantes institucionales y especialistas en cooperación internacional, acción humanitaria y construcción de paz para reflexionar sobre la cooperación como instrumento de protección de derechos y de construcción de sociedades más justas y pacíficas.</p>
      <aside class="note"><strong>Vídeo pendiente.</strong> La grabación entregada se publicará cuando finalicen el control audiovisual, los subtítulos y la transcripción accesible.</aside>
    `,
    links: [
      { label: "Noticias de Movimiento por la Paz", href: "https://www.mpdl.org/noticias" },
      { label: "Número 159 de Tiempo de Paz", href: "https://www.fundipax.org/revista-tiempo-de-paz-159-desafios-de-la-cooperacion-y-la-paz/" },
    ],
  },
  {
    id: "mpdl-en",
    type: "event",
    locale: "en",
    path: "/en/news/events/cooperation-peace-challenges/",
    alternatePath: "/es/actualidad/eventos/desafios-cooperacion-paz/",
    eyebrow: "Cooperation and peace",
    title: "Challenges for cooperation and peace",
    summary: "Participation in the presentation of issue 159 of Tiempo de Paz, devoted to the present and future of international cooperation.",
    date: "2026-06-22",
    displayDate: "22 June 2026",
    location: "Madrid",
    body: `
      <p class="lead">Elena Carolina Díaz Galán took part in the event organised by Movimiento por la Paz to present issue 159 of the journal <em>Tiempo de Paz</em>.</p>
      <p>Held at the European Parliament’s office in Madrid, the event examined the challenges facing international cooperation amid rising conflict, inequality and the climate crisis.</p>
      <p>Institutional representatives and specialists in international cooperation, humanitarian action and peacebuilding discussed cooperation as a means of protecting rights and building fairer, more peaceful societies.</p>
      <aside class="note"><strong>Video pending.</strong> The supplied recording will be published after audiovisual quality control, captions and an accessible transcript are complete.</aside>
    `,
    links: [
      { label: "Movimiento por la Paz news", href: "https://www.mpdl.org/noticias" },
      { label: "Issue 159 of Tiempo de Paz", href: "https://www.fundipax.org/revista-tiempo-de-paz-159-desafios-de-la-cooperacion-y-la-paz/" },
    ],
  },
  {
    id: "death-penalty-es",
    type: "event",
    locale: "es",
    path: "/es/actualidad/eventos/congreso-mundial-pena-muerte/",
    alternatePath: "/en/news/events/world-congress-death-penalty/",
    eyebrow: "Congreso internacional",
    title: "IX Congreso Mundial contra la Pena de Muerte",
    summary: "Participación en el encuentro internacional del movimiento abolicionista celebrado en París.",
    date: "2026-07-02",
    displayDate: "30 de junio–2 de julio de 2026",
    location: "París, Francia",
    image: "2026-07-death-penalty-congress-01",
    imageAlt: "Elena Díaz Galán en el Congreso Mundial contra la Pena de Muerte.",
    gallery: galleryFor("deathPenalty", "es"),
    body: `<p class="lead">El congreso reunió a instituciones, sociedad civil, judicatura, periodismo y activismo joven en torno al objetivo de avanzar hacia la abolición universal de la pena de muerte.</p><p>Durante el encuentro, la Relatora mantuvo contactos con representantes de la Comisión Africana de Derechos Humanos y de los Pueblos.</p>`,
    links: [{ label: "Información oficial del IX Congreso Mundial", href: "https://www.ecpm.org/en/9wc/" }],
  },
  {
    id: "death-penalty-en",
    type: "event",
    locale: "en",
    path: "/en/news/events/world-congress-death-penalty/",
    alternatePath: "/es/actualidad/eventos/congreso-mundial-pena-muerte/",
    eyebrow: "International congress",
    title: "9th World Congress Against the Death Penalty",
    summary: "Participation in the international gathering of the abolitionist movement held in Paris.",
    date: "2026-07-02",
    displayDate: "30 June–2 July 2026",
    location: "Paris, France",
    image: "2026-07-death-penalty-congress-01",
    imageAlt: "Elena Díaz Galán at the World Congress Against the Death Penalty.",
    gallery: galleryFor("deathPenalty", "en"),
    body: `<p class="lead">The congress brought together institutions, civil society, judges, journalists and young activists around the goal of moving towards universal abolition of the death penalty.</p><p>During the meeting, the Special Rapporteur met representatives of the African Commission on Human and Peoples’ Rights.</p>`,
    links: [{ label: "Official 9th World Congress page", href: "https://www.ecpm.org/en/9wc/" }],
  },
  {
    id: "community-es",
    type: "event",
    locale: "es",
    path: "/es/actualidad/eventos/intereses-comunidad-internacional/",
    alternatePath: "/en/news/events/interests-international-community/",
    eyebrow: "Congreso internacional",
    title: "Intereses generales de la comunidad internacional",
    summary: "Participación en el VIII Congreso Internacional celebrado en el Colegio de España en París.",
    date: "2026-07-17",
    displayDate: "17–18 de julio de 2026",
    location: "París, Francia",
    image: "2026-07-17-community-interests-congress-01",
    imageAlt: "VIII Congreso Internacional celebrado en el Colegio de España en París.",
    gallery: galleryFor("community", "es"),
    body: `<p class="lead">El encuentro examinó la identificación y las consecuencias de los intereses generales de la comunidad internacional, con especial atención a las aportaciones de Europa y América.</p>`,
  },
  {
    id: "community-en",
    type: "event",
    locale: "en",
    path: "/en/news/events/interests-international-community/",
    alternatePath: "/es/actualidad/eventos/intereses-comunidad-internacional/",
    eyebrow: "International congress",
    title: "General interests of the international community",
    summary: "Participation in the eighth International Congress held at the Colegio de España in Paris.",
    date: "2026-07-17",
    displayDate: "17–18 July 2026",
    location: "Paris, France",
    image: "2026-07-17-community-interests-congress-01",
    imageAlt: "Eighth International Congress held at the Colegio de España in Paris.",
    gallery: galleryFor("community", "en"),
    body: `<p class="lead">The meeting examined the identification and consequences of the general interests of the international community, with particular attention to contributions from Europe and the Americas.</p>`,
  },
  {
    id: "minister-es",
    type: "event",
    locale: "es",
    path: "/es/actualidad/eventos/reunion-ministro-derechos-sociales/",
    alternatePath: "/en/news/events/meeting-minister-social-rights/",
    eyebrow: "Reunión institucional",
    title: "Reunión con el ministro de Derechos Sociales de España",
    summary: "Encuentro con el Ministerio de Derechos Sociales, Consumo y Agenda 2030.",
    date: "2026-07-21",
    displayDate: "21 de julio de 2026",
    location: "Madrid",
    image: "2026-07-21-minister-meeting-01",
    imageAlt: "Publicación sobre la reunión con el ministro de Derechos Sociales de España.",
    gallery: galleryFor("minister", "es"),
    body: `<p class="lead">La Relatora Especial mantuvo una reunión con el ministro de Derechos Sociales, Consumo y Agenda 2030 del Gobierno de España.</p><aside class="note">Las fotografías institucionales definitivas están pendientes de recepción. La captura publicada funciona como referencia provisional.</aside>`,
  },
  {
    id: "minister-en",
    type: "event",
    locale: "en",
    path: "/en/news/events/meeting-minister-social-rights/",
    alternatePath: "/es/actualidad/eventos/reunion-ministro-derechos-sociales/",
    eyebrow: "Institutional meeting",
    title: "Meeting with Spain’s Minister for Social Rights",
    summary: "Meeting with the Ministry of Social Rights, Consumer Affairs and the 2030 Agenda.",
    date: "2026-07-21",
    displayDate: "21 July 2026",
    location: "Madrid",
    image: "2026-07-21-minister-meeting-01",
    imageAlt: "Post about the meeting with Spain's Minister for Social Rights.",
    gallery: galleryFor("minister", "en"),
    body: `<p class="lead">The Special Rapporteur met Spain’s Minister for Social Rights, Consumer Affairs and the 2030 Agenda.</p><aside class="note">Final institutional photographs are still pending. The published screenshot is a temporary reference.</aside>`,
  },
  {
    id: "cadena-ser-es",
    type: "media",
    locale: "es",
    path: "/es/actualidad/medios/cadena-ser-oeste/",
    alternatePath: "/en/news/media/cadena-ser-oeste/",
    eyebrow: "En los medios",
    title: "Entrevista en Cadena SER Oeste",
    summary: "Conversación sobre el crecimiento de la pobreza y la prioridad temática de ciudades y pobreza.",
    date: "2026-07-23",
    displayDate: "23 de julio de 2026",
    location: "Móstoles, Madrid",
    image: "2026-07-23-cadena-ser-01",
    imageAlt: "Elena Díaz Galán durante la entrevista en Cadena SER Oeste.",
    gallery: galleryFor("cadenaSer", "es"),
    body: `<p class="lead">Elena Carolina Díaz Galán participó en Cadena SER Oeste para conversar sobre la evolución de la pobreza, su dimensión urbana y la necesidad de respuestas basadas en derechos humanos.</p>`,
    audio: { label: "Escuchar la entrevista en Cadena SER", href: "https://cadenaser.com/audio/1784810144928/" },
  },
  {
    id: "cadena-ser-en",
    type: "media",
    locale: "en",
    path: "/en/news/media/cadena-ser-oeste/",
    alternatePath: "/es/actualidad/medios/cadena-ser-oeste/",
    eyebrow: "In the media",
    title: "Interview on Cadena SER Oeste",
    summary: "A conversation on rising poverty and the thematic priority of cities and poverty.",
    date: "2026-07-23",
    displayDate: "23 July 2026",
    location: "Móstoles, Madrid",
    image: "2026-07-23-cadena-ser-01",
    imageAlt: "Elena Díaz Galán during the interview on Cadena SER Oeste.",
    gallery: galleryFor("cadenaSer", "en"),
    body: `<p class="lead">Elena Carolina Díaz Galán joined Cadena SER Oeste to discuss trends in poverty, its urban dimension and the need for human rights-based responses.</p>`,
    audio: { label: "Listen to the interview on Cadena SER", href: "https://cadenaser.com/audio/1784810144928/" },
  },
  {
    id: "once-meeting-es",
    type: "event",
    locale: "es",
    path: "/es/actualidad/eventos/reunion-fundacion-once/",
    alternatePath: "/en/news/events/fundacion-once-meeting/",
    eyebrow: "Reunión institucional",
    title: "Reunión con la Fundación ONCE sobre discapacidad e inclusión social",
    summary: "Encuentro con la Dirección de Alianzas y Relaciones Internacionales para abordar vías de cooperación e inclusión social de las personas con discapacidad.",
    date: "2026-07-23",
    displayDate: "23 de julio de 2026",
    location: "Madrid",
    image: "2026-07-23-once-meeting-01",
    imageAlt: "Elena Díaz Galán con representantes de la Fundación ONCE en Madrid.",
    imageWidth: 2048,
    imageHeight: 1536,
    gallery: galleryFor("onceMeeting", "es"),
    body: `<p class="lead">La Relatora se reunió con la Dirección de Alianzas y Relaciones Internacionales de la Fundación ONCE para conversar sobre cooperación e inclusión social de las personas con discapacidad.</p><p>El encuentro permitió compartir prioridades relacionadas con la participación, la igualdad de oportunidades y la protección de derechos de las personas con discapacidad en las políticas de lucha contra la pobreza.</p>`,
  },
  {
    id: "once-meeting-en",
    type: "event",
    locale: "en",
    path: "/en/news/events/fundacion-once-meeting/",
    alternatePath: "/es/actualidad/eventos/reunion-fundacion-once/",
    eyebrow: "Institutional meeting",
    title: "Meeting with Fundación ONCE on disability and social inclusion",
    summary: "A meeting with the Partnerships and International Relations Directorate to discuss cooperation and the social inclusion of persons with disabilities.",
    date: "2026-07-23",
    displayDate: "23 July 2026",
    location: "Madrid",
    image: "2026-07-23-once-meeting-01",
    imageAlt: "Elena Díaz Galán with representatives of Fundación ONCE in Madrid.",
    imageWidth: 2048,
    imageHeight: 1536,
    gallery: galleryFor("onceMeeting", "en"),
    body: `<p class="lead">The Special Rapporteur met Fundación ONCE’s Partnerships and International Relations Directorate to discuss cooperation and the social inclusion of persons with disabilities.</p><p>The meeting provided an opportunity to share priorities concerning participation, equal opportunities and the protection of the rights of persons with disabilities in anti-poverty policies.</p>`,
  },
  {
    id: "la-laguna-exhibitions-es",
    type: "visit",
    locale: "es",
    path: "/es/visitas/exposiciones-democracia-generaciones-futuras-la-laguna/",
    alternatePath: "/en/visits/democracy-future-generations-exhibitions-la-laguna/",
    eyebrow: "Actividad cultural",
    title: "Democracia, derechos humanos y generaciones futuras en La Laguna",
    summary: "Visita a dos exposiciones vinculadas al legado democrático de Gregorio Peces-Barba y a la Declaración de La Laguna de 1994.",
    date: "2026-07-27",
    displayDate: "27 de julio de 2026",
    location: "La Laguna, Tenerife",
    image: "2026-07-27-la-laguna-exhibitions-01",
    imageAlt: "Visita a la exposición sobre la Declaración Universal de los Derechos Humanos de las Generaciones Futuras.",
    imageWidth: 1200,
    imageHeight: 1600,
    gallery: galleryFor("laLagunaExhibitions", "es"),
    body: `<p class="lead">En el marco del curso sobre Democracia y Derechos Humanos, la Relatora visitó dos exposiciones que conectan memoria democrática, derechos humanos y responsabilidad intergeneracional.</p><h2>Legado democrático y derechos del futuro</h2><p>La primera visita estuvo dedicada al Legado-Archivo Gregorio Peces-Barba, bajo el título <em>La voz de la democracia y los derechos humanos</em>. La segunda recorrió la exposición sobre la <em>Declaración Universal de los Derechos Humanos de las Generaciones Futuras</em>, adoptada en La Laguna en 1994.</p>`,
  },
  {
    id: "la-laguna-exhibitions-en",
    type: "visit",
    locale: "en",
    path: "/en/visits/democracy-future-generations-exhibitions-la-laguna/",
    alternatePath: "/es/visitas/exposiciones-democracia-generaciones-futuras-la-laguna/",
    eyebrow: "Cultural activity",
    title: "Democracy, human rights and future generations in La Laguna",
    summary: "A visit to two exhibitions on the democratic legacy of Gregorio Peces-Barba and the 1994 Declaration of La Laguna.",
    date: "2026-07-27",
    displayDate: "27 July 2026",
    location: "La Laguna, Tenerife",
    image: "2026-07-27-la-laguna-exhibitions-01",
    imageAlt: "Visit to the exhibition on the Universal Declaration of Human Rights of Future Generations.",
    imageWidth: 1200,
    imageHeight: 1600,
    gallery: galleryFor("laLagunaExhibitions", "en"),
    body: `<p class="lead">As part of the course on Democracy and Human Rights, the Special Rapporteur visited two exhibitions linking democratic memory, human rights and intergenerational responsibility.</p><h2>Democratic legacy and the rights of the future</h2><p>The first visit focused on the Gregorio Peces-Barba Legacy Archive exhibition, <em>The voice of democracy and human rights</em>. The second explored the exhibition on the <em>Universal Declaration of Human Rights of Future Generations</em>, adopted in La Laguna in 1994.</p>`,
  },
  {
    id: "la-laguna-campus-es",
    type: "event",
    locale: "es",
    path: "/es/actualidad/eventos/curso-democracia-derechos-humanos-la-laguna/",
    alternatePath: "/en/news/events/democracy-human-rights-course-la-laguna/",
    eyebrow: "Curso internacional",
    title: "Curso sobre democracia y derechos humanos en La Laguna",
    summary: "Participación en el II Campus Internacional Ciudad de La Laguna con una conferencia sobre la erradicación de la pobreza desde una perspectiva de derechos humanos.",
    date: "2026-07-28",
    displayDate: "28 de julio de 2026",
    location: "La Laguna, Tenerife",
    image: "2026-07-28-la-laguna-campus-01",
    imageAlt: "Elena Díaz Galán presenta su conferencia sobre erradicación de la pobreza y derechos humanos en La Laguna.",
    imageWidth: 1600,
    imageHeight: 1200,
    gallery: galleryFor("laLagunaCampus", "es"),
    body: `<p class="lead">La Relatora participó en el curso sobre Democracia y Derechos Humanos del II Campus Internacional Ciudad de La Laguna.</p><h2>Erradicar la pobreza como propósito de la comunidad internacional</h2><p>Su conferencia abordó la erradicación de la pobreza como un objetivo esencial que debe integrarse en la protección internacional de los derechos humanos. La intervención subrayó la relación entre democracia, derechos humanos y lucha contra la pobreza, así como la necesidad de reforzar derechos sociales como la alimentación, el agua, la vivienda y un nivel de vida adecuado.</p>`,
    links: [{ label: "Leer la información publicada por Agencia EFE", href: "https://efe.com/canarias/2026-07-28/relatora-de-la-onu-defiende-incluir-la-erradicacion-de-la-pobreza-en-los-derechos-humanos/" }],
  },
  {
    id: "la-laguna-campus-en",
    type: "event",
    locale: "en",
    path: "/en/news/events/democracy-human-rights-course-la-laguna/",
    alternatePath: "/es/actualidad/eventos/curso-democracia-derechos-humanos-la-laguna/",
    eyebrow: "International course",
    title: "Course on democracy and human rights in La Laguna",
    summary: "Participation in the 2nd International Campus City of La Laguna with a lecture on poverty eradication from a human rights perspective.",
    date: "2026-07-28",
    displayDate: "28 July 2026",
    location: "La Laguna, Tenerife",
    image: "2026-07-28-la-laguna-campus-01",
    imageAlt: "Elena Díaz Galán presents her lecture on poverty eradication and human rights in La Laguna.",
    imageWidth: 1600,
    imageHeight: 1200,
    gallery: galleryFor("laLagunaCampus", "en"),
    body: `<p class="lead">The Special Rapporteur took part in the course on Democracy and Human Rights at the 2nd International Campus City of La Laguna.</p><h2>Eradicating poverty as a purpose of the international community</h2><p>Her lecture addressed poverty eradication as an essential objective that must be integrated into international human rights protection. It emphasised the relationship between democracy, human rights and the fight against poverty, as well as the need to strengthen social rights such as food, water, housing and an adequate standard of living.</p>`,
    links: [{ label: "Read the report published by Agencia EFE", href: "https://efe.com/canarias/2026-07-28/relatora-de-la-onu-defiende-incluir-la-erradicacion-de-la-pobreza-en-los-derechos-humanos/" }],
  },
  {
    id: "muna-visit-es",
    type: "event",
    locale: "es",
    path: "/es/actualidad/eventos/visita-museo-naturaleza-arqueologia-tenerife/",
    alternatePath: "/en/news/events/visit-museum-nature-archaeology-tenerife/",
    eyebrow: "Visita institucional",
    title: "Visita al Museo de Naturaleza y Arqueología de Tenerife",
    summary: "Recepción institucional y recorrido por el Museo de Naturaleza y Arqueología de Santa Cruz de Tenerife.",
    date: "2026-07-29",
    displayDate: "29 de julio de 2026",
    location: "Santa Cruz de Tenerife",
    image: "2026-07-29-muna-visit-01",
    imageAlt: "La Relatora y el equipo anfitrión en el Museo de Naturaleza y Arqueología de Santa Cruz de Tenerife.",
    imageWidth: 1600,
    imageHeight: 1200,
    gallery: galleryFor("munaVisit", "es"),
    body: `<p class="lead">La Relatora fue recibida por la dirección del Museo de Naturaleza y Arqueología de Santa Cruz de Tenerife.</p><p>Durante el recorrido conoció espacios del museo y materiales arqueológicos, acompañada por el equipo anfitrión.</p>`,
  },
  {
    id: "muna-visit-en",
    type: "event",
    locale: "en",
    path: "/en/news/events/visit-museum-nature-archaeology-tenerife/",
    alternatePath: "/es/actualidad/eventos/visita-museo-naturaleza-arqueologia-tenerife/",
    eyebrow: "Institutional visit",
    title: "Visit to the Museum of Nature and Archaeology of Tenerife",
    summary: "An institutional reception and tour of the Museum of Nature and Archaeology in Santa Cruz de Tenerife.",
    date: "2026-07-29",
    displayDate: "29 July 2026",
    location: "Santa Cruz de Tenerife",
    image: "2026-07-29-muna-visit-01",
    imageAlt: "The Special Rapporteur and hosts at the Museum of Nature and Archaeology in Santa Cruz de Tenerife.",
    imageWidth: 1600,
    imageHeight: 1200,
    gallery: galleryFor("munaVisit", "en"),
    body: `<p class="lead">The Special Rapporteur was received by the director of the Museum of Nature and Archaeology in Santa Cruz de Tenerife.</p><p>During the tour, she visited museum facilities and learned about archaeological materials alongside the host team.</p>`,
  },
  {
    id: "la-razon-interview-es",
    type: "media",
    locale: "es",
    path: "/es/actualidad/medios/entrevista-la-razon-pobreza-derechos-humanos/",
    alternatePath: "/en/news/media/la-razon-interview-poverty-human-rights/",
    eyebrow: "Entrevista · La Razón",
    title: "La pobreza extrema es una vulneración directa de los derechos humanos",
    summary: "La entrevista presenta las prioridades iniciales del mandato: visibilizar a quienes viven en extrema pobreza y reforzar las garantías de los derechos económicos, sociales y culturales.",
    date: "2026-04-13",
    displayDate: "13 de abril de 2026",
    body: `<p class="lead">La Razón conversa con Elena Díaz Galán tras su nombramiento como Relatora Especial y repasa los principales retos de una pobreza que debe entenderse de forma multidimensional.</p><p>La entrevista aborda la necesidad de mecanismos efectivos que obliguen a los Estados a respetar los derechos sociales, la importancia de colaborar con la sociedad civil y el efecto que los conflictos armados y las sanciones pueden tener sobre las personas más vulnerables.</p>`,
    links: [{ label: "Leer la entrevista completa en La Razón", href: "https://www.larazon.es/internacional/elena-diaz-galan-pobreza-extrema-vulneracion-directa-derechos-humanos_2026041369dc40249e87c91dbff254c4.html" }],
  },
  {
    id: "la-razon-interview-en",
    type: "media",
    locale: "en",
    path: "/en/news/media/la-razon-interview-poverty-human-rights/",
    alternatePath: "/es/actualidad/medios/entrevista-la-razon-pobreza-derechos-humanos/",
    eyebrow: "Interview · La Razón",
    title: "Extreme poverty is a direct violation of human rights",
    summary: "The interview introduces the mandate’s initial priorities: making people in extreme poverty visible and strengthening guarantees for economic, social and cultural rights.",
    date: "2026-04-13",
    displayDate: "13 April 2026",
    body: `<p class="lead">La Razón speaks with Elena Díaz Galán following her appointment as Special Rapporteur and reviews the main challenges posed by poverty as a multidimensional reality.</p><p>The interview discusses the need for effective mechanisms requiring States to respect social rights, the importance of working with civil society, and the impact that armed conflicts and sanctions can have on the most vulnerable people.</p>`,
    links: [{ label: "Read the full interview in La Razón", href: "https://www.larazon.es/internacional/elena-diaz-galan-pobreza-extrema-vulneracion-directa-derechos-humanos_2026041369dc40249e87c91dbff254c4.html" }],
  },
  {
    id: "hoy-interview-es",
    type: "media",
    locale: "es",
    path: "/es/actualidad/medios/entrevista-hoy-nuevas-causas-pobreza/",
    alternatePath: "/en/news/media/hoy-interview-changing-causes-poverty/",
    eyebrow: "Entrevista · HOY",
    title: "Las causas de la pobreza no son las mismas que hace treinta años",
    summary: "La entrevista explica la función independiente de la Relatora y examina nuevas dimensiones de la pobreza relacionadas con la exclusión, el medio ambiente y la digitalización.",
    date: "2026-05-10",
    displayDate: "10 de mayo de 2026",
    body: `<p class="lead">HOY presenta el mandato como los «ojos y oídos» de Naciones Unidas para examinar, asesorar e informar públicamente sobre la extrema pobreza y los derechos humanos.</p><p>La conversación aborda la situación de unas 700 millones de personas, la pobreza urbana y rural también en España, el papel de la sociedad civil en las visitas oficiales y la evolución del concepto de pobreza hacia retos contemporáneos como el cambio climático, la digitalización y el acceso efectivo a servicios esenciales.</p>`,
    links: [{ label: "Leer la entrevista completa en HOY", href: "https://www.hoy.es/extremadura/causas-pobreza-treinta-anos-20260510174201-nt.html" }],
  },
  {
    id: "hoy-interview-en",
    type: "media",
    locale: "en",
    path: "/en/news/media/hoy-interview-changing-causes-poverty/",
    alternatePath: "/es/actualidad/medios/entrevista-hoy-nuevas-causas-pobreza/",
    eyebrow: "Interview · HOY",
    title: "The causes of poverty are not the same as thirty years ago",
    summary: "The interview explains the Rapporteur’s independent role and examines new dimensions of poverty linked to exclusion, the environment and digitalisation.",
    date: "2026-05-10",
    displayDate: "10 May 2026",
    body: `<p class="lead">HOY describes the mandate as the United Nations’ “eyes and ears” for examining, advising and reporting publicly on extreme poverty and human rights.</p><p>The conversation addresses the situation of some 700 million people, urban and rural poverty including in Spain, civil society’s role in official visits, and the evolution of poverty towards contemporary challenges such as climate change, digitalisation and effective access to essential services.</p>`,
    links: [{ label: "Read the full interview in HOY", href: "https://www.hoy.es/extremadura/causas-pobreza-treinta-anos-20260510174201-nt.html" }],
  },
  {
    id: "el-pais-interview-es",
    type: "media",
    locale: "es",
    path: "/es/actualidad/medios/entrevista-el-pais-pobreza-derechos-humanos/",
    alternatePath: "/en/news/media/el-pais-interview-poverty-human-rights/",
    eyebrow: "Entrevista · El País",
    title: "Es imposible acabar con la pobreza sin proteger los derechos humanos",
    summary: "Elena Díaz Galán expone sus prioridades para el mandato y anticipa un primer informe temático sobre pobreza urbana y responsabilidad de los Estados.",
    date: "2026-05-29",
    displayDate: "29 de mayo de 2026",
    body: `<p class="lead">El País entrevista a la Relatora sobre la magnitud global de la pobreza y la necesidad de abordarla como una realidad económica, social, medioambiental y cultural.</p><p>La conversación presenta tres prioridades —visibilizar, sensibilizar y orientar— y destaca que las normas, las políticas públicas y los sistemas financieros deben colocar a las personas en el centro. También aborda el acceso a vivienda, educación y salud, la pobreza urbana y la atención a grupos especialmente afectados.</p>`,
    links: [{ label: "Leer la entrevista completa en El País", href: "https://elpais.com/internacional/2026-05-29/elena-diaz-galan-relatora-especial-de-la-onu-es-imposible-acabar-con-la-pobreza-sin-proteger-los-derechos-humanos.html" }],
  },
  {
    id: "el-pais-interview-en",
    type: "media",
    locale: "en",
    path: "/en/news/media/el-pais-interview-poverty-human-rights/",
    alternatePath: "/es/actualidad/medios/entrevista-el-pais-pobreza-derechos-humanos/",
    eyebrow: "Interview · El País",
    title: "Ending poverty is impossible without protecting human rights",
    summary: "Elena Díaz Galán sets out her priorities for the mandate and previews a first thematic report on urban poverty and State responsibility.",
    date: "2026-05-29",
    displayDate: "29 May 2026",
    body: `<p class="lead">El País interviews the Special Rapporteur about the global scale of poverty and the need to understand it as an economic, social, environmental and cultural reality.</p><p>The conversation presents three priorities—visibility, awareness and guidance—and stresses that laws, public policies and financial systems must put people at the centre. It also addresses access to housing, education and health, urban poverty and groups that are particularly affected.</p>`,
    links: [{ label: "Read the full interview in El País", href: "https://elpais.com/internacional/2026-05-29/elena-diaz-galan-relatora-especial-de-la-onu-es-imposible-acabar-con-la-pobreza-sin-proteger-los-derechos-humanos.html" }],
  },
  {
    id: "efe-la-laguna-es",
    type: "media",
    locale: "es",
    path: "/es/actualidad/medios/efe-erradicacion-pobreza-derechos-humanos/",
    alternatePath: "/en/news/media/efe-poverty-eradication-human-rights/",
    eyebrow: "Noticia · Agencia EFE",
    title: "La erradicación de la pobreza debe formar parte de los derechos humanos",
    summary: "La noticia recoge la propuesta de vincular jurídicamente la lucha contra la pobreza con la protección de los derechos humanos y la calidad democrática.",
    date: "2026-07-28",
    displayDate: "28 de julio de 2026",
    location: "La Laguna, Tenerife",
    body: `<p class="lead">Agencia EFE resume la conferencia de Elena Díaz Galán en el II Campus Internacional Ciudad de La Laguna, donde defendió que la extrema pobreza no es una cuestión de caridad, sino una urgencia de derechos humanos.</p><p>La pieza destaca el vínculo entre democracia, protección de los derechos humanos y erradicación de la pobreza, así como la obligación de los Estados de priorizar a las personas más vulnerables y reforzar derechos como la alimentación, el agua, la vivienda y un nivel de vida adecuado.</p>`,
    links: [{ label: "Leer la noticia completa en Agencia EFE", href: "https://efe.com/canarias/2026-07-28/relatora-de-la-onu-defiende-incluir-la-erradicacion-de-la-pobreza-en-los-derechos-humanos/" }],
  },
  {
    id: "efe-la-laguna-en",
    type: "media",
    locale: "en",
    path: "/en/news/media/efe-poverty-eradication-human-rights/",
    alternatePath: "/es/actualidad/medios/efe-erradicacion-pobreza-derechos-humanos/",
    eyebrow: "News report · Agencia EFE",
    title: "Poverty eradication should be part of human rights protection",
    summary: "The report covers the proposal to connect the fight against poverty in law with human rights protection and the quality of democracy.",
    date: "2026-07-28",
    displayDate: "28 July 2026",
    location: "La Laguna, Tenerife",
    body: `<p class="lead">Agencia EFE summarises Elena Díaz Galán’s lecture at the 2nd International Campus City of La Laguna, where she argued that extreme poverty is not a matter of charity but an urgent human rights issue.</p><p>The report highlights the connection between democracy, human rights protection and poverty eradication, as well as States’ duty to prioritise the most vulnerable people and strengthen rights such as food, water, housing and an adequate standard of living.</p>`,
    links: [{ label: "Read the full report from Agencia EFE", href: "https://efe.com/canarias/2026-07-28/relatora-de-la-onu-defiende-incluir-la-erradicacion-de-la-pobreza-en-los-derechos-humanos/" }],
  },
  {
    id: "hrc62-roadmap-fr",
    type: "report",
    locale: "fr",
    path: "/fr/rapports/feuille-route-eradiquer-pauvrete-au-dela-croissance/",
    alternatePath: "/es/informes/hoja-ruta-erradicar-pobreza-mas-alla-crecimiento/",
    eyebrow: "Rapport · Conseil des droits de l’homme",
    title: "Feuille de route pour éradiquer la pauvreté au-delà de la croissance",
    summary: "Présentation du rapport préparé par le précédent Rapporteur spécial à la 62e session du Conseil des droits de l’homme.",
    date: "2026-06-25",
    displayDate: "25 juin 2026",
    location: "Genève",
    image: "2026-06-25-hrc62-report-01",
    imageAlt: "Elena Díaz Galán lors de la présentation devant le Conseil des droits de l’homme.",
    imageWidth: 1200,
    imageHeight: 1600,
    gallery: galleryFor("hrc62Report", "fr"),
    body: `
      <p class="lead">Le 25 juin 2026, Elena Carolina Díaz Galán a présenté à la 62e session du Conseil des droits de l’homme le rapport préparé par le précédent Rapporteur spécial.</p>
      <h2>Une stratégie au-delà de la croissance</h2>
      <p>Le rapport propose de placer le bien-être, l’égalité, la durabilité et la participation effective des personnes vivant dans la pauvreté au cœur des stratégies nationales.</p>
      <p>La présentation a souligné que la pauvreté est multidimensionnelle et que son éradication ne peut se réduire à l’augmentation des revenus ou du produit intérieur brut.</p>
      <h2>Vidéo de la présentation</h2>
      <p>La vidéo n’est chargée qu’à la demande de la personne qui visite le site, afin d’éviter toute connexion automatique à des plateformes externes.</p>
    `,
    video: { id: "g134D1hsoXw", title: "Présentation à la 62e session du Conseil des droits de l’homme" },
    links: [{ label: "Page officielle du mandat sur le site du HCDH", href: "https://www.ohchr.org/fr/special-procedures/sr-poverty" }],
  },
  {
    id: "paris-fr",
    type: "visit",
    locale: "fr",
    path: "/fr/visites/paris-juillet-2026/",
    alternatePath: "/es/visitas/paris-julio-2026/",
    eyebrow: "Visite de terrain",
    title: "Rencontres institutionnelles et sociales à Paris",
    summary: "Rencontres avec la Ville de Paris et visites à la Fabrique de la Solidarité et à l’Atelier parisien d’urbanisme.",
    date: "2026-07-01",
    displayDate: "Juillet 2026",
    location: "Paris, France",
    image: "2026-07-paris-field-visit-01",
    imageAlt: "Rencontre de la Rapporteuse spéciale avec des représentantes et représentants de la Ville de Paris.",
    gallery: galleryFor("paris", "fr"),
    body: `
      <p class="lead">La visite a réuni des perspectives institutionnelles, sociales et urbaines sur les inégalités, l’exclusion et les réponses locales à la pauvreté.</p>
      <h2>Ville de Paris</h2>
      <p>La Rapporteuse spéciale a rencontré des responsables municipaux chargés des relations internationales, de la solidarité et de la lutte contre les inégalités et l’exclusion.</p>
      <h2>Fabrique de la Solidarité</h2>
      <p>La visite a permis de découvrir cet espace de mobilisation destiné aux habitantes et habitants qui souhaitent agir dans le domaine de la solidarité.</p>
      <h2>Atelier parisien d’urbanisme</h2>
      <p>La rencontre avec l’APUR a porté sur la dimension urbaine de la pauvreté et le rôle de l’information territoriale.</p>
    `,
  },
  {
    id: "press-release-fr",
    type: "press_release",
    locale: "fr",
    path: "/fr/actualites/communiques/repenser-progres-au-dela-croissance/",
    alternatePath: "/es/actualidad/comunicados/repensar-progreso-mas-alla-crecimiento/",
    eyebrow: "Communiqué de presse",
    title: "Repenser le progrès : lutter contre la pauvreté au-delà de la croissance",
    summary: "La Rapporteuse spéciale appelle à élargir la protection sociale et à redéfinir le progrès en plaçant les personnes, et non le PIB, au centre.",
    date: "2026-06-25",
    displayDate: "25 juin 2026",
    location: "Genève",
    image: "2026-06-25-hrc62-report-02",
    imageAlt: "Session du Conseil des droits de l’homme lors de la présentation du rapport.",
    body: `
      <p class="lead"><strong>GENÈVE (25 juin 2026)</strong> — Les stratégies mondiales de lutte contre la pauvreté doivent opérer un changement fondamental et dépasser l’idée selon laquelle la croissance économique serait la seule voie vers son éradication, a déclaré Elena Díaz Galán.</p>
      <blockquote>« Ce qui compte pour les personnes vivant dans la pauvreté, ce n’est pas une expansion économique abstraite, mais une amélioration réelle de leurs conditions de vie. La pauvreté est multidimensionnelle et se vit au quotidien. »</blockquote>
      <p>Le rapport et la Feuille de route, préparés par l’ancien Rapporteur spécial Olivier De Schutter, mettent en évidence le potentiel transformateur des stratégies nationales élaborées au moyen de processus véritablement participatifs.</p>
      <p>Lorsque les personnes confrontées à la pauvreté contribuent à définir les priorités, les politiques deviennent plus ambitieuses, réalistes et efficaces. Elles renforcent également la prise de décision démocratique en plaçant les personnes les plus touchées au cœur de la conception des politiques publiques.</p>
      <p>Ces stratégies remettent en cause l’idée que la croissance est une condition préalable au progrès social. Si elle reste nécessaire, notamment dans les pays à faible revenu, elle doit être orientée de façon à ne pas aggraver les inégalités ni la dégradation de l’environnement.</p>
      <p>La Feuille de route est le fruit d’un processus collaboratif de plus de 18 mois auquel ont contribué plus de 400 personnes issues des gouvernements, des syndicats, de la société civile, du monde universitaire et des organismes des Nations Unies.</p>
      <blockquote>« La pauvreté n’est pas inévitable : elle résulte de choix politiques. Y mettre fin exige une participation démocratique, du courage politique et une redéfinition du progrès lui-même. »</blockquote>
      <p>La Feuille de route élargit l’éventail des politiques au-delà du modèle croissance-fiscalité-transferts, en combinant redistribution, réformes des marchés et investissement social.</p>
      <h2>À propos des procédures spéciales</h2>
      <p>Les rapporteurs spéciaux sont des experts indépendants nommés par le Conseil des droits de l’homme. Ils exercent leur mandat à titre personnel et bénévole et ne font pas partie du personnel des Nations Unies.</p>
    `,
    download: { label: "Télécharger le communiqué original en anglais, français et espagnol (DOCX)", href: "/documents/2026-06-25-beyond-growth-press-release.docx" },
  },
  {
    id: "uc3m-fr",
    type: "event",
    locale: "fr",
    path: "/fr/actualites/evenements/rencontre-experts-uc3m/",
    alternatePath: "/es/actualidad/eventos/encuentro-expertos-uc3m/",
    eyebrow: "Rencontre universitaire",
    title: "Rencontre d’experts sur la pauvreté et les droits de l’homme",
    summary: "Présentation universitaire du mandat et lancement d’un observatoire international à l’Université Carlos III de Madrid.",
    date: "2026-05-21",
    displayDate: "21 mai 2026",
    location: "Madrid",
    image: "2026-05-21-uc3m-experts-01",
    imageAlt: "Rencontre universitaire sur la pauvreté et les droits de l’homme à l’Université Carlos III.",
    gallery: galleryFor("uc3m", "fr"),
    body: `<p class="lead">La Rapporteuse spéciale a organisé une rencontre d’experts universitaires afin de présenter le mandat et de promouvoir la recherche appliquée sur l’éradication de la pauvreté et la protection des droits de l’homme.</p><p>La rencontre était liée à la création de l’Observatoire international pour la recherche sur l’éradication de la pauvreté et la protection des droits de l’homme.</p>`,
    links: [{ label: "Observatoire international à l’UC3M", href: "https://www.uc3m.es/ss/Satellite/INST-FranciscoVitoria/es/TextoDosColumnas/1371477256191/Observatorio_Internacional_para_la_Investigacion_de_la_Erradicacion_de_la_Pobreza_y_la_Proteccio" }],
  },
  {
    id: "participation-fr",
    type: "event",
    locale: "fr",
    path: "/fr/actualites/evenements/participation-personnes-pauvrete/",
    alternatePath: "/es/actualidad/eventos/participacion-personas-pobreza/",
    eyebrow: "Événement parallèle · CDH62",
    title: "Participation effective des personnes vivant dans la pauvreté",
    summary: "Un dialogue sur les outils permettant d’intégrer aux politiques publiques les connaissances directes des personnes confrontées à la pauvreté.",
    date: "2026-06-25",
    displayDate: "Juin 2026",
    location: "Genève",
    image: "2026-06-hrc62-participation-01",
    imageAlt: "Participants à l’événement sur la participation effective des personnes vivant dans la pauvreté.",
    gallery: galleryFor("participation", "fr"),
    body: `<p class="lead">L’événement a exploré le principe de participation à l’éradication de la pauvreté et les outils conçus pour garantir la participation effective des personnes ayant une expérience directe de la pauvreté.</p><p>Parmi ces outils figuraient le Croisement des savoirs ainsi que l’élaboration et l’évaluation inclusives et délibératives des politiques.</p>`,
  },
  {
    id: "human-rights-city-fr",
    type: "event",
    locale: "fr",
    path: "/fr/actualites/evenements/ville-droits-homme/",
    alternatePath: "/es/actualidad/eventos/ciudad-derechos-humanos/",
    eyebrow: "Événement parallèle · CDH62",
    title: "Collectivités locales et villes des droits de l’homme",
    summary: "Une discussion pratique sur l’intégration des droits de l’homme dans la gouvernance locale.",
    date: "2026-06-25",
    displayDate: "Juin 2026",
    location: "Genève",
    image: "2026-06-hrc62-human-rights-city-poster",
    imageAlt: "Affiche de l’événement consacré au cadre pour la création d’une ville des droits de l’homme.",
    gallery: galleryFor("humanRightsCity", "fr"),
    body: `<p class="lead">Des représentants du HCDH, des experts thématiques et des responsables locaux ont examiné comment un cadre d’orientation peut favoriser l’intégration des droits de l’homme dans la gouvernance municipale.</p><p>Le dialogue a également porté sur la coopération entre les différents niveaux de gouvernement et sur les liens avec les mécanismes internationaux relatifs aux droits de l’homme.</p>`,
  },
  {
    id: "pretoria-fr",
    type: "event",
    locale: "fr",
    path: "/fr/actualites/evenements/dialogue-pauvrete-droits-homme/",
    alternatePath: "/es/actualidad/eventos/dialogo-pobreza-derechos-humanos/",
    eyebrow: "Webinaire",
    title: "Dialogue sur la pauvreté et les droits de l’homme",
    summary: "Webinaire du Centre for Human Rights de l’Université de Pretoria sur des réponses juridiques et politiques inclusives.",
    date: "2026-07-15",
    displayDate: "15 juillet 2026",
    location: "En ligne · Pretoria",
    image: "2026-07-15-dialogue-poverty-human-rights-poster",
    imageAlt: "Affiche du deuxième Dialogue sur la pauvreté et les droits de l’homme.",
    imageWidth: 1241,
    imageHeight: 1754,
    body: `
      <p class="lead">Le deuxième Dialogue sur la pauvreté et les droits de l’homme a offert un espace pour examiner les liens entre pauvreté, dignité, égalité et responsabilité.</p>
      <h2>Objectifs</h2>
      <ul><li>Analyser la pauvreté sous l’angle des droits de l’homme.</li><li>Examiner comment les inégalités et l’injustice sociale aggravent la pauvreté.</li><li>Mettre en lumière les obligations des États et partager les bonnes pratiques des États africains.</li></ul>
      <h2>Programme publié</h2>
      <p>L’invitation annonce l’événement de 14 h à 16 h SAST, tandis que le programme détaillé s’étend de 14 h 30 à 15 h 30. Cette différence reste signalée pour vérification éditoriale.</p>
      <p>Elena Carolina Díaz Galán et Mudford Zachariah Mwandenga, de la Commission africaine des droits de l’homme et des peuples, figuraient parmi les intervenants.</p>
    `,
    download: { label: "Télécharger l’invitation et le programme d’origine (PDF)", href: "/documents/2026-07-15-dialogue-poverty-human-rights.pdf" },
  },
  {
    id: "yuste-fr",
    type: "event",
    locale: "fr",
    path: "/fr/actualites/evenements/cours-ue-alc-yuste/",
    alternatePath: "/es/actualidad/eventos/curso-ue-alc-yuste/",
    eyebrow: "Cours",
    title: "UE-ALC : perspectives et défis dans un monde en mutation",
    summary: "Participation au cours organisé par la Fondation de l’Académie européenne et ibéro-américaine de Yuste.",
    date: "2026-07-08",
    displayDate: "8–10 juillet 2026",
    location: "Yuste, Espagne",
    image: "2026-07-yuste-course-01",
    imageAlt: "Elena Díaz Galán participant au cours UE-ALC à Yuste.",
    gallery: galleryFor("yuste", "fr"),
    body: `<p class="lead">L’intervention a porté sur les relations entre l’Union européenne, l’Amérique latine et les Caraïbes dans un contexte international en mutation.</p><aside class="note"><strong>Vidéo à venir.</strong> La vidéo source fournie concerne exclusivement ce cours. Elle sera publiée après le contrôle de qualité audiovisuelle et la réalisation des sous-titres et de la transcription.</aside>`,
    links: [{ label: "Page officielle du cours de la Fondation Yuste", href: "https://www.fundacionyuste.org/campusyuste2026_2/" }],
  },
  {
    id: "mpdl-fr",
    type: "event",
    locale: "fr",
    path: "/fr/actualites/evenements/defis-cooperation-paix/",
    alternatePath: "/es/actualidad/eventos/desafios-cooperacion-paz/",
    eyebrow: "Coopération et paix",
    title: "Les défis de la coopération et de la paix",
    summary: "Participation à la présentation du numéro 159 de Tiempo de Paz, consacré au présent et à l’avenir de la coopération internationale.",
    date: "2026-06-22",
    displayDate: "22 juin 2026",
    location: "Madrid",
    body: `
      <p class="lead">Elena Carolina Díaz Galán a participé à la rencontre organisée par Movimiento por la Paz à l’occasion de la présentation du numéro 159 de la revue <em>Tiempo de Paz</em>.</p>
      <p>Organisée dans les locaux du Parlement européen à Madrid, la rencontre a examiné les défis de la coopération internationale dans un contexte marqué par la multiplication des conflits, les inégalités et la crise climatique.</p>
      <p>Des représentants institutionnels et des spécialistes de la coopération internationale, de l’action humanitaire et de la consolidation de la paix ont réfléchi au rôle de la coopération dans la protection des droits et la construction de sociétés plus justes et pacifiques.</p>
      <aside class="note"><strong>Vidéo à venir.</strong> L’enregistrement fourni sera publié après le contrôle de qualité audiovisuelle et la réalisation des sous-titres et d’une transcription accessible.</aside>
    `,
    links: [
      { label: "Actualités de Movimiento por la Paz", href: "https://www.mpdl.org/noticias" },
      { label: "Numéro 159 de Tiempo de Paz", href: "https://www.fundipax.org/revista-tiempo-de-paz-159-desafios-de-la-cooperacion-y-la-paz/" },
    ],
  },
  {
    id: "death-penalty-fr",
    type: "event",
    locale: "fr",
    path: "/fr/actualites/evenements/congres-mondial-peine-mort/",
    alternatePath: "/es/actualidad/eventos/congreso-mundial-pena-muerte/",
    eyebrow: "Congrès international",
    title: "9e Congrès mondial contre la peine de mort",
    summary: "Participation au rassemblement international du mouvement abolitionniste organisé à Paris.",
    date: "2026-07-02",
    displayDate: "30 juin–2 juillet 2026",
    location: "Paris, France",
    image: "2026-07-death-penalty-congress-01",
    imageAlt: "Elena Díaz Galán au Congrès mondial contre la peine de mort.",
    gallery: galleryFor("deathPenalty", "fr"),
    body: `<p class="lead">Le congrès a réuni des institutions, la société civile, des magistrats, des journalistes et de jeunes militants autour de l’objectif de progresser vers l’abolition universelle de la peine de mort.</p><p>Au cours de la rencontre, la Rapporteuse spéciale s’est entretenue avec des représentants de la Commission africaine des droits de l’homme et des peuples.</p>`,
    links: [{ label: "Page officielle du 9e Congrès mondial", href: "https://www.ecpm.org/en/9wc/" }],
  },
  {
    id: "community-fr",
    type: "event",
    locale: "fr",
    path: "/fr/actualites/evenements/interets-communaute-internationale/",
    alternatePath: "/es/actualidad/eventos/intereses-comunidad-internacional/",
    eyebrow: "Congrès international",
    title: "Intérêts généraux de la communauté internationale",
    summary: "Participation au huitième Congrès international organisé au Colegio de España à Paris.",
    date: "2026-07-17",
    displayDate: "17–18 juillet 2026",
    location: "Paris, France",
    image: "2026-07-17-community-interests-congress-01",
    imageAlt: "Huitième Congrès international organisé au Colegio de España à Paris.",
    gallery: galleryFor("community", "fr"),
    body: `<p class="lead">La rencontre a examiné la détermination et les conséquences des intérêts généraux de la communauté internationale, en accordant une attention particulière aux contributions de l’Europe et des Amériques.</p>`,
  },
  {
    id: "minister-fr",
    type: "event",
    locale: "fr",
    path: "/fr/actualites/evenements/rencontre-ministre-droits-sociaux/",
    alternatePath: "/es/actualidad/eventos/reunion-ministro-derechos-sociales/",
    eyebrow: "Rencontre institutionnelle",
    title: "Rencontre avec le ministre espagnol des Droits sociaux",
    summary: "Rencontre avec le ministère des Droits sociaux, de la Consommation et de l’Agenda 2030.",
    date: "2026-07-21",
    displayDate: "21 juillet 2026",
    location: "Madrid",
    image: "2026-07-21-minister-meeting-01",
    imageAlt: "Publication concernant la rencontre avec le ministre espagnol des Droits sociaux.",
    gallery: galleryFor("minister", "fr"),
    body: `<p class="lead">La Rapporteuse spéciale a rencontré le ministre espagnol des Droits sociaux, de la Consommation et de l’Agenda 2030.</p><aside class="note">Les photographies institutionnelles définitives sont toujours en attente. La capture d’écran publiée sert de référence provisoire.</aside>`,
  },
  {
    id: "cadena-ser-fr",
    type: "media",
    locale: "fr",
    path: "/fr/actualites/medias/cadena-ser-oeste/",
    alternatePath: "/es/actualidad/medios/cadena-ser-oeste/",
    eyebrow: "Dans les médias",
    title: "Entretien sur Cadena SER Oeste",
    summary: "Un échange sur l’augmentation de la pauvreté et sur la priorité thématique consacrée aux villes et à la pauvreté.",
    date: "2026-07-23",
    displayDate: "23 juillet 2026",
    location: "Móstoles, Madrid",
    image: "2026-07-23-cadena-ser-01",
    imageAlt: "Elena Díaz Galán pendant l’entretien sur Cadena SER Oeste.",
    gallery: galleryFor("cadenaSer", "fr"),
    body: `<p class="lead">Elena Carolina Díaz Galán a participé à Cadena SER Oeste pour évoquer l’évolution de la pauvreté, sa dimension urbaine et la nécessité de réponses fondées sur les droits de l’homme.</p>`,
    audio: { label: "Écouter l’entretien sur Cadena SER", href: "https://cadenaser.com/audio/1784810144928/" },
  },
  {
    id: "once-meeting-fr",
    type: "event",
    locale: "fr",
    path: "/fr/actualites/evenements/rencontre-fundacion-once/",
    alternatePath: "/es/actualidad/eventos/reunion-fundacion-once/",
    eyebrow: "Rencontre institutionnelle",
    title: "Rencontre avec la Fundación ONCE sur le handicap et l’inclusion sociale",
    summary: "Une rencontre avec la direction des partenariats et des relations internationales consacrée à la coopération et à l’inclusion sociale des personnes handicapées.",
    date: "2026-07-23",
    displayDate: "23 juillet 2026",
    location: "Madrid",
    image: "2026-07-23-once-meeting-01",
    imageAlt: "Elena Díaz Galán avec des représentants de la Fundación ONCE à Madrid.",
    imageWidth: 2048,
    imageHeight: 1536,
    gallery: galleryFor("onceMeeting", "fr"),
    body: `<p class="lead">La Rapporteuse spéciale a rencontré la direction des partenariats et des relations internationales de la Fundación ONCE afin d’échanger sur la coopération et l’inclusion sociale des personnes handicapées.</p><p>La rencontre a permis de partager des priorités concernant la participation, l’égalité des chances et la protection des droits des personnes handicapées dans les politiques de lutte contre la pauvreté.</p>`,
  },
  {
    id: "la-laguna-exhibitions-fr",
    type: "visit",
    locale: "fr",
    path: "/fr/visites/expositions-democratie-generations-futures-la-laguna/",
    alternatePath: "/es/visitas/exposiciones-democracia-generaciones-futuras-la-laguna/",
    eyebrow: "Activité culturelle",
    title: "Démocratie, droits de l’homme et générations futures à La Laguna",
    summary: "Visite de deux expositions consacrées à l’héritage démocratique de Gregorio Peces-Barba et à la Déclaration de La Laguna de 1994.",
    date: "2026-07-27",
    displayDate: "27 juillet 2026",
    location: "La Laguna, Tenerife",
    image: "2026-07-27-la-laguna-exhibitions-01",
    imageAlt: "Visite de l’exposition sur la Déclaration universelle des droits de l’homme des générations futures.",
    imageWidth: 1200,
    imageHeight: 1600,
    gallery: galleryFor("laLagunaExhibitions", "fr"),
    body: `<p class="lead">Dans le cadre du cours sur la démocratie et les droits de l’homme, la Rapporteuse spéciale a visité deux expositions reliant mémoire démocratique, droits de l’homme et responsabilité intergénérationnelle.</p><h2>Héritage démocratique et droits du futur</h2><p>La première visite était consacrée au fonds d’archives Gregorio Peces-Barba, sous le titre <em>La voix de la démocratie et des droits de l’homme</em>. La seconde portait sur l’exposition relative à la <em>Déclaration universelle des droits de l’homme des générations futures</em>, adoptée à La Laguna en 1994.</p>`,
  },
  {
    id: "la-laguna-campus-fr",
    type: "event",
    locale: "fr",
    path: "/fr/actualites/evenements/cours-democratie-droits-homme-la-laguna/",
    alternatePath: "/es/actualidad/eventos/curso-democracia-derechos-humanos-la-laguna/",
    eyebrow: "Cours international",
    title: "Cours sur la démocratie et les droits de l’homme à La Laguna",
    summary: "Participation au IIe Campus international Ciudad de La Laguna avec une conférence sur l’éradication de la pauvreté dans une perspective fondée sur les droits de l’homme.",
    date: "2026-07-28",
    displayDate: "28 juillet 2026",
    location: "La Laguna, Tenerife",
    image: "2026-07-28-la-laguna-campus-01",
    imageAlt: "Elena Díaz Galán présente sa conférence sur l’éradication de la pauvreté et les droits de l’homme à La Laguna.",
    imageWidth: 1600,
    imageHeight: 1200,
    gallery: galleryFor("laLagunaCampus", "fr"),
    body: `<p class="lead">La Rapporteuse spéciale a participé au cours sur la démocratie et les droits de l’homme du IIe Campus international Ciudad de La Laguna.</p><h2>Éradiquer la pauvreté comme objectif de la communauté internationale</h2><p>Sa conférence a présenté l’éradication de la pauvreté comme un objectif essentiel devant être intégré à la protection internationale des droits de l’homme. Elle a souligné le lien entre démocratie, droits de l’homme et lutte contre la pauvreté, ainsi que la nécessité de renforcer les droits sociaux à l’alimentation, à l’eau, au logement et à un niveau de vie suffisant.</p>`,
    links: [{ label: "Lire l’article publié par Agencia EFE", href: "https://efe.com/canarias/2026-07-28/relatora-de-la-onu-defiende-incluir-la-erradicacion-de-la-pobreza-en-los-derechos-humanos/" }],
  },
  {
    id: "muna-visit-fr",
    type: "event",
    locale: "fr",
    path: "/fr/actualites/evenements/visite-musee-nature-archeologie-tenerife/",
    alternatePath: "/es/actualidad/eventos/visita-museo-naturaleza-arqueologia-tenerife/",
    eyebrow: "Visite institutionnelle",
    title: "Visite au Musée de la nature et de l’archéologie de Tenerife",
    summary: "Accueil institutionnel et visite du Musée de la nature et de l’archéologie de Santa Cruz de Tenerife.",
    date: "2026-07-29",
    displayDate: "29 juillet 2026",
    location: "Santa Cruz de Tenerife",
    image: "2026-07-29-muna-visit-01",
    imageAlt: "La Rapporteuse spéciale et l’équipe d’accueil au Musée de la nature et de l’archéologie de Santa Cruz de Tenerife.",
    imageWidth: 1600,
    imageHeight: 1200,
    gallery: galleryFor("munaVisit", "fr"),
    body: `<p class="lead">La Rapporteuse spéciale a été reçue par la direction du Musée de la nature et de l’archéologie de Santa Cruz de Tenerife.</p><p>Au cours de la visite, elle a découvert les espaces du musée et des matériaux archéologiques, accompagnée par l’équipe d’accueil.</p>`,
  },
  {
    id: "la-razon-interview-fr",
    type: "media",
    locale: "fr",
    path: "/fr/actualites/medias/entretien-la-razon-pauvrete-droits-homme/",
    alternatePath: "/es/actualidad/medios/entrevista-la-razon-pobreza-derechos-humanos/",
    eyebrow: "Entretien · La Razón",
    title: "L’extrême pauvreté est une violation directe des droits de l’homme",
    summary: "L’entretien présente les premières priorités du mandat : rendre visibles les personnes vivant dans l’extrême pauvreté et renforcer les garanties des droits économiques, sociaux et culturels.",
    date: "2026-04-13",
    displayDate: "13 avril 2026",
    body: `<p class="lead">La Razón s’entretient avec Elena Díaz Galán après sa nomination comme Rapporteuse spéciale et revient sur les principaux défis d’une pauvreté qui doit être comprise dans toutes ses dimensions.</p><p>L’entretien aborde la nécessité de mécanismes efficaces obligeant les États à respecter les droits sociaux, l’importance de la coopération avec la société civile et les conséquences que les conflits armés et les sanctions peuvent avoir sur les personnes les plus vulnérables.</p>`,
    links: [{ label: "Lire l’entretien complet dans La Razón", href: "https://www.larazon.es/internacional/elena-diaz-galan-pobreza-extrema-vulneracion-directa-derechos-humanos_2026041369dc40249e87c91dbff254c4.html" }],
  },
  {
    id: "hoy-interview-fr",
    type: "media",
    locale: "fr",
    path: "/fr/actualites/medias/entretien-hoy-nouvelles-causes-pauvrete/",
    alternatePath: "/es/actualidad/medios/entrevista-hoy-nuevas-causas-pobreza/",
    eyebrow: "Entretien · HOY",
    title: "Les causes de la pauvreté ne sont plus les mêmes qu’il y a trente ans",
    summary: "L’entretien explique le rôle indépendant de la Rapporteuse et examine de nouvelles dimensions de la pauvreté liées à l’exclusion, à l’environnement et à la numérisation.",
    date: "2026-05-10",
    displayDate: "10 mai 2026",
    body: `<p class="lead">HOY présente le mandat comme les « yeux et les oreilles » des Nations Unies pour examiner l’extrême pauvreté et les droits de l’homme, conseiller les États et informer le public.</p><p>L’entretien évoque la situation d’environ 700 millions de personnes, la pauvreté urbaine et rurale y compris en Espagne, le rôle de la société civile lors des visites officielles et l’évolution de la pauvreté face aux défis du changement climatique, de la numérisation et de l’accès effectif aux services essentiels.</p>`,
    links: [{ label: "Lire l’entretien complet dans HOY", href: "https://www.hoy.es/extremadura/causas-pobreza-treinta-anos-20260510174201-nt.html" }],
  },
  {
    id: "el-pais-interview-fr",
    type: "media",
    locale: "fr",
    path: "/fr/actualites/medias/entretien-el-pais-pauvrete-droits-homme/",
    alternatePath: "/es/actualidad/medios/entrevista-el-pais-pobreza-derechos-humanos/",
    eyebrow: "Entretien · El País",
    title: "Il est impossible de mettre fin à la pauvreté sans protéger les droits de l’homme",
    summary: "Elena Díaz Galán expose les priorités de son mandat et annonce un premier rapport thématique sur la pauvreté urbaine et la responsabilité des États.",
    date: "2026-05-29",
    displayDate: "29 mai 2026",
    body: `<p class="lead">El País interroge la Rapporteuse spéciale sur l’ampleur mondiale de la pauvreté et sur la nécessité de la considérer comme une réalité économique, sociale, environnementale et culturelle.</p><p>L’entretien présente trois priorités — rendre visible, sensibiliser et orienter — et souligne que les normes, les politiques publiques et les systèmes financiers doivent placer les personnes au centre. Il aborde également l’accès au logement, à l’éducation et à la santé, la pauvreté urbaine et les groupes particulièrement touchés.</p>`,
    links: [{ label: "Lire l’entretien complet dans El País", href: "https://elpais.com/internacional/2026-05-29/elena-diaz-galan-relatora-especial-de-la-onu-es-imposible-acabar-con-la-pobreza-sin-proteger-los-derechos-humanos.html" }],
  },
  {
    id: "efe-la-laguna-fr",
    type: "media",
    locale: "fr",
    path: "/fr/actualites/medias/efe-eradication-pauvrete-droits-homme/",
    alternatePath: "/es/actualidad/medios/efe-erradicacion-pobreza-derechos-humanos/",
    eyebrow: "Article · Agencia EFE",
    title: "L’éradication de la pauvreté doit faire partie de la protection des droits de l’homme",
    summary: "L’article présente la proposition de relier juridiquement la lutte contre la pauvreté à la protection des droits de l’homme et à la qualité de la démocratie.",
    date: "2026-07-28",
    displayDate: "28 juillet 2026",
    location: "La Laguna, Tenerife",
    body: `<p class="lead">Agencia EFE résume la conférence d’Elena Díaz Galán au IIe Campus international Ciudad de La Laguna, où elle a affirmé que l’extrême pauvreté n’est pas une question de charité, mais une urgence relevant des droits de l’homme.</p><p>L’article souligne le lien entre démocratie, protection des droits de l’homme et éradication de la pauvreté, ainsi que l’obligation des États de donner la priorité aux personnes les plus vulnérables et de renforcer les droits à l’alimentation, à l’eau, au logement et à un niveau de vie suffisant.</p>`,
    links: [{ label: "Lire l’article complet d’Agencia EFE", href: "https://efe.com/canarias/2026-07-28/relatora-de-la-onu-defiende-incluir-la-erradicacion-de-la-pobreza-en-los-derechos-humanos/" }],
  },
];

export const staticPages: StaticPage[] = [
  { id: "mandate-es", locale: "es", path: "/es/mandato/", alternatePath: "/en/mandate/", title: "Mandato sobre extrema pobreza y derechos humanos", description: "Origen, objetivos y alcance del mandato de Naciones Unidas sobre extrema pobreza y derechos humanos.", eyebrow: "El mandato", body: mandateEs },
  { id: "mandate-en", locale: "en", path: "/en/mandate/", alternatePath: "/es/mandato/", title: "Mandate on extreme poverty and human rights", description: "Origin, objectives and scope of the United Nations mandate on extreme poverty and human rights.", eyebrow: "The mandate", body: mandateEn },
  { id: "holder-es", locale: "es", path: "/es/titular-actual/", alternatePath: "/en/current-holder/", title: "Elena Carolina Díaz Galán", description: "Perfil de la actual Relatora Especial sobre la extrema pobreza y los derechos humanos.", eyebrow: "Titular actual", body: holderEs },
  { id: "holder-en", locale: "en", path: "/en/current-holder/", alternatePath: "/es/titular-actual/", title: "Elena Carolina Díaz Galán", description: "Profile of the current Special Rapporteur on extreme poverty and human rights.", eyebrow: "Current mandate holder", body: holderEn },
  { id: "reports-es", locale: "es", path: "/es/informes/", alternatePath: "/en/reports/", title: "Informes", description: "Informes presentados ante el Consejo de Derechos Humanos y la Asamblea General.", eyebrow: "Trabajo del mandato", listing: "report" },
  { id: "reports-en", locale: "en", path: "/en/reports/", alternatePath: "/es/informes/", title: "Reports", description: "Reports presented to the Human Rights Council and the General Assembly.", eyebrow: "Mandate work", listing: "report" },
  { id: "visits-es", locale: "es", path: "/es/visitas/", alternatePath: "/en/visits/", title: "Visitas y trabajo sobre el terreno", description: "Encuentros y visitas relacionados con las prioridades del mandato.", eyebrow: "Terreno", listing: "visit" },
  { id: "visits-en", locale: "en", path: "/en/visits/", alternatePath: "/es/visitas/", title: "Visits and field work", description: "Meetings and visits related to the mandate’s priorities.", eyebrow: "Field work", listing: "visit" },
  { id: "news-es", locale: "es", path: "/es/actualidad/", alternatePath: "/en/news/", title: "Actualidad", description: "Comunicados, eventos y apariciones en medios del mandato.", eyebrow: "Actividad reciente", listing: "news" },
  { id: "news-en", locale: "en", path: "/en/news/", alternatePath: "/es/actualidad/", title: "News", description: "Press releases, events and media appearances related to the mandate.", eyebrow: "Recent activity", listing: "news" },
  { id: "press-es", locale: "es", path: "/es/actualidad/comunicados/", alternatePath: "/en/news/press-releases/", title: "Comunicados de prensa", description: "Declaraciones y comunicados relacionados con el mandato.", eyebrow: "Actualidad", listing: "press_release" },
  { id: "press-en", locale: "en", path: "/en/news/press-releases/", alternatePath: "/es/actualidad/comunicados/", title: "Press releases", description: "Statements and press releases related to the mandate.", eyebrow: "News", listing: "press_release" },
  { id: "events-es", locale: "es", path: "/es/actualidad/eventos/", alternatePath: "/en/news/events/", title: "Eventos y encuentros", description: "Participación en conferencias, diálogos y reuniones institucionales.", eyebrow: "Actualidad", listing: "event" },
  { id: "events-en", locale: "en", path: "/en/news/events/", alternatePath: "/es/actualidad/eventos/", title: "Events and meetings", description: "Participation in conferences, dialogues and institutional meetings.", eyebrow: "News", listing: "event" },
  { id: "media-es", locale: "es", path: "/es/actualidad/medios/", alternatePath: "/en/news/media/", title: "En los medios", description: "Entrevistas y apariciones en medios de comunicación.", eyebrow: "Actualidad", listing: "media" },
  { id: "media-en", locale: "en", path: "/en/news/media/", alternatePath: "/es/actualidad/medios/", title: "In the media", description: "Interviews and media appearances.", eyebrow: "News", listing: "media" },
  {
    id: "initiatives-es", locale: "es", path: "/es/iniciativas/", alternatePath: "/en/initiatives/", title: "Iniciativas y colaboraciones", description: "Proyectos académicos y colaboraciones vinculados a la lucha contra la pobreza.", eyebrow: "Red de conocimiento",
    body: `
      <p class="lead">Estas iniciativas están relacionadas con el trabajo académico y de colaboración de la titular, pero no constituyen actividades oficiales del mandato.</p>
      <section id="lufepo">
        <h2>LUFEPO</h2>
        <p>Proyecto sobre lucha contra la feminización de la pobreza, desarrollado entre 2025 y 2026.</p>
        <p><a href="https://lufepo.com/">Conocer LUFEPO</a></p>
      </section>
      <section id="observatorio">
        <h2>Observatorio Internacional</h2>
        <p>El Instituto de Estudios Internacionales y Europeos «Francisco de Vitoria» de la Universidad Carlos III de Madrid creó este espacio para dar continuidad a la investigación sobre pobreza y derechos humanos, con la colaboración del CEIB de la Universidad Rey Juan Carlos.</p>
        <h3>Líneas de trabajo</h3>
        <ul>
          <li>Generar información rigurosa y actualizada sobre las causas, dimensiones y factores de la pobreza.</li>
          <li>Reunir datos que permitan analizar la pobreza a escala universal, regional y nacional.</li>
          <li>Dar visibilidad a los objetivos del mandato e impulsar políticas sociales, innovación y cooperación internacional.</li>
          <li>Crear redes entre la academia, jóvenes investigadores, instituciones públicas y tercer sector.</li>
          <li>Promover jornadas, publicaciones y congresos internacionales.</li>
        </ul>
        <p><a href="https://www.uc3m.es/ss/Satellite/INST-FranciscoVitoria/es/TextoDosColumnas/1371477256191/Observatorio_Internacional_para_la_Investigacion_de_la_Erradicacion_de_la_Pobreza_y_la_Proteccio">Consultar objetivos, actividades y equipo del Observatorio</a></p>
      </section>
      <section>
        <h2>Centro de Investigación en Estudios de Iberoamérica</h2>
        <p>Esta web se ha puesto en marcha con la colaboración del CEIB de la Universidad Rey Juan Carlos, centro dedicado a la investigación, la formación y la cooperación en el espacio iberoamericano.</p>
        <p><a href="https://www.urjc.es/ceib">Conocer el CEIB</a></p>
      </section>
    `,
  },
  {
    id: "initiatives-en", locale: "en", path: "/en/initiatives/", alternatePath: "/es/iniciativas/", title: "Initiatives and collaborations", description: "Academic projects and collaborations related to the fight against poverty.", eyebrow: "Knowledge network",
    body: `
      <p class="lead">These initiatives relate to the mandate holder’s academic and collaborative work but are not official activities of the mandate.</p>
      <section id="lufepo">
        <h2>LUFEPO</h2>
        <p>A project addressing the feminisation of poverty, running from 2025 to 2026.</p>
        <p><a href="https://lufepo.com/">Visit LUFEPO</a></p>
      </section>
      <section id="observatory">
        <h2>International Observatory</h2>
        <p>The Francisco de Vitoria Institute for International and European Studies at Universidad Carlos III de Madrid created this space to sustain research on poverty and human rights, in collaboration with CEIB at Rey Juan Carlos University.</p>
        <h3>Areas of work</h3>
        <ul>
          <li>Produce rigorous, up-to-date information on the causes, dimensions and drivers of poverty.</li>
          <li>Gather data for analysing poverty at global, regional and national levels.</li>
          <li>Raise awareness of the mandate’s objectives and promote social policy, innovation and international cooperation.</li>
          <li>Build networks across academia, early-career researchers, public institutions and civil society.</li>
          <li>Promote seminars, publications and international conferences.</li>
        </ul>
        <p><a href="https://www.uc3m.es/ss/Satellite/INST-FranciscoVitoria/es/TextoDosColumnas/1371477256191/Observatorio_Internacional_para_la_Investigacion_de_la_Erradicacion_de_la_Pobreza_y_la_Proteccio">View the Observatory’s objectives, activities and team</a></p>
      </section>
      <section>
        <h2>Centre for Research in Ibero-American Studies</h2>
        <p>This website was launched with the collaboration of CEIB at Rey Juan Carlos University, a centre devoted to research, education and cooperation across the Ibero-American space.</p>
        <p><a href="https://www.urjc.es/ceib">Visit CEIB</a></p>
      </section>
    `,
  },
  { id: "contact-es", locale: "es", path: "/es/contacto/", alternatePath: "/en/contact/", title: "Contacto", description: "Correos de contacto de Elena Carolina Díaz Galán y del mandato.", eyebrow: "Contacto", body: `<p class="lead">Para consultas relacionadas con el mandato, utilice el correo de Naciones Unidas.</p><h2>Contacto del mandato</h2><p class="contact-email"><a href="mailto:hrc-sr-extremepoverty-diazgalan@un.org">hrc-sr-extremepoverty-diazgalan@un.org</a></p><h2>Contacto académico</h2><p class="contact-email"><a href="mailto:elena.galan@urjc.es">elena.galan@urjc.es</a></p><aside class="note"><strong>Comunicaciones sobre vulneraciones.</strong> Esta web no recibe ni tramita denuncias. Utilice el <a href="https://spsubmission.ohchr.org/">mecanismo oficial de OHCHR</a>.</aside>` },
  { id: "contact-en", locale: "en", path: "/en/contact/", alternatePath: "/es/contacto/", title: "Contact", description: "Contact email addresses for Elena Carolina Díaz Galán and the mandate.", eyebrow: "Contact", body: `<p class="lead">For enquiries related to the mandate, use the United Nations email address.</p><h2>Mandate contact</h2><p class="contact-email"><a href="mailto:hrc-sr-extremepoverty-diazgalan@un.org">hrc-sr-extremepoverty-diazgalan@un.org</a></p><h2>Academic contact</h2><p class="contact-email"><a href="mailto:elena.galan@urjc.es">elena.galan@urjc.es</a></p><aside class="note"><strong>Submissions concerning violations.</strong> This website does not receive or process complaints. Use the <a href="https://spsubmission.ohchr.org/">official OHCHR mechanism</a>.</aside>` },
  { id: "legal-es", locale: "es", path: "/es/aviso-legal/", alternatePath: "/en/legal-notice/", title: "Aviso legal", description: "Información legal e independencia editorial del sitio.", body: `<p class="lead">Esta web es un espacio independiente de información sobre las actividades de la titular actual del mandato.</p><h2>Independencia</h2><p>No está gestionada por la Oficina del Alto Comisionado de las Naciones Unidas para los Derechos Humanos. Su contenido no refleja la postura oficial de la Organización de las Naciones Unidas.</p><h2>Fuentes y exactitud</h2><p>Los contenidos se basan en materiales facilitados por el equipo y fuentes institucionales enlazadas. Las fuentes oficiales prevalecen en caso de discrepancia.</p>` },
  { id: "legal-en", locale: "en", path: "/en/legal-notice/", alternatePath: "/es/aviso-legal/", title: "Legal notice", description: "Legal information and editorial independence of the website.", body: `<p class="lead">This is an independent information space covering the work of the current mandate holder.</p><h2>Independence</h2><p>It is not managed by the Office of the United Nations High Commissioner for Human Rights. Its content does not reflect the official position of the United Nations.</p><h2>Sources and accuracy</h2><p>Content is based on material supplied by the team and the institutional sources linked from each page. Official sources prevail in case of discrepancy.</p>` },
  { id: "privacy-es", locale: "es", path: "/es/privacidad/", alternatePath: "/en/privacy/", title: "Privacidad", description: "Información sobre privacidad y medición sin cookies.", body: `<p class="lead">El sitio está diseñado para funcionar sin cookies de seguimiento ni formularios de recogida de datos personales.</p><h2>Medición</h2><p>La infraestructura prevista utiliza Cloudflare Web Analytics, una medición agregada y sin cookies. Los vídeos externos no se conectan hasta que la persona decide reproducirlos.</p><h2>Correo electrónico</h2><p>Al escribir al correo oficial, el tratamiento de la comunicación se realiza fuera de este sitio.</p>` },
  { id: "privacy-en", locale: "en", path: "/en/privacy/", alternatePath: "/es/privacidad/", title: "Privacy", description: "Privacy information and cookie-free measurement.", body: `<p class="lead">The site is designed to work without tracking cookies or forms that collect personal data.</p><h2>Measurement</h2><p>The planned infrastructure uses Cloudflare Web Analytics, an aggregated and cookie-free measurement service. External videos do not connect until the visitor chooses to play them.</p><h2>Email</h2><p>When you write to the official email address, the communication is handled outside this website.</p>` },
  { id: "accessibility-es", locale: "es", path: "/es/accesibilidad/", alternatePath: "/en/accessibility/", title: "Accesibilidad", description: "Compromiso de accesibilidad WCAG 2.2 AA.", body: `<p class="lead">El objetivo es cumplir WCAG 2.2 en nivel AA y ofrecer una experiencia robusta con teclado, lector de pantalla y ampliación.</p><h2>Medidas incorporadas</h2><ul><li>Estructura semántica y jerarquía de encabezados.</li><li>Foco visible, enlace de salto y navegación por teclado.</li><li>Contraste suficiente, tipografía adaptable y movimiento reducido.</li><li>Textos alternativos, subtítulos, transcripciones y alternativas HTML para documentos.</li></ul><h2>Comunicar una barrera</h2><p>Escriba a <a href="mailto:hrc-sr-extremepoverty-diazgalan@un.org">hrc-sr-extremepoverty-diazgalan@un.org</a> indicando la página y la dificultad encontrada.</p>` },
  { id: "accessibility-en", locale: "en", path: "/en/accessibility/", alternatePath: "/es/accesibilidad/", title: "Accessibility", description: "WCAG 2.2 AA accessibility commitment.", body: `<p class="lead">The goal is to meet WCAG 2.2 Level AA and provide a robust experience with keyboard navigation, screen readers and magnification.</p><h2>Measures in place</h2><ul><li>Semantic structure and logical heading hierarchy.</li><li>Visible focus, skip link and keyboard navigation.</li><li>Sufficient contrast, adaptable type and reduced motion.</li><li>Alternative text, captions, transcripts and HTML alternatives for documents.</li></ul><h2>Report a barrier</h2><p>Email <a href="mailto:hrc-sr-extremepoverty-diazgalan@un.org">hrc-sr-extremepoverty-diazgalan@un.org</a> with the page and the difficulty you encountered.</p>` },
  { id: "mandate-fr", locale: "fr", path: "/fr/mandat/", alternatePath: "/es/mandato/", title: "Mandat sur l’extrême pauvreté et les droits de l’homme", description: "Origine, objectifs et portée du mandat des Nations Unies sur l’extrême pauvreté et les droits de l’homme.", eyebrow: "Le mandat", body: mandateFr },
  { id: "holder-fr", locale: "fr", path: "/fr/titulaire-actuelle/", alternatePath: "/es/titular-actual/", title: "Elena Carolina Díaz Galán", description: "Profil de l’actuelle Rapporteuse spéciale sur l’extrême pauvreté et les droits de l’homme.", eyebrow: "Titulaire actuelle du mandat", body: holderFr },
  { id: "reports-fr", locale: "fr", path: "/fr/rapports/", alternatePath: "/es/informes/", title: "Rapports", description: "Rapports présentés au Conseil des droits de l’homme et à l’Assemblée générale.", eyebrow: "Travaux du mandat", listing: "report" },
  { id: "visits-fr", locale: "fr", path: "/fr/visites/", alternatePath: "/es/visitas/", title: "Visites et travail de terrain", description: "Rencontres et visites liées aux priorités du mandat.", eyebrow: "Travail de terrain", listing: "visit" },
  { id: "news-fr", locale: "fr", path: "/fr/actualites/", alternatePath: "/es/actualidad/", title: "Actualités", description: "Communiqués, événements et apparitions dans les médias liés au mandat.", eyebrow: "Activité récente", listing: "news" },
  { id: "press-fr", locale: "fr", path: "/fr/actualites/communiques/", alternatePath: "/es/actualidad/comunicados/", title: "Communiqués de presse", description: "Déclarations et communiqués de presse liés au mandat.", eyebrow: "Actualités", listing: "press_release" },
  { id: "events-fr", locale: "fr", path: "/fr/actualites/evenements/", alternatePath: "/es/actualidad/eventos/", title: "Événements et rencontres", description: "Participation à des conférences, dialogues et rencontres institutionnelles.", eyebrow: "Actualités", listing: "event" },
  { id: "media-fr", locale: "fr", path: "/fr/actualites/medias/", alternatePath: "/es/actualidad/medios/", title: "Dans les médias", description: "Entretiens et apparitions dans les médias.", eyebrow: "Actualités", listing: "media" },
  {
    id: "initiatives-fr", locale: "fr", path: "/fr/initiatives/", alternatePath: "/es/iniciativas/", title: "Initiatives et collaborations", description: "Projets universitaires et collaborations liés à la lutte contre la pauvreté.", eyebrow: "Réseau de connaissances",
    body: `
      <p class="lead">Ces initiatives relèvent des travaux universitaires et des collaborations de la titulaire du mandat, mais ne constituent pas des activités officielles du mandat.</p>
      <section id="lufepo">
        <h2>LUFEPO</h2>
        <p>Projet consacré à la lutte contre la féminisation de la pauvreté, mené de 2025 à 2026.</p>
        <p><a href="https://lufepo.com/">Découvrir LUFEPO</a></p>
      </section>
      <section id="observatoire">
        <h2>Observatoire international</h2>
        <p>L’Institut d’études internationales et européennes « Francisco de Vitoria » de l’Université Carlos III de Madrid a créé cet espace afin de pérenniser la recherche sur la pauvreté et les droits de l’homme, avec la collaboration du CEIB de l’Université Rey Juan Carlos.</p>
        <h3>Axes de travail</h3>
        <ul>
          <li>Produire des informations rigoureuses et actualisées sur les causes, les dimensions et les facteurs de la pauvreté.</li>
          <li>Rassembler des données permettant d’analyser la pauvreté aux niveaux mondial, régional et national.</li>
          <li>Faire connaître les objectifs du mandat et promouvoir les politiques sociales, l’innovation et la coopération internationale.</li>
          <li>Créer des réseaux entre le monde universitaire, les jeunes chercheurs, les institutions publiques et la société civile.</li>
          <li>Promouvoir des rencontres, des publications et des congrès internationaux.</li>
        </ul>
        <p><a href="https://www.uc3m.es/ss/Satellite/INST-FranciscoVitoria/es/TextoDosColumnas/1371477256191/Observatorio_Internacional_para_la_Investigacion_de_la_Erradicacion_de_la_Pobreza_y_la_Proteccio">Consulter les objectifs, les activités et l’équipe de l’Observatoire</a></p>
      </section>
      <section>
        <h2>Centre de recherche en études ibéro-américaines</h2>
        <p>Ce site a été lancé avec la collaboration du CEIB de l’Université Rey Juan Carlos, un centre consacré à la recherche, à la formation et à la coopération dans l’espace ibéro-américain.</p>
        <p><a href="https://www.urjc.es/ceib">Découvrir le CEIB</a></p>
      </section>
    `,
  },
  { id: "contact-fr", locale: "fr", path: "/fr/contact/", alternatePath: "/es/contacto/", title: "Contact", description: "Adresses électroniques d’Elena Carolina Díaz Galán et du mandat.", eyebrow: "Contact", body: `<p class="lead">Pour toute demande concernant le mandat, utilisez l’adresse électronique des Nations Unies.</p><h2>Contact du mandat</h2><p class="contact-email"><a href="mailto:hrc-sr-extremepoverty-diazgalan@un.org">hrc-sr-extremepoverty-diazgalan@un.org</a></p><h2>Contact universitaire</h2><p class="contact-email"><a href="mailto:elena.galan@urjc.es">elena.galan@urjc.es</a></p><aside class="note"><strong>Communications concernant des violations.</strong> Ce site ne reçoit ni ne traite les plaintes. Utilisez le <a href="https://spsubmission.ohchr.org/">mécanisme officiel du HCDH</a>.</aside>` },
  { id: "legal-fr", locale: "fr", path: "/fr/mentions-legales/", alternatePath: "/es/aviso-legal/", title: "Mentions légales", description: "Informations juridiques et indépendance éditoriale du site.", body: `<p class="lead">Ce site est un espace d’information indépendant consacré aux activités de l’actuelle titulaire du mandat.</p><h2>Indépendance</h2><p>Il n’est pas géré par le Haut-Commissariat des Nations Unies aux droits de l’homme. Son contenu ne reflète pas la position officielle des Nations Unies.</p><h2>Sources et exactitude</h2><p>Les contenus reposent sur les documents fournis par l’équipe et sur les sources institutionnelles indiquées. En cas de divergence, les sources officielles prévalent.</p>` },
  { id: "privacy-fr", locale: "fr", path: "/fr/confidentialite/", alternatePath: "/es/privacidad/", title: "Confidentialité", description: "Informations sur la confidentialité et la mesure d’audience sans cookies.", body: `<p class="lead">Le site est conçu pour fonctionner sans cookies de suivi ni formulaires recueillant des données à caractère personnel.</p><h2>Mesure d’audience</h2><p>L’infrastructure prévue utilise Cloudflare Web Analytics, un service de mesure agrégée sans cookies. Aucun contenu vidéo externe n’est chargé avant que la personne choisisse de le lire.</p><h2>Courrier électronique</h2><p>Lorsque vous écrivez à l’adresse officielle, la communication est traitée en dehors de ce site.</p>` },
  { id: "accessibility-fr", locale: "fr", path: "/fr/accessibilite/", alternatePath: "/es/accesibilidad/", title: "Accessibilité", description: "Engagement en faveur de l’accessibilité WCAG 2.2 niveau AA.", body: `<p class="lead">L’objectif est de respecter les WCAG 2.2 au niveau AA et d’offrir une expérience robuste avec la navigation au clavier, les lecteurs d’écran et l’agrandissement.</p><h2>Mesures mises en œuvre</h2><ul><li>Structure sémantique et hiérarchie logique des titres.</li><li>Indicateur de focus visible, lien d’évitement et navigation au clavier.</li><li>Contraste suffisant, typographie adaptable et réduction des animations.</li><li>Textes de remplacement, sous-titres, transcriptions et alternatives HTML aux documents.</li></ul><h2>Signaler un obstacle</h2><p>Écrivez à <a href="mailto:hrc-sr-extremepoverty-diazgalan@un.org">hrc-sr-extremepoverty-diazgalan@un.org</a> en indiquant la page concernée et la difficulté rencontrée.</p>` },
];

export function itemsFor(locale: Locale, type?: ContentType | "news"): EditorialItem[] {
  return editorialItems
    .filter((item) => item.locale === locale && (!type || type === "news" || item.type === type))
    .sort((a, b) => b.date.localeCompare(a.date));
}

type TranslatedEntry = Pick<EditorialItem | StaticPage, "id" | "locale" | "path">;

export function localizedPathsFor<T extends TranslatedEntry>(entry: T, collection: T[]): LocalizedPaths {
  const editorialEntry = entry as T & Pick<EditorialItem, "translation_group" | "translations">;
  const translationKey = editorialEntry.translation_group
    || String(entry.id).replace(/-(es|en|fr)$/, "");
  return Object.fromEntries(
    locales.map((locale) => {
      const translated = collection.find(
        (candidate) => {
          const candidateEditorial = candidate as T & Pick<EditorialItem, "translation_group">;
          const candidateKey = candidateEditorial.translation_group
            || String(candidate.id).replace(/-(es|en|fr)$/, "");
          return candidate.locale === locale && candidateKey === translationKey;
        },
      );
      const translatedPath = editorialEntry.translations?.[locale]?.path;
      return [locale, entry.locale === locale ? entry.path : translatedPath || translated?.path || `/${locale}/`];
    }),
  ) as LocalizedPaths;
}
