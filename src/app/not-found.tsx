import React from "react";
import { Container, Heading, Text } from "@/components/ui";
import { FadeIn } from "@/components/motion";

export default function NotFound(): React.ReactNode {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <Container maxWidth="lg">
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
    </main>
  );
}
