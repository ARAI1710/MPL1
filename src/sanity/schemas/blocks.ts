import { defineType, defineField } from "sanity";

export const heroBlock = defineType({
  name: "heroBlock",
  title: "Hero Block",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "cta",
      title: "Call to Action",
      type: "cta",
    }),
  ],
});

export const statisticsBlock = defineType({
  name: "statisticsBlock",
  title: "Statistics Block",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "stats",
      title: "Statistics",
      type: "array",
      of: [{ type: "statistic" }],
    }),
  ],
});

export const statistic = defineType({
  name: "statistic",
  title: "Statistic",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "value",
      title: "Value",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const featuredProjectsBlock = defineType({
  name: "featuredProjectsBlock",
  title: "Featured Projects Block",
  type: "object",
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
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "project" }],
        },
      ],
    }),
  ],
});

export const servicesBlock = defineType({
  name: "servicesBlock",
  title: "Services Block",
  type: "object",
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
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "service" }],
        },
      ],
    }),
  ],
});

export const awardsBlock = defineType({
  name: "awardsBlock",
  title: "Awards Block",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "awards",
      title: "Awards",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "award" }],
        },
      ],
    }),
  ],
});

export const clientsBlock = defineType({
  name: "clientsBlock",
  title: "Clients Block",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clients",
      title: "Clients",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "client" }],
        },
      ],
    }),
  ],
});

export const ctaBlock = defineType({
  name: "ctaBlock",
  title: "CTA Block",
  type: "object",
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
      name: "cta",
      title: "Call to Action",
      type: "cta",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
