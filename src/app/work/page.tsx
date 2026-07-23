import React from "react";
import { Container, Heading, Text } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { getProjects } from "@/sanity/queries";

export default async function WorkPage(): Promise<React.ReactNode> {
  const projects = await getProjects();

  return (
    <main className="py-20">
      <Container maxWidth="2xl">
        <FadeIn>
          <Heading level={1} className="mb-4">
            Work
          </Heading>
          <Text size="lg" className="text-secondary mb-16">
            Explore our portfolio of projects and case studies.
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <article key={project._id} className="group">
                <div className="bg-secondary/10 rounded-lg p-6 hover:bg-secondary/20 transition-colors">
                  <Heading level={3} className="mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </Heading>
                  <Text size="sm" className="text-secondary mb-4">
                    {project.description}
                  </Text>
                  <a
                    href={`/work/${project.slug.current}`}
                    className="inline-block text-primary font-semibold hover:underline"
                  >
                    Read More →
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
