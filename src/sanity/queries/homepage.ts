import { sanityFetch } from "../lib/fetch";
import type { HomepageDocument } from "@/types/sanity";

const HOMEPAGE_QUERY = `
  *[_type == "homepage"][0] {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    description,
    blocks[] {
      _key,
      _type,
      title,
      subtitle,
      description,
      image,
      cta,
      stats[] {
        _key,
        label,
        value,
      },
      projects[] {
        _ref,
        _type,
      },
      services[] {
        _ref,
        _type,
      },
      awards[] {
        _ref,
        _type,
      },
      clients[] {
        _ref,
        _type,
      },
    },
    seo,
  }
`;

export async function getHomepage(): Promise<HomepageDocument | null> {
  return sanityFetch<HomepageDocument | null>(HOMEPAGE_QUERY);
}
