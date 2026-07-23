import type { Metadata } from "next";
import { Container, Heading, Text, Button } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { generateMetadata as genMetadata } from "@/lib/seo";

export const metadata: Metadata = genMetadata({
  title: "Contact",
  description: "Have a project in mind? Let's talk about it.",
});

export default function ContactPage(): React.ReactNode {
  return (
    <Container maxWidth="lg" className="py-20">
      <FadeIn>
        <div className="text-center mb-16">
          <Heading level={1} className="mb-4">
            Get in Touch
          </Heading>
          <Text size="lg" className="text-secondary">
            Have a project in mind? Let's talk about it.
          </Text>
        </div>
        <form className="max-w-2xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-foreground/20 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-foreground/20 rounded-lg focus:outline-none focus:border-primary"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Subject</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-foreground/20 rounded-lg focus:outline-none focus:border-primary"
              placeholder="What's this about?"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              className="w-full px-4 py-2 border border-foreground/20 rounded-lg focus:outline-none focus:border-primary resize-none"
              placeholder="Your message..."
              rows={6}
              required
            />
          </div>
          <Button type="submit" variant="primary" size="lg" className="w-full">
            Send Message
          </Button>
        </form>
      </FadeIn>
    </Container>
  );
}
