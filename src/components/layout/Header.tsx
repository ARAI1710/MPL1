import React from "react";
import { Container } from "@/components/ui";
import type { NavigationDocument } from "@/types/sanity";

interface HeaderProps {
  navigation?: NavigationDocument;
}

export const Header: React.FC<HeaderProps> = ({ navigation }) => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-foreground/10">
      <Container maxWidth="2xl">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl">MPL1</div>
          <nav className="flex gap-8">
            {navigation?.items.map((item) => (
              <a
                key={item._key}
                href={item.url}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
};
