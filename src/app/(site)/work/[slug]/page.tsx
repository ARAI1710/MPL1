import type { Metadata } from "next";
import { Container, Heading, Text } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { getProjectBySlug, getProjects } from "@/sanity/queries";
import { generateSEOMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return generateSEOMetadata(project.seo, {
    title: project.title,
    description: project.description,
  });
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug.current,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps): Promise<React.ReactNode> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Container maxWidth="2xl" className="py-20">
      <FadeIn>
        <article>
          <Heading level={1} className="mb-4">
            {project.title}
          </Heading>
          <div className="flex gap-4 mb-8 text-secondary">
            {project.client && <span>{project.client}</span>}
            {project.year && <span>{project.year}</span>}
          </div>
          <Text size="lg" className="text-secondary mb-8">
            {project.description}
          </Text>
          {project.content && (
            <div className="prose prose-invert max-w-none">
              {project.content.map((block) => (
                <div key={block._key}>
                  {block.style && <p>{block.style}</p>}
                </div>
              ))}
            </div>
          )}
        </article>
      </FadeIn>
    </Container>
  );
}
