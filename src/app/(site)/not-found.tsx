import type { Metadata } from "next";
import { Container, Heading, Text } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { generateMetadata as genMetadata } from "@/lib/seo";

export const metadata: Metadata = genMetadata({
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist.",
});

export default function NotFound(): React.ReactNode {
  return (
    <Container maxWidth="lg" className="flex items-center justify-center min-h-screen">
      <FadeIn>
        <div className="text-center">
          <Heading level={1} className="mb-4">
            404
          </Heading>
          <Heading level={2} className="text-secondary mb-4">
            Page Not Found
          </Heading>
          <Text size="lg" className="text-secondary mb-8">
            The page you're looking for doesn't exist or has been moved.
          </Text>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded hover:opacity-90 transition-opacity"
          >
            Back to Home
          </a>
        </div>
      </FadeIn>
    </Container>
  );
}
