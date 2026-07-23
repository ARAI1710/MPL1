import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getNavigation, getFooter } from "@/sanity/queries";

interface SiteLayoutProps {
  children: ReactNode;
}

export default async function SiteLayout({
  children,
}: SiteLayoutProps): Promise<ReactNode> {
  const [navigation, footer] = await Promise.all([
    getNavigation(),
    getFooter(),
  ]);

  return (
    <>
      <Header navigation={navigation || undefined} />
      <main>{children}</main>
      <Footer footer={footer || undefined} />
    </>
  );
}
