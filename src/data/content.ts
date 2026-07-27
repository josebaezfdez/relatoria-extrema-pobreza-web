import type { Locale } from "./site";

export type ContentType = "report" | "visit" | "event" | "media" | "press_release";

export interface EditorialItem {
  id: string;
  type: ContentType;
  locale: Locale;
  path: string;
  alternatePath: string;
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
  body: string;
  links?: { label: string; href: string }[];
  download?: { label: string; href: string };
  video?: { id: string; title: string };
  audio?: { label: string; href: string };
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

const holderEs = `
  <p class="lead">Elena Carolina Díaz Galán fue nombrada Relatora Especial de las Naciones Unidas sobre la extrema pobreza y los derechos humanos por el Consejo de Derechos Humanos en su 61.ª sesión, celebrada en marzo de 2026.</p>
  <h2>Trayectoria</h2>
  <p>Es profesora titular de Derecho Internacional Público y Relaciones Internacionales de la Universidad Rey Juan Carlos de Madrid. Su trabajo académico se centra en la erradicación de la pobreza, los derechos humanos y el desarrollo sostenible.</p>
  <p>Ha liderado proyectos sobre la feminización de la pobreza, los grupos en situación de vulnerabilidad y las relaciones entre la Unión Europea, América Latina y el Caribe. Ha formado parte de cátedras dedicadas al desarrollo sostenible, la inclusión social, la diversidad y los derechos humanos.</p>
  <p>Ha impartido conferencias en universidades de América, Asia, Europa y África y ha realizado estancias de investigación en universidades extranjeras.</p>
  <p><a class="text-link" href="https://www.ohchr.org/es/special-procedures/sr-poverty/ms-elena-carolina-diaz-galan">Consultar el perfil oficial en OHCHR</a></p>
`;

const holderEn = `
  <p class="lead">Elena Carolina Díaz Galán was appointed United Nations Special Rapporteur on extreme poverty and human rights by the Human Rights Council at its sixty-first session in March 2026.</p>
  <h2>Background</h2>
  <p>She is Associate Professor of Public International Law and International Relations at Rey Juan Carlos University in Madrid. Her academic work focuses on poverty eradication, human rights and sustainable development.</p>
  <p>She has led projects on the feminisation of poverty, groups in situations of vulnerability, and relations between the European Union, Latin America and the Caribbean. She has been a member of academic chairs on sustainable development, social inclusion, diversity and human rights.</p>
  <p>She has lectured at universities in the Americas, Asia, Europe and Africa and has undertaken research stays at universities abroad.</p>
  <p><a class="text-link" href="https://www.ohchr.org/en/special-procedures/sr-poverty/ms-elena-carolina-diaz-galan">View the official OHCHR profile</a></p>
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
    imageWidth: 2000,
    imageHeight: 1333,
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
    imageWidth: 2000,
    imageHeight: 1333,
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
    image: "elena-diaz-galan-portrait",
    imageAlt: "Retrato de Elena Carolina Díaz Galán.",
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
    image: "elena-diaz-galan-portrait",
    imageAlt: "Portrait of Elena Carolina Díaz Galán.",
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
    displayDate: "Julio de 2026",
    location: "Yuste, España",
    image: "2026-07-yuste-course-01",
    imageAlt: "Participación de Elena Díaz Galán en el curso UE-ALC de Yuste.",
    body: `<p class="lead">La intervención abordó las relaciones entre la Unión Europea, América Latina y el Caribe en un contexto de transformación internacional.</p><aside class="note"><strong>Vídeo pendiente.</strong> El vídeo maestro entregado corresponde exclusivamente a este curso. Se publicará tras completar control audiovisual, subtítulos y transcripción.</aside>`,
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
    displayDate: "July 2026",
    location: "Yuste, Spain",
    image: "2026-07-yuste-course-01",
    imageAlt: "Elena Díaz Galán taking part in the EU-LAC course in Yuste.",
    body: `<p class="lead">The intervention addressed relations between the European Union, Latin America and the Caribbean in a changing international context.</p><aside class="note"><strong>Video pending.</strong> The supplied master video belongs exclusively to this course. It will be published after audiovisual quality control, captions and a transcript are complete.</aside>`,
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
    body: `<p class="lead">El congreso reunió a instituciones, sociedad civil, judicatura, periodismo y activismo joven en torno al objetivo de avanzar hacia la abolición universal de la pena de muerte.</p><p>Durante el encuentro, la Relatora mantuvo contactos con representantes de la Comisión Africana de Derechos Humanos y de los Pueblos.</p>`,
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
    body: `<p class="lead">The congress brought together institutions, civil society, judges, journalists and young activists around the goal of moving towards universal abolition of the death penalty.</p><p>During the meeting, the Special Rapporteur met representatives of the African Commission on Human and Peoples’ Rights.</p>`,
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
    body: `<p class="lead">Elena Carolina Díaz Galán joined Cadena SER Oeste to discuss trends in poverty, its urban dimension and the need for human rights-based responses.</p>`,
    audio: { label: "Listen to the interview on Cadena SER", href: "https://cadenaser.com/audio/1784810144928/" },
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
    body: `<p class="lead">Estas iniciativas están relacionadas con el trabajo académico y de colaboración de la titular, pero no constituyen actividades oficiales del mandato.</p><section id="lufepo"><h2>LUFEPO</h2><p>Proyecto sobre lucha contra la feminización de la pobreza, desarrollado entre 2025 y 2026.</p><p><a href="https://lufepo.com/">Conocer LUFEPO</a></p></section><section id="observatorio"><h2>Observatorio Internacional</h2><p>Espacio de investigación para la erradicación de la pobreza y la protección de los derechos humanos impulsado en la Universidad Carlos III de Madrid.</p><p><a href="https://www.uc3m.es/ss/Satellite/INST-FranciscoVitoria/es/TextoDosColumnas/1371477256191/Observatorio_Internacional_para_la_Investigacion_de_la_Erradicacion_de_la_Pobreza_y_la_Proteccio">Visitar el Observatorio</a></p></section><section><h2>Centro de Investigación en Estudios de Iberoamérica</h2><p>Esta web se ha puesto en marcha con la colaboración del CEIB de la Universidad Rey Juan Carlos.</p><p><a href="https://www.urjc.es/ceib">Conocer el CEIB</a></p></section>`,
  },
  {
    id: "initiatives-en", locale: "en", path: "/en/initiatives/", alternatePath: "/es/iniciativas/", title: "Initiatives and collaborations", description: "Academic projects and collaborations related to the fight against poverty.", eyebrow: "Knowledge network",
    body: `<p class="lead">These initiatives relate to the mandate holder’s academic and collaborative work but are not official activities of the mandate.</p><section id="lufepo"><h2>LUFEPO</h2><p>A project addressing the feminisation of poverty, running from 2025 to 2026.</p><p><a href="https://lufepo.com/">Visit LUFEPO</a></p></section><section id="observatory"><h2>International Observatory</h2><p>A research space for poverty eradication and human rights protection established at Universidad Carlos III de Madrid.</p><p><a href="https://www.uc3m.es/ss/Satellite/INST-FranciscoVitoria/es/TextoDosColumnas/1371477256191/Observatorio_Internacional_para_la_Investigacion_de_la_Erradicacion_de_la_Pobreza_y_la_Proteccio">Visit the Observatory</a></p></section><section><h2>Centre for Research in Ibero-American Studies</h2><p>This website was launched with the collaboration of CEIB at Rey Juan Carlos University.</p><p><a href="https://www.urjc.es/ceib">Visit CEIB</a></p></section>`,
  },
  { id: "contact-es", locale: "es", path: "/es/contacto/", alternatePath: "/en/contact/", title: "Contacto", description: "Correo oficial de contacto de la Relatora Especial.", eyebrow: "Contacto", body: `<p class="lead">Para consultas relacionadas con el mandato, utilice el correo oficial.</p><p class="contact-email"><a href="mailto:hrc-sr-extremepoverty-diazgalan@un.org">hrc-sr-extremepoverty-diazgalan@un.org</a></p><aside class="note"><strong>Comunicaciones sobre vulneraciones.</strong> Esta web no recibe ni tramita denuncias. Utilice el <a href="https://spsubmission.ohchr.org/">mecanismo oficial de OHCHR</a>.</aside>` },
  { id: "contact-en", locale: "en", path: "/en/contact/", alternatePath: "/es/contacto/", title: "Contact", description: "Official contact email for the Special Rapporteur.", eyebrow: "Contact", body: `<p class="lead">For enquiries related to the mandate, use the official email address.</p><p class="contact-email"><a href="mailto:hrc-sr-extremepoverty-diazgalan@un.org">hrc-sr-extremepoverty-diazgalan@un.org</a></p><aside class="note"><strong>Submissions concerning violations.</strong> This website does not receive or process complaints. Use the <a href="https://spsubmission.ohchr.org/">official OHCHR mechanism</a>.</aside>` },
  { id: "legal-es", locale: "es", path: "/es/aviso-legal/", alternatePath: "/en/legal-notice/", title: "Aviso legal", description: "Información legal e independencia editorial del sitio.", body: `<p class="lead">Esta web es un espacio independiente de información sobre las actividades de la titular actual del mandato.</p><h2>Independencia</h2><p>No está gestionada por la Oficina del Alto Comisionado de las Naciones Unidas para los Derechos Humanos. Su contenido no refleja la postura oficial de la Organización de las Naciones Unidas.</p><h2>Fuentes y exactitud</h2><p>Los contenidos se basan en materiales facilitados por el equipo y fuentes institucionales enlazadas. Las fuentes oficiales prevalecen en caso de discrepancia.</p>` },
  { id: "legal-en", locale: "en", path: "/en/legal-notice/", alternatePath: "/es/aviso-legal/", title: "Legal notice", description: "Legal information and editorial independence of the website.", body: `<p class="lead">This is an independent information space covering the work of the current mandate holder.</p><h2>Independence</h2><p>It is not managed by the Office of the United Nations High Commissioner for Human Rights. Its content does not reflect the official position of the United Nations.</p><h2>Sources and accuracy</h2><p>Content is based on material supplied by the team and the institutional sources linked from each page. Official sources prevail in case of discrepancy.</p>` },
  { id: "privacy-es", locale: "es", path: "/es/privacidad/", alternatePath: "/en/privacy/", title: "Privacidad", description: "Información sobre privacidad y medición sin cookies.", body: `<p class="lead">El sitio está diseñado para funcionar sin cookies de seguimiento ni formularios de recogida de datos personales.</p><h2>Medición</h2><p>La infraestructura prevista utiliza Cloudflare Web Analytics, una medición agregada y sin cookies. Los vídeos externos no se conectan hasta que la persona decide reproducirlos.</p><h2>Correo electrónico</h2><p>Al escribir al correo oficial, el tratamiento de la comunicación se realiza fuera de este sitio.</p>` },
  { id: "privacy-en", locale: "en", path: "/en/privacy/", alternatePath: "/es/privacidad/", title: "Privacy", description: "Privacy information and cookie-free measurement.", body: `<p class="lead">The site is designed to work without tracking cookies or forms that collect personal data.</p><h2>Measurement</h2><p>The planned infrastructure uses Cloudflare Web Analytics, an aggregated and cookie-free measurement service. External videos do not connect until the visitor chooses to play them.</p><h2>Email</h2><p>When you write to the official email address, the communication is handled outside this website.</p>` },
  { id: "accessibility-es", locale: "es", path: "/es/accesibilidad/", alternatePath: "/en/accessibility/", title: "Accesibilidad", description: "Compromiso de accesibilidad WCAG 2.2 AA.", body: `<p class="lead">El objetivo es cumplir WCAG 2.2 en nivel AA y ofrecer una experiencia robusta con teclado, lector de pantalla y ampliación.</p><h2>Medidas incorporadas</h2><ul><li>Estructura semántica y jerarquía de encabezados.</li><li>Foco visible, enlace de salto y navegación por teclado.</li><li>Contraste suficiente, tipografía adaptable y movimiento reducido.</li><li>Textos alternativos, subtítulos, transcripciones y alternativas HTML para documentos.</li></ul><h2>Comunicar una barrera</h2><p>Escriba a <a href="mailto:hrc-sr-extremepoverty-diazgalan@un.org">hrc-sr-extremepoverty-diazgalan@un.org</a> indicando la página y la dificultad encontrada.</p>` },
  { id: "accessibility-en", locale: "en", path: "/en/accessibility/", alternatePath: "/es/accesibilidad/", title: "Accessibility", description: "WCAG 2.2 AA accessibility commitment.", body: `<p class="lead">The goal is to meet WCAG 2.2 Level AA and provide a robust experience with keyboard navigation, screen readers and magnification.</p><h2>Measures in place</h2><ul><li>Semantic structure and logical heading hierarchy.</li><li>Visible focus, skip link and keyboard navigation.</li><li>Sufficient contrast, adaptable type and reduced motion.</li><li>Alternative text, captions, transcripts and HTML alternatives for documents.</li></ul><h2>Report a barrier</h2><p>Email <a href="mailto:hrc-sr-extremepoverty-diazgalan@un.org">hrc-sr-extremepoverty-diazgalan@un.org</a> with the page and the difficulty you encountered.</p>` },
];

export function itemsFor(locale: Locale, type?: ContentType | "news"): EditorialItem[] {
  return editorialItems
    .filter((item) => item.locale === locale && (!type || type === "news" || item.type === type))
    .sort((a, b) => b.date.localeCompare(a.date));
}
