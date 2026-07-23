import React from "react";
import { Container, Heading, Text } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import type { ClientsBlock } from "@/types/sanity";

interface ClientsSectionProps {
  block: ClientsBlock;
}

export const ClientsSection: React.FC<ClientsSectionProps> = ({ block }) => {
  return (
    <section className="py-20 bg-background">
      <Container maxWidth="2xl">
        <FadeIn>
          <Heading level={2} className="mb-16 text-center">
            {block.title}
          </Heading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {block.clients.map((client) => (
              <div
                key={client._ref}
                className="flex items-center justify-center bg-foreground/5 rounded-lg p-8 h-32"
              >
                <p className="text-center text-foreground/60 font-medium">Client Logo</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};
