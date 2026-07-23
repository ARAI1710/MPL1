import type { Image, Slug, Reference, RichText } from "./common";

export interface ProjectDocument {
  _id: string;
  _type: "project";
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: Slug;
  description: string;
  image: Image;
  content: RichText[];
  featured: boolean;
  publishedAt: string;
  seo: SEO;
  client?: string;
  year?: number;
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
