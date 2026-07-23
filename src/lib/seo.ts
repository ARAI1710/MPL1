import type { Metadata } from "next";
import type { SEO } from "@/types/sanity";

interface GenerateMetadataParams {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  author?: string;
}

export function generateMetadata(params: GenerateMetadataParams): Metadata {
  const { title, description, image, url, type = "website" } = params;

  return {
    title,
    description,
    openGraph: {
      title: title || undefined,
      description: description || undefined,
      url: url || undefined,
      type: type || "website",
      images: image ? [{ url: image }] : undefined,
      publishedTime: params.publishedTime || undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: title || undefined,
      description: description || undefined,
      images: image ? [image] : undefined,
    },
  };
}

export function generateSEOMetadata(seo: SEO | undefined, defaults: GenerateMetadataParams): Metadata {
  return generateMetadata({
    title: seo?.metaTitle || defaults.title,
    description: seo?.metaDescription || defaults.description,
    image: seo?.ogImage?.asset ? `https://cdn.sanity.io/images/${seo.ogImage.asset}` : defaults.image,
    url: seo?.canonical || defaults.url,
    type: (seo?.ogType as any) || "website",
  });
}
