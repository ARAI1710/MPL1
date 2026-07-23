import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://mpl1.com"),
  title: {
    default: "MPL1",
    template: "%s | MPL1",
  },
  description: "Production-ready portfolio CMS built with Next.js and Sanity",
  keywords: ["portfolio", "cms", "design", "studio"],
  authors: [
    {
      name: "MPL1",
      url: "https://mpl1.com",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mpl1.com",
    title: "MPL1 - Portfolio CMS",
    description: "Production-ready portfolio CMS",
    siteName: "MPL1",
  },
  twitter: {
    card: "summary_large_image",
    title: "MPL1 - Portfolio CMS",
    description: "Production-ready portfolio CMS",
    creator: "@mpl1",
  },
  robots: {
    index: true,
    follow: true,
  },
};
