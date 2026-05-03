import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './strings';

export function getLocaleFromId(id: string): Locale {
  return id.startsWith('es/') ? 'es' : 'en';
}

export function getSlugFromId(id: string): string {
  return id.replace(/^(en|es)\//, '');
}

export async function getPostsForLocale(locale: Locale) {
  const all = await getCollection('writing', ({ data }) => !data.draft);
  return all
    .filter((p) => getLocaleFromId(p.id) === locale)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function findTranslation(
  post: CollectionEntry<'writing'>,
  targetLocale: Locale,
): Promise<CollectionEntry<'writing'> | null> {
  if (!post.data.translationKey) return null;
  const all = await getCollection('writing', ({ data }) => !data.draft);
  return (
    all.find(
      (p) =>
        getLocaleFromId(p.id) === targetLocale &&
        p.data.translationKey === post.data.translationKey,
    ) ?? null
  );
}

export function altLocaleHomeUrl(currentLocale: Locale): string {
  return currentLocale === 'en' ? '/es/' : '/';
}
