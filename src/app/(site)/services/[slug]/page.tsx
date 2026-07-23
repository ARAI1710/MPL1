import type { Metadata } from "next";
import { Container, Heading, Text } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { getServices, getServiceBySlug } from "@/sanity/queries";
import { generateSEOMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return generateSEOMetadata(service.seo, {
    title: service.title,
    description: service.description,
  });
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const services = await getServices();
  return services.map((service) => ({
    slug: service.slug.current,
  }));
}

export default async function ServicePage({
  params,
}: ServicePageProps): Promise<React.ReactNode> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <Container maxWidth="2xl" className="py-20">
      <FadeIn>
        <article>
          <Heading level={1} className="mb-6">
            {service.title}
          </Heading>
          <Text size="lg" className="text-secondary mb-8">
            {service.description}
          </Text>
          {service.content && (
            <div className="prose prose-invert max-w-none">
              {service.content.map((block) => (
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
