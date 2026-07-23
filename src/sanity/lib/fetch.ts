import { publicSanityClient } from "./client";

export async function sanityFetch<T>(
  query: string,
  params?: Record<string, unknown>
): Promise<T> {
  try {
    return await publicSanityClient.fetch<T>(query, params);
  } catch (error) {
    console.error("Sanity fetch error:", error);
    throw error;
  }
}
