import React from "react";
import { Container, Heading, Text, Button } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import type { CTABlock } from "@/types/sanity";

interface CTASectionProps {
  block: CTABlock;
}

export const CTASection: React.FC<CTASectionProps> = ({ block }) => {
  return (
    <section className="py-20 bg-primary text-white">
      <Container maxWidth="2xl">
        <FadeIn>
          <div className="text-center">
            <Heading level={2} className="mb-6 text-white">
              {block.title}
            </Heading>
            {block.description && (
              <Text size="lg" className="mb-8 text-white/90">
                {block.description}
              </Text>
            )}
            <a
              href={block.cta.url}
              target={block.cta.openInNewTab ? "_blank" : undefined}
              rel={block.cta.openInNewTab ? "noopener noreferrer" : undefined}
              className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded hover:opacity-90 transition-opacity"
            >
              {block.cta.text}
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};
