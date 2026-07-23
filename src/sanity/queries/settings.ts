import { sanityFetch } from "../lib/fetch";
import type {
  SiteSettingsDocument,
  AwardDocument,
  ClientDocument,
} from "@/types/sanity";

const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    siteTitle,
    siteDescription,
    logo,
    favicon,
    seo,
  }
`;

const AWARDS_QUERY = `
  *[_type == "award"] | order(year desc) {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    organization,
    year,
    image,
  }
`;

const CLIENTS_QUERY = `
  *[_type == "client"] | order(_createdAt) {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    name,
    logo,
    url,
  }
`;

export async function getSiteSettings(): Promise<SiteSettingsDocument | null> {
  return sanityFetch<SiteSettingsDocument | null>(SITE_SETTINGS_QUERY);
}

export async function getAwards(): Promise<AwardDocument[]> {
  return sanityFetch<AwardDocument[]>(AWARDS_QUERY);
}

export async function getClients(): Promise<ClientDocument[]> {
  return sanityFetch<ClientDocument[]>(CLIENTS_QUERY);
}
