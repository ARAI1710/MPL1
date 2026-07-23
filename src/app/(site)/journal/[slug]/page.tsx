import type { Metadata } from "next";
import { Container, Heading, Text } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { getJournal, getJournalBySlug } from "@/sanity/queries";
import { generateSEOMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";

interface JournalPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: JournalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getJournalBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return generateSEOMetadata(article.seo, {
    title: article.title,
    description: article.excerpt,
  });
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const articles = await getJournal();
  return articles.map((article) => ({
    slug: article.slug.current,
  }));
}

export default async function JournalPage({
  params,
}: JournalPageProps): Promise<React.ReactNode> {
  const { slug } = await params;
  const article = await getJournalBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <Container maxWidth="lg" className="py-20">
      <FadeIn>
        <article>
          <Heading level={1} className="mb-4">
            {article.title}
          </Heading>
          <div className="flex gap-4 text-secondary text-sm mb-8">
            <span>{formatDate(article.publishedAt)}</span>
            {article.author && <span>By {article.author.name}</span>}
          </div>
          <Text size="lg" className="text-secondary mb-8">
            {article.excerpt}
          </Text>
          {article.content && (
            <div className="prose prose-invert max-w-none">
              {article.content.map((block) => (
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
