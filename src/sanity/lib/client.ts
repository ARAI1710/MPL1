import { client } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-07-23";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset) {
  throw new Error("Missing Sanity credentials");
}

export const sanityClient = client({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

export const publicSanityClient = client({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
