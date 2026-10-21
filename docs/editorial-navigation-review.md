# Revisión de navegación interior — 21 de octubre de 2026

**Estado: implementación validada localmente y autorizada para commit y push a GitHub el 21 de octubre de 2026.** Publicación mediante la rama existente `agent/completa-contenido-web` y su despliegue conectado en Cloudflare. El menú principal y las URLs existentes se conservan. Hostinger queda fuera de esta actuación.

## Organización

Las páginas principales siguen siendo Mandato, Titular, Informes, Visitas, Actualidad e Iniciativas. El catálogo común separa categoría editorial (qué es), temas (de qué trata) y formatos (qué recursos contiene). No utiliza detección automática por palabras ni atribuye actividades a proyectos por afinidad temática.

| Categoría | Piezas por idioma |
| --- | ---: |
| Reuniones y encuentros | 21 |
| Jornadas y actividad académica | 17 |
| Actividades culturales | 2 |
| Entrevistas y prensa | 6 |
| Informes | 2 |
| Comunicados | 1 |
| Recursos y divulgación | 1 |
| **Total** | **50** |

El catálogo de siete temas comprende Ciudades y vivienda, Infancia y pobreza, Igualdad y no discriminación, Protección social, Participación, Cooperación y desarrollo y Día de la lucha contra la pobreza. Las asignaciones son explícitas y compartidas por ES/EN/FR. Un contenido puede no tener un tema de este catálogo cuando el texto no lo acredita.

La matriz completa de las **50 piezas y sus 150 URLs** está en [editorial-classification.csv](editorial-classification.csv). Incluye tipo anterior y actual, categoría, temas, formatos, resumen utilizado como referencia y estado de revisión temática.

### Cambios de clasificación

- París pasa a Reuniones y encuentros; las exposiciones de La Laguna y el museo de Tenerife pasan a Actividades culturales. Su tipo técnico cambia de `visit` a `event` en los tres idiomas, conservando URLs y textos.
- La página Visitas se reserva a visitas del mandato confirmadas. No presenta las tres piezas anteriores como misiones oficiales.
- El vídeo del 17 de octubre mantiene su URL histórica y su tipo técnico `media`, pero su categoría editorial es Recursos y divulgación. Se muestra en Actualidad y en el apartado temático; el archivo En los medios contiene las seis apariciones en prensa.
- Los informes conservan órgano o signatura como información documental. Los formatos proceden de enlaces o campos de recursos existentes, incluida la grabación oficial enlazada de UN Web TV.

### Pendientes temáticos documentados

Las reuniones con Jean-Benoît Dujol, el ministro de Derechos Sociales de España y los responsables de Exteriores y Economía de Omán mantienen categoría y acceso público, pero no reciben una etiqueta sobre protección social u otra política concreta por el solo cargo de sus participantes. Para esas cuatro piezas se registra `pending-source-detail`. No bloquean esta entrega ni se ocultan del archivo.

## Presentación

- Actualidad: cabecera compacta, acceso directo al archivo, dos destacados con imagen, filtros de categoría y tema, resultados anunciados y paginación de 12 piezas.
- Destacados: componente común para el 17 de octubre y Ciudades y pobreza; el primero se reutiliza en portada. Se elimina el enlace aislado dentro de `.prose`.
- Tarjetas: categoría enlazable, fecha, título y resumen conservados; rótulo documental en prensa e informes; distintivos de formato y etiquetas como enlaces independientes. No hay enlaces anidados. Las tarjetas sin fotografía no utilizan imágenes ficticias.
- Fichas: migas de navegación, categoría y temas enlazables y hasta tres contenidos relacionados por temas, del mismo idioma y sin duplicar la pieza original.
- Informes: encabezado específico y documentos sin recortar; las colecciones de hasta tres piezas no muestran filtros ni paginación innecesarios. En otras colecciones con una sola categoría se muestra únicamente el filtro temático.
- Mandato y Titular: las secciones existentes reciben anclas estables; el índice se muestra a partir de tres apartados. Los textos actuales tienen dos y un apartado respectivamente, por lo que no se añade un índice redundante. Iniciativas conserva sus tres proyectos y su distinción respecto a la actividad oficial del mandato.

## Comportamiento y compatibilidad

Los parámetros `category`, `topic` y `page` conservan la selección en la URL. Atrás/Adelante y la recarga recuperan los resultados. El cambio de categoría o tema vuelve a la primera página; valores desconocidos no rompen el archivo. Se muestran resultados vacíos y un restablecimiento explícito.

Sin JavaScript se ve el archivo completo de 50 piezas por idioma y permanecen los enlaces a las páginas existentes. No se necesita un servicio de búsqueda ni nuevas dependencias.

La misma clasificación se aplica a la colección resuelta por `getEditorialItems`, tanto local como de WordPress. Los metadatos desconocidos de futuras piezas del CMS no se inventan y los identificadores de categoría o tema ajenos al catálogo no provocan errores de renderizado. No se activa ni se migra WordPress.

## Verificación local

- Pruebas unitarias: clasificación de las 150 versiones, distribución acordada, correspondencia entre idiomas, archivos, formatos, relacionados y estado de los filtros.
- Astro check y build estático de 197 páginas.
- Comparación con la copia anterior: títulos, cuerpos, resúmenes, fechas y precisión, traducciones, fotografías, galerías, vídeos, audio y descargas conservados. Solo se reclasifican los tres grupos de visitas indicados.
- Validación de las 192 rutas editoriales y estáticas existentes, recursos locales, enlaces y fragmentos, canonicals, `hreflang` y RSS.
- Chrome a 1440 y 390 px en ES/EN/FR: filtros combinados, enlace compartido, historial, recarga, paginación, resultado vacío, limpiar, teclado, foco y ausencia de desbordamientos. Verificación adicional de los archivos, las páginas principales, fichas y las tres versiones sin JavaScript.

Evidencias y capturas: `artifacts/navigation-2026/`. Vista local: <http://127.0.0.1:4322/es/actualidad/> mientras esté activo el servidor de revisión. Para desarrollo habitual puede utilizarse `npm run dev`.
