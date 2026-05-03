---
title: "Publicación de plantilla — borra o reemplaza"
date: 2026-05-01
description: "Publicación de referencia que muestra las funciones de markdown disponibles."
draft: false
translationKey: welcome
---

Esta es una publicación de plantilla. Bórrala o reemplaza su contenido cuando escribas tu primera publicación real.

## Cómo escribir una nueva publicación

Añade un archivo markdown en `src/content/writing/es/` — por ejemplo `notas-radiologia-ia-clinica.md`. El nombre del archivo (sin la extensión `.md`) se convierte en el slug de la URL, así que esta publicación vive en `/es/writing/bienvenido/`.

Campos del frontmatter:

- `title` — obligatorio
- `date` — obligatorio, se usa para ordenar y mostrar la fecha
- `description` — opcional, aparece en la metaetiqueta `<meta name="description">`
- `draft` — opcional, ponlo a `true` para excluir la publicación del build
- `translationKey` — opcional, empareja publicaciones entre idiomas para que el conmutador salte a la traducción correspondiente

## Funciones de markdown

Puedes usar **negrita**, *cursiva*, `código en línea` y [enlaces](https://example.com). Listas, citas, encabezados y bloques de código se renderizan con la tipografía del sitio.

```js
const post = await getCollection('writing');
```

> Las citas se renderizan con una línea a la izquierda y color de texto atenuado.

Eso es todo. Haz `push` a `master` y la nueva publicación se despliega automáticamente.
