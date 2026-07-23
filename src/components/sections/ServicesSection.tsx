import React from "react";
import { Container, Heading, Text } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import type { ServicesBlock } from "@/types/sanity";

interface ServicesSectionProps {
  block: ServicesBlock;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ block }) => {
  return (
    <section className="py-20 bg-background">
      <Container maxWidth="2xl">
        <FadeIn>
          <Heading level={2} className="mb-6">
            {block.title}
          </Heading>
          {block.description && (
            <Text size="lg" className="text-secondary mb-16">
              {block.description}
            </Text>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {block.services.map((service) => (
              <div key={service._ref} className="border border-foreground/20 rounded-lg p-6">
                <p className="text-foreground font-semibold">Service: {service._ref}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};
