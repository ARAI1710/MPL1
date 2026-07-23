import { defineType, defineField } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "blocks",
      title: "Blocks",
      type: "array",
      of: [
        { type: "heroBlock" },
        { type: "statisticsBlock" },
        { type: "featuredProjectsBlock" },
        { type: "servicesBlock" },
        { type: "awardsBlock" },
        { type: "clientsBlock" },
        { type: "ctaBlock" },
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
