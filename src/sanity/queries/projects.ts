import { sanityFetch } from "../lib/fetch";
import type { ProjectDocument } from "@/types/sanity";

const PROJECTS_QUERY = `
  *[_type == "project"] | order(publishedAt desc) {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    slug,
    description,
    image,
    content,
    featured,
    publishedAt,
    client,
    year,
    seo,
  }
`;

const FEATURED_PROJECTS_QUERY = `
  *[_type == "project" && featured == true] | order(publishedAt desc) {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    slug,
    description,
    image,
    featured,
    publishedAt,
    client,
    year,
  }
`;

const PROJECT_BY_SLUG_QUERY = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    slug,
    description,
    image,
    content,
    featured,
    publishedAt,
    client,
    year,
    seo,
  }
`;

export async function getProjects(): Promise<ProjectDocument[]> {
  return sanityFetch<ProjectDocument[]>(PROJECTS_QUERY);
}

export async function getFeaturedProjects(): Promise<ProjectDocument[]> {
  return sanityFetch<ProjectDocument[]>(FEATURED_PROJECTS_QUERY);
}

export async function getProjectBySlug(
  slug: string
): Promise<ProjectDocument | null> {
  return sanityFetch<ProjectDocument | null>(PROJECT_BY_SLUG_QUERY, { slug });
}
