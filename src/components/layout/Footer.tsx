import React from "react";
import { Container, Text } from "@/components/ui";
import type { FooterDocument } from "@/types/sanity";

interface FooterProps {
  footer?: FooterDocument;
}

export const Footer: React.FC<FooterProps> = ({ footer }) => {
  return (
    <footer className="bg-foreground text-background py-16">
      <Container maxWidth="2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-bold text-lg mb-4">MPL1</p>
            <Text size="sm" className="text-background/70">
              Production-ready portfolio CMS
            </Text>
          </div>
          <div>
            <p className="font-semibold mb-4">Links</p>
            <ul className="space-y-2">
              {footer?.links.map((link) => (
                <li key={link._key}>
                  <a href={link.url} className="text-sm hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-4">Social</p>
            <ul className="space-y-2">
              {footer?.socialLinks.map((link) => (
                <li key={link._key}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline capitalize"
                  >
                    {link.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8">
          <Text size="sm" className="text-center text-background/70">
            {footer?.copyright || `© ${new Date().getFullYear()} MPL1. All rights reserved.`}
          </Text>
        </div>
      </Container>
    </footer>
  );
};
