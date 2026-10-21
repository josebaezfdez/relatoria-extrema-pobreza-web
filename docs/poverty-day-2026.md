# Día de la lucha contra la pobreza

Apartado permanente ES/EN/FR con un primer vídeo para la conmemoración del 17 de octubre de 2026. La fecha de grabación no está confirmada. Los textos de presentación se basan en la información facilitada para esta publicación.

## Páginas

| Idioma | Apartado | Ficha del vídeo |
| --- | --- | --- |
| ES | `/es/actualidad/dia-lucha-contra-pobreza/` | `/es/actualidad/medios/video-dia-lucha-contra-pobreza-2026/` |
| EN | `/en/news/day-against-poverty/` | `/en/news/media/day-against-poverty-video-2026/` |
| FR | `/fr/actualites/journee-lutte-contre-pauvrete/` | `/fr/actualites/medias/video-journee-lutte-contre-pauvrete-2026/` |

El apartado tiene acceso desde Actualidad y un bloque de portada después de Actividad reciente. No añade elementos al menú principal.

## Vídeo y conservación

- Original: 545.909.381 bytes, HEVC 4K; SHA-256 `25350d017a6929c58a97588157f3d31ecd4204a174efd2cf7c83e58810e8519c`.
- Copia archivada fuera del repositorio web: `00_sources/deliveries/2026-10-21-poverty-day/día de la lucha contra la pobreza.mp4`.
- Versión web: 55.682.225 bytes, reducción del 89,8 %, H.264 High, 1920 × 1080, 30 fps, yuv420p BT.709 y AAC estéreo a 96 kbps.
- Duración: 216,40 s de vídeo; el contenedor de salida informa 216,41 s por el empaquetado AAC. Se conserva el contenido completo.
- SHA-256 MP4: `613da9e3c8ffe3602f78bed9928c5a623b3aabdc27f96e239889a3d596023117`.
- R2 existente: `relatoria-media/videos/day-against-poverty-2026-10-17-613da9e3c8ff.mp4`.
- `video/mp4`, caché `public,max-age=31536000,immutable` y `moov` anterior a `mdat` para arranque rápido.
- El MP4 público y el maestro quedan fuera de Git. Git conserva la portada, sus derivados y el manifiesto `src/data/poverty-day-2026-media.json`.
- Se mantienen el audio original y los subtítulos ingleses integrados. Las pistas accesibles y la transcripción siguen en revisión; no se han creado traducciones del audio ni subtítulos nuevos.

## Incorporar futuras actividades

Añadir las versiones ES/EN/FR como fichas editoriales normales, conservando su tipo (`event`, `media`, etc.), con `topics: ["day-against-poverty"]`. El apartado selecciona por idioma y etiqueta y ordena por fecha descendente.

`StaticPage.topic` selecciona la colección y `featuredItemId` identifica la ficha destacada de cada idioma. El destacado muestra su vídeo y un enlace a su ficha; se excluye del listado inferior. Si el destacado no existe, los contenidos asociados siguen apareciendo en el listado. `itemsForPage` utiliza la misma colección editorial que genera las rutas, compatible con el camino CMS existente.

## Verificación y publicación

- `npm test`: 20 tests, incluidos asociación temática, destacado, traducciones, futuras actividades, separación de idiomas y ausencia de duplicados.
- `NODE_ENV=production npm run build`: 197 páginas; Astro check sin errores, advertencias ni hints.
- R2: HEAD y tres GET Range de 65.536 bytes, al inicio, mitad y final, con respuesta 206 y bytes idénticos al archivo optimizado.
- Audio: correlación de muestras entre original y versión optimizada de 0,9985; duración y alineación conservadas.
- Chrome: página temática y ficha ES/EN/FR a 1440 y 390 px; reproducción, saltos a 105 y 210 s, pausa, teclado, cambio de idioma y ausencia de desbordamientos. También acceso desde portada, Actualidad y medios.

Evidencias locales en `artifacts/poverty-day-2026/`: manifiesto y comando de codificación, validación multimedia, verificación HTTP Range, comprobaciones de navegador y capturas. Los resultados públicos posteriores al despliegue se guardan por separado con prefijo `public`.

Publicación mediante push selectivo a `agent/completa-contenido-web` y Workers Builds del Worker existente `relatoria-extrema-pobreza-web`. Verificar el Worker y las URLs reales después del build remoto; los checks de Pages corresponden a previews. El dominio alojado en Hostinger queda fuera de esta actuación.
