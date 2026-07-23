import { publicSanityClient } from "@/sanity/lib";
import type {
  HomepageDocument,
  ProjectDocument,
  ServiceDocument,
  TeamDocument,
  JournalDocument,
  AwardDocument,
  ClientDocument,
  SiteSettingsDocument,
  NavigationDocument,
  FooterDocument,
} from "@/types/sanity";

const HOMEPAGE_QUERY = `
  *[_type == "homepage"][0] {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    description,
    blocks[] {
      _key,
      _type,
      title,
      subtitle,
      description,
      image,
      cta,
      stats[] {
        _key,
        label,
        value,
      },
      projects[] {
        _ref,
        _type,
      },
      services[] {
        _ref,
        _type,
      },
      awards[] {
        _ref,
        _type,
      },
      clients[] {
        _ref,
        _type,
      },
    },
    seo,
  }
`;

const PROJECTS_QUERY = `
  *[_type == "project"] | order(publishedAt desc) {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    slug,
    description,
    image,
    content,
    featured,
    publishedAt,
    client,
    year,
    seo,
  }
`;

const FEATURED_PROJECTS_QUERY = `
  *[_type == "project" && featured == true] | order(publishedAt desc) {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    slug,
    description,
    image,
    featured,
    publishedAt,
    client,
    year,
  }
`;

const PROJECT_BY_SLUG_QUERY = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    slug,
    description,
    image,
    content,
    featured,
    publishedAt,
    client,
    year,
    seo,
  }
`;

const SERVICES_QUERY = `
  *[_type == "service"] | order(_createdAt) {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    slug,
    description,
    icon,
    content,
    seo,
  }
`;

const SERVICE_BY_SLUG_QUERY = `
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    slug,
    description,
    icon,
    content,
    seo,
  }
`;

const TEAM_QUERY = `
  *[_type == "team"] | order(_createdAt) {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    name,
    slug,
    role,
    image,
    bio,
    seo,
  }
`;

const TEAM_BY_SLUG_QUERY = `
  *[_type == "team" && slug.current == $slug][0] {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    name,
    slug,
    role,
    image,
    bio,
    seo,
  }
`;

const JOURNAL_QUERY = `
  *[_type == "journal"] | order(publishedAt desc) {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    slug,
    excerpt,
    content,
    image,
    publishedAt,
    author->,
    seo,
  }
`;

const JOURNAL_BY_SLUG_QUERY = `
  *[_type == "journal" && slug.current == $slug][0] {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    slug,
    excerpt,
    content,
    image,
    publishedAt,
    author->,
    seo,
  }
`;

const AWARDS_QUERY = `
  *[_type == "award"] | order(year desc) {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    organization,
    year,
    image,
  }
`;

const CLIENTS_QUERY = `
  *[_type == "client"] | order(_createdAt) {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    name,
    logo,
    url,
  }
`;

const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    siteTitle,
    siteDescription,
    logo,
    favicon,
    seo,
  }
`;

const NAVIGATION_QUERY = `
  *[_type == "navigation"][0] {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    items[] {
      _key,
      label,
      url,
      external,
    },
  }
`;

const FOOTER_QUERY = `
  *[_type == "footer"][0] {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    content,
    links[] {
      _key,
      label,
      url,
    },
    socialLinks[] {
      _key,
      platform,
      url,
    },
    copyright,
  }
`;

export async function getHomepage(): Promise<HomepageDocument | null> {
  return publicSanityClient.fetch(HOMEPAGE_QUERY);
}

export async function getProjects(): Promise<ProjectDocument[]> {
  return publicSanityClient.fetch(PROJECTS_QUERY);
}

export async function getFeaturedProjects(): Promise<ProjectDocument[]> {
  return publicSanityClient.fetch(FEATURED_PROJECTS_QUERY);
}

export async function getProjectBySlug(
  slug: string
): Promise<ProjectDocument | null> {
  return publicSanityClient.fetch(PROJECT_BY_SLUG_QUERY, { slug });
}

export async function getServices(): Promise<ServiceDocument[]> {
  return publicSanityClient.fetch(SERVICES_QUERY);
}

export async function getServiceBySlug(
  slug: string
): Promise<ServiceDocument | null> {
  return publicSanityClient.fetch(SERVICE_BY_SLUG_QUERY, { slug });
}

export async function getTeam(): Promise<TeamDocument[]> {
  return publicSanityClient.fetch(TEAM_QUERY);
}

export async function getTeamBySlug(
  slug: string
): Promise<TeamDocument | null> {
  return publicSanityClient.fetch(TEAM_BY_SLUG_QUERY, { slug });
}

export async function getJournal(): Promise<JournalDocument[]> {
  return publicSanityClient.fetch(JOURNAL_QUERY);
}

export async function getJournalBySlug(
  slug: string
): Promise<JournalDocument | null> {
  return publicSanityClient.fetch(JOURNAL_BY_SLUG_QUERY, { slug });
}

export async function getAwards(): Promise<AwardDocument[]> {
  return publicSanityClient.fetch(AWARDS_QUERY);
}

export async function getClients(): Promise<ClientDocument[]> {
  return publicSanityClient.fetch(CLIENTS_QUERY);
}

export async function getSiteSettings(): Promise<SiteSettingsDocument | null> {
  return publicSanityClient.fetch(SITE_SETTINGS_QUERY);
}

export async function getNavigation(): Promise<NavigationDocument | null> {
  return publicSanityClient.fetch(NAVIGATION_QUERY);
}

export async function getFooter(): Promise<FooterDocument | null> {
  return publicSanityClient.fetch(FOOTER_QUERY);
}
