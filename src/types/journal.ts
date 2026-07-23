import type { Image, Slug, Reference, RichText } from "./common";

export interface JournalDocument {
  _id: string;
  _type: "journal";
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: Slug;
  excerpt: string;
  content: RichText[];
  image: Image;
  publishedAt: string;
  author?: {
    _id: string;
    name: string;
    slug: Slug;
    role: string;
    image: Image;
    bio?: string;
  };
  seo: SEO;
}

export interface SEO {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: Image;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
}
