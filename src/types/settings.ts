import type { Image } from "./common";

export interface SiteSettingsDocument {
  _id: string;
  _type: "siteSettings";
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  siteTitle: string;
  siteDescription: string;
  logo: Image;
  favicon?: Image;
  seo: SEO;
}

export interface AwardDocument {
  _id: string;
  _type: "award";
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  organization: string;
  year: number;
  image?: Image;
}

export interface ClientDocument {
  _id: string;
  _type: "client";
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  name: string;
  logo: Image;
  url?: string;
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
