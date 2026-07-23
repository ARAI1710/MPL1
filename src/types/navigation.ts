import type { Image } from "./common";

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
  content?: any[];
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
