import type { Image, Slug, RichText } from "./common";

export interface ServiceDocument {
  _id: string;
  _type: "service";
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: Slug;
  description: string;
  icon?: string;
  content?: RichText[];
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
