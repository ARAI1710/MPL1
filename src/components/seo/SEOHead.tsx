import React from "react";
import type { Metadata } from "next";
import type { SEO } from "@/types/sanity";

interface SEOProps {
  seo?: SEO;
  title?: string;
  description?: string;
  url?: string;
}

export function generatePageMetadata(props: SEOProps): Metadata {
  return {
    title: props.seo?.metaTitle || props.title,
    description: props.seo?.metaDescription || props.description,
    canonical: props.seo?.canonical || props.url,
    robots: {
      index: !props.seo?.noindex,
      follow: true,
    },
    openGraph: {
      title: props.seo?.ogTitle || props.title,
      description: props.seo?.ogDescription || props.description,
      type: (props.seo?.ogType as any) || "website",
      url: props.url,
    },
  };
}

export const SEOHead: React.FC<SEOProps> = (props) => {
  const metadata = generatePageMetadata(props);

  return (
    <>
      <title>{metadata.title as string}</title>
      <meta name="description" content={metadata.description as string} />
      {metadata.canonical && (
        <link rel="canonical" href={metadata.canonical as string} />
      )}
    </>
  );
};
