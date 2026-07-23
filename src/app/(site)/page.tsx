import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Container, Heading, Text, Button } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import {
  HeroSection,
  StatisticsSection,
  FeaturedProjectsSection,
  ServicesSection,
  AwardsSection,
  ClientsSection,
  CTASection,
} from "@/components/sections";
import { getHomepage, getNavigation } from "@/sanity/queries";
import { generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata(undefined, {
  title: "MPL1 - Portfolio CMS",
  description: "Production-ready portfolio CMS built with Next.js and Sanity",
});

export default async function HomePage(): Promise<React.ReactNode> {
  const [homepage, navigation] = await Promise.all([
    getHomepage(),
    getNavigation(),
  ]);

  if (!homepage) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Container maxWidth="2xl">
          <FadeIn>
            <div className="text-center">
              <Heading level={1} className="mb-4">
                Homepage Not Configured
              </Heading>
              <Text size="lg" className="text-secondary mb-8">
                Please configure the homepage in Sanity CMS.
              </Text>
              <Button variant="primary" size="lg" asChild>
                <a href="/contact">Get Started</a>
              </Button>
            </div>
          </FadeIn>
        </Container>
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
              return (
                <FeaturedProjectsSection key={block._key} block={block} />
              );
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
    </>
  );
}
