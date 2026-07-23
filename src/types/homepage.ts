import type { Image, Slug, Reference, RichText } from "./common";

export interface HomepageDocument {
  _id: string;
  _type: "homepage";
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  description: string;
  blocks: HomepageBlock[];
  seo: SEO;
}

export type HomepageBlock =
  | HeroBlock
  | StatisticsBlock
  | FeaturedProjectsBlock
  | ServicesBlock
  | AwardsBlock
  | ClientsBlock
  | CTABlock;

export interface HeroBlock {
  _key: string;
  _type: "heroBlock";
  title: string;
  subtitle?: string;
  description?: string;
  image?: Image;
  cta?: CTA;
}

export interface StatisticsBlock {
  _key: string;
  _type: "statisticsBlock";
  title?: string;
  stats: Statistic[];
}

export interface Statistic {
  _key: string;
  label: string;
  value: string;
}

export interface FeaturedProjectsBlock {
  _key: string;
  _type: "featuredProjectsBlock";
  title: string;
  description?: string;
  projects: Reference[];
}

export interface ServicesBlock {
  _key: string;
  _type: "servicesBlock";
  title: string;
  description?: string;
  services: Reference[];
}

export interface AwardsBlock {
  _key: string;
  _type: "awardsBlock";
  title: string;
  awards: Reference[];
}

export interface ClientsBlock {
  _key: string;
  _type: "clientsBlock";
  title: string;
  clients: Reference[];
}

export interface CTABlock {
  _key: string;
  _type: "ctaBlock";
  title: string;
  description?: string;
  cta: CTA;
}

export interface CTA {
  _key?: string;
  text: string;
  url: string;
  openInNewTab?: boolean;
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
