import { sanityFetch } from "../lib/fetch";
import type { NavigationDocument } from "@/types/sanity";

const NAVIGATION_QUERY = `
  *[_type == "navigation"][0] {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    items[] {
      _key,
      label,
      url,
      external,
    },
  }
`;

export async function getNavigation(): Promise<NavigationDocument | null> {
  return sanityFetch<NavigationDocument | null>(NAVIGATION_QUERY);
}
