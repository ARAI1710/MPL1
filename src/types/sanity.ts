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

export interface TeamDocument {
  _id: string;
  _type: "team";
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  name: string;
  slug: Slug;
  role: string;
  image: Image;
  bio?: string;
  seo: SEO;
}

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
  author?: Reference;
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

export interface NavigationDocument {
  _id: string;
  _type: "navigation";
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  items: NavigationItem[];
}

export interface NavigationItem {
  _key: string;
  label: string;
  url: string;
  external?: boolean;
}

export interface FooterDocument {
  _id: string;
  _type: "footer";
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  content?: RichText[];
  links: FooterLink[];
  socialLinks: SocialLink[];
  copyright?: string;
}

export interface FooterLink {
  _key: string;
  label: string;
  url: string;
}

export interface SocialLink {
  _key: string;
  platform: "twitter" | "linkedin" | "github" | "instagram" | "facebook";
  url: string;
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
