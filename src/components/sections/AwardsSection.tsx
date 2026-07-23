import React from "react";
import { Container, Heading } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import type { AwardsBlock } from "@/types/sanity";

interface AwardsSectionProps {
  block: AwardsBlock;
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({ block }) => {
  return (
    <section className="py-20">
      <Container maxWidth="2xl">
        <FadeIn>
          <Heading level={2} className="mb-16 text-center">
            {block.title}
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {block.awards.map((award) => (
              <div key={award._ref} className="border-l-4 border-primary pl-6 py-4">
                <p className="text-foreground font-semibold">Award: {award._ref}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};
