import React from "react";
import { Container, Heading, Text } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { getServices } from "@/sanity/queries";

export default async function ServicesPage(): Promise<React.ReactNode> {
  const services = await getServices();

  return (
    <main className="py-20">
      <Container maxWidth="2xl">
        <FadeIn>
          <Heading level={1} className="mb-4">
            Services
          </Heading>
          <Text size="lg" className="text-secondary mb-16">
            A comprehensive range of services to bring your vision to life.
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <article key={service._id}>
                <div className="border border-foreground/20 rounded-lg p-6 hover:border-primary transition-colors">
                  <Heading level={3} className="mb-3">
                    {service.title}
                  </Heading>
                  <Text size="sm" className="text-secondary mb-4">
                    {service.description}
                  </Text>
                  <a
                    href={`/services/${service.slug.current}`}
                    className="inline-block text-primary font-semibold hover:underline"
                  >
                    Learn More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </Container>
    </main>
  );
}
