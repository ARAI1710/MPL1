import type { ReactNode } from "react";
import type { Metadata } from "next";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "MPL1 - Portfolio CMS",
  description: "Production-ready portfolio CMS built with Next.js and Sanity",
};

export default function RootLayout({ children }: LayoutProps): ReactNode {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
