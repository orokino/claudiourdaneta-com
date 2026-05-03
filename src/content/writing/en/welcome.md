---
title: "Template post — delete or replace this"
date: 2026-05-01
description: "Reference post showing the markdown features available in writing entries."
draft: false
translationKey: welcome
---

This is a template post. Delete it or replace its contents once you write your first real piece.

## How to write a new post

Add a markdown file to `src/content/writing/en/` (or `src/content/writing/es/` for Spanish) — for example `clinical-ai-radiology-notes.md`. The file's name (minus the `.md`) becomes its URL slug, so this post lives at `/writing/welcome/`.

Frontmatter fields:

- `title` — required
- `date` — required, used for sorting and the displayed date
- `description` — optional, shows in the `<meta name="description">` tag
- `draft` — optional, set to `true` to keep a post out of the build
- `translationKey` — optional, links posts across languages so the switcher swaps to the matching translation

## Markdown features

You can use **bold**, *italic*, `inline code`, and [links](https://example.com). Lists, blockquotes, headings, and code fences all render with the site's typography.

```js
const post = await getCollection('writing');
```

> Pull-quotes render with a left rule and the muted text color.

That's it. Push to `master` and the new post deploys automatically.
