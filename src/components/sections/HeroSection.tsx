import React from "react";
import { Container, Heading, Text } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import type { HeroBlock } from "@/types/sanity";

interface HeroSectionProps {
  block: HeroBlock;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ block }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
      <Container maxWidth="2xl">
        <FadeIn>
          <div className="text-center">
            <Heading level={1} className="mb-6">
              {block.title}
            </Heading>
            {block.subtitle && (
              <Heading level={3} className="text-secondary mb-6">
                {block.subtitle}
              </Heading>
            )}
            {block.description && (
              <Text size="lg" className="text-secondary mb-8 max-w-2xl mx-auto">
                {block.description}
              </Text>
            )}
            {block.cta && (
              <a
                href={block.cta.url}
                target={block.cta.openInNewTab ? "_blank" : undefined}
                rel={block.cta.openInNewTab ? "noopener noreferrer" : undefined}
                className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded hover:opacity-90 transition-opacity"
              >
                {block.cta.text}
              </a>
            )}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};
