import { sanityFetch } from "../lib/fetch";
import type { JournalDocument } from "@/types/sanity";

const JOURNAL_QUERY = `
  *[_type == "journal"] | order(publishedAt desc) {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    slug,
    excerpt,
    content,
    image,
    publishedAt,
    author->,
    seo,
  }
`;

const JOURNAL_BY_SLUG_QUERY = `
  *[_type == "journal" && slug.current == $slug][0] {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    slug,
    excerpt,
    content,
    image,
    publishedAt,
    author->,
    seo,
  }
`;

export async function getJournal(): Promise<JournalDocument[]> {
  return sanityFetch<JournalDocument[]>(JOURNAL_QUERY);
}

export async function getJournalBySlug(
  slug: string
): Promise<JournalDocument | null> {
  return sanityFetch<JournalDocument | null>(JOURNAL_BY_SLUG_QUERY, { slug });
}
