import type { Metadata } from "next";
import { Container, Heading, Text } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { getProjects } from "@/sanity/queries";
import { generateMetadata as genMetadata } from "@/lib/seo";

export const metadata: Metadata = genMetadata({
  title: "Our Work",
  description: "Explore our portfolio of projects and case studies.",
});

export default async function WorkPage(): Promise<React.ReactNode> {
  const projects = await getProjects();

  if (!projects.length) {
    return (
      <Container maxWidth="2xl" className="py-20">
        <FadeIn>
          <Heading level={1} className="mb-4">
            Work
          </Heading>
          <Text size="lg" className="text-secondary">
            No projects found. Check back soon!
          </Text>
        </FadeIn>
      </Container>
    );
  }

  return (
    <Container maxWidth="2xl" className="py-20">
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
  );
}
