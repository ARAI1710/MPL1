import { homepage } from "./homepage";
import { heroBlock, statisticsBlock, featuredProjectsBlock, servicesBlock, awardsBlock, clientsBlock, ctaBlock, statistic } from "./blocks";
import { project, service, team, journal } from "./documents";
import { award, client } from "./organizations";
import { siteSettings, navigation, footer, navigationItem, footerLink, socialLink } from "./settings";
import { seo, cta } from "./common";

export const schemaTypes = [
  homepage,
  heroBlock,
  statisticsBlock,
  statistic,
  featuredProjectsBlock,
  servicesBlock,
  awardsBlock,
  clientsBlock,
  ctaBlock,
  project,
  service,
  team,
  journal,
  award,
  client,
  siteSettings,
  navigation,
  navigationItem,
  footer,
  footerLink,
  socialLink,
  seo,
  cta,
];
