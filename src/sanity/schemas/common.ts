import { defineType, defineField } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
    }),
    defineField({
      name: "ogImage",
      title: "OG Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "ogTitle",
      title: "OG Title",
      type: "string",
    }),
    defineField({
      name: "ogDescription",
      title: "OG Description",
      type: "text",
    }),
    defineField({
      name: "ogType",
      title: "OG Type",
      type: "string",
    }),
    defineField({
      name: "canonical",
      title: "Canonical URL",
      type: "url",
    }),
    defineField({
      name: "noindex",
      title: "No Index",
      type: "boolean",
      initialValue: false,
    }),
  ],
});

export const cta = defineType({
  name: "cta",
  title: "Call to Action",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Button Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "openInNewTab",
      title: "Open in New Tab",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
