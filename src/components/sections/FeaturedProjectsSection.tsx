import React from "react";
import { Container, Heading, Text } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import type { FeaturedProjectsBlock } from "@/types/sanity";

interface FeaturedProjectsSectionProps {
  block: FeaturedProjectsBlock;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({
  block,
}) => {
  return (
    <section className="py-20">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {block.projects.map((project) => (
              <div key={project._ref} className="bg-secondary/10 rounded-lg p-6">
                <p className="text-foreground font-semibold">Project: {project._ref}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};
