import { sanityFetch } from "../lib/fetch";
import type { FooterDocument } from "@/types/sanity";

const FOOTER_QUERY = `
  *[_type == "footer"][0] {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    content,
    links[] {
      _key,
      label,
      url,
    },
    socialLinks[] {
      _key,
      platform,
      url,
    },
    copyright,
  }
`;

export async function getFooter(): Promise<FooterDocument | null> {
  return sanityFetch<FooterDocument | null>(FOOTER_QUERY);
}
