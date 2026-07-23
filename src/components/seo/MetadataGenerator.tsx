import React from "react";
import type { Metadata } from "next";
import { getSiteSettings } from "@/sanity/queries";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  return {
    title: settings?.siteTitle || "MPL1",
    description: settings?.siteDescription || "Portfolio CMS",
    openGraph: {
      title: settings?.seo?.ogTitle || settings?.siteTitle,
      description: settings?.seo?.ogDescription || settings?.siteDescription,
      type: "website",
    },
  };
}
