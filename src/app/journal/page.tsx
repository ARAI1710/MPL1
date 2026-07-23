import React from "react";
import { Container, Heading, Text } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { getJournal } from "@/sanity/queries";
import { formatDate } from "@/lib";

export default async function JournalPage(): Promise<React.ReactNode> {
  const articles = await getJournal();

  return (
    <main className="py-20">
      <Container maxWidth="2xl">
        <FadeIn>
          <Heading level={1} className="mb-4">
            Journal
          </Heading>
          <Text size="lg" className="text-secondary mb-16">
            Articles, insights, and stories from our team.
          </Text>
          <div className="space-y-12">
            {articles.map((article) => (
              <article key={article._id} className="border-b border-foreground/10 pb-8 last:border-b-0">
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
    </main>
  );
}
