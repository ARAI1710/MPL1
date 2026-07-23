import { sanityFetch } from "../lib/fetch";
import type { ServiceDocument } from "@/types/sanity";

const SERVICES_QUERY = `
  *[_type == "service"] | order(_createdAt) {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    slug,
    description,
    icon,
    content,
    seo,
  }
`;

const SERVICE_BY_SLUG_QUERY = `
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    slug,
    description,
    icon,
    content,
    seo,
  }
`;

export async function getServices(): Promise<ServiceDocument[]> {
  return sanityFetch<ServiceDocument[]>(SERVICES_QUERY);
}

export async function getServiceBySlug(
  slug: string
): Promise<ServiceDocument | null> {
  return sanityFetch<ServiceDocument | null>(SERVICE_BY_SLUG_QUERY, { slug });
}
