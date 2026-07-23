import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { publicSanityClient } from "./client";

const builder = imageUrlBuilder(publicSanityClient);

export function urlFor(source: SanityImageSource): ReturnType<typeof builder.image> {
  return builder.image(source);
}
