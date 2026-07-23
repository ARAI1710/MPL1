import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { getNavigation, getFooter } from "@/sanity/queries";
import "@/styles/globals.css";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "MPL1 - Portfolio CMS",
  description: "Production-ready portfolio CMS built with Next.js and Sanity",
  metadataBase: new URL("https://mpl1.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mpl1.vercel.app",
    title: "MPL1 - Portfolio CMS",
    description: "Production-ready portfolio CMS built with Next.js and Sanity",
  },
};

export default async function RootLayout({
  children,
}: LayoutProps): Promise<ReactNode> {
  const [navigation, footer] = await Promise.all([
    getNavigation(),
    getFooter(),
  ]);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-background text-foreground">
        <Header navigation={navigation || undefined} />
        {children}
        <Footer footer={footer || undefined} />
      </body>
    </html>
  );
}
