import React from "react";
import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  StatisticsSection,
  FeaturedProjectsSection,
  ServicesSection,
  AwardsSection,
  ClientsSection,
  CTASection,
} from "@/components/sections";
import { getHomepage, getNavigation, getFooter } from "@/sanity/queries";

export default async function HomePage(): Promise<React.ReactNode> {
  const [homepage, navigation, footer] = await Promise.all([
    getHomepage(),
    getNavigation(),
    getFooter(),
  ]);

  if (!homepage) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl">Homepage not configured</p>
      </div>
    );
  }

  return (
    <>
      <Header navigation={navigation || undefined} />
      <main>
        {homepage.blocks.map((block) => {
          switch (block._type) {
            case "heroBlock":
              return <HeroSection key={block._key} block={block} />;
            case "statisticsBlock":
              return <StatisticsSection key={block._key} block={block} />;
            case "featuredProjectsBlock":
              return <FeaturedProjectsSection key={block._key} block={block} />;
            case "servicesBlock":
              return <ServicesSection key={block._key} block={block} />;
            case "awardsBlock":
              return <AwardsSection key={block._key} block={block} />;
            case "clientsBlock":
              return <ClientsSection key={block._key} block={block} />;
            case "ctaBlock":
              return <CTASection key={block._key} block={block} />;
            default:
              return null;
          }
        })}
      </main>
      <Footer footer={footer || undefined} />
    </>
  );
}
