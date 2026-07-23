export * from "./common";
export * from "./homepage";
export * from "./project";
export * from "./service";
export * from "./journal";
export * from "./navigation";
export * from "./settings";

// Re-export Sanity types for backwards compatibility
export type { HomepageDocument as HomepageDocument } from "./homepage";
export type { ProjectDocument as ProjectDocument } from "./project";
export type { ServiceDocument as ServiceDocument } from "./service";
export type { JournalDocument as JournalDocument } from "./journal";
export type { NavigationDocument as NavigationDocument } from "./navigation";
export type { FooterDocument as FooterDocument } from "./navigation";
export type { SiteSettingsDocument as SiteSettingsDocument } from "./settings";
export type { AwardDocument as AwardDocument } from "./settings";
export type { ClientDocument as ClientDocument } from "./settings";
