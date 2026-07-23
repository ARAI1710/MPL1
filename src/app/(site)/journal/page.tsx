import type { Metadata } from "next";
import { Container, Heading, Text } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { getJournal } from "@/sanity/queries";
import { formatDate } from "@/lib/utils";
import { generateMetadata as genMetadata } from "@/lib/seo";

export const metadata: Metadata = genMetadata({
  title: "Journal",
  description: "Articles, insights, and stories from our team.",
});

export default async function JournalListPage(): Promise<React.ReactNode> {
  const articles = await getJournal();

  if (!articles.length) {
    return (
      <Container maxWidth="2xl" className="py-20">
        <FadeIn>
          <Heading level={1} className="mb-4">
            Journal
          </Heading>
          <Text size="lg" className="text-secondary">
            No articles found. Check back soon!
          </Text>
        </FadeIn>
      </Container>
    );
  }

  return (
    <Container maxWidth="2xl" className="py-20">
      <FadeIn>
        <Heading level={1} className="mb-4">
          Journal
        </Heading>
        <Text size="lg" className="text-secondary mb-16">
          Articles, insights, and stories from our team.
        </Text>
        <div className="space-y-12">
          {articles.map((article) => (
            <article
              key={article._id}
              className="border-b border-foreground/10 pb-8 last:border-b-0"
            >
              <div className="mb-4">
                <Text size="sm" className="text-secondary">
                  {formatDate(article.publishedAt)}
                </Text>
              </div>
              <Heading level={2} className="mb-3">
                {article.title}
              </Heading>
              <Text size="base" className="text-secondary mb-4">
                {article.excerpt}
              </Text>
              <a
                href={`/journal/${article.slug.current}`}
                className="inline-block text-primary font-semibold hover:underline"
              >
                Read More →
              </a>
            </article>
          ))}
        </div>
      </FadeIn>
    </Container>
  );
}
