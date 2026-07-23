import React from "react";
import { Container, Heading, Text } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { StatisticCard } from "@/components/motion";
import type { StatisticsBlock } from "@/types/sanity";

interface StatisticsProps {
  block: StatisticsBlock;
}

export const StatisticsSection: React.FC<StatisticsProps> = ({ block }) => {
  return (
    <section className="py-20 bg-background">
      <Container maxWidth="2xl">
        <FadeIn>
          {block.title && (
            <Heading level={2} className="text-center mb-16">
              {block.title}
            </Heading>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {block.stats.map((stat) => (
              <StatisticCard key={stat._key} label={stat.label} value={stat.value} />
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};
