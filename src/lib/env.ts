function required(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export const env = {
  sanityProjectId: required("NEXT_PUBLIC_SANITY_PROJECT_ID"),
  sanityDataset: required("NEXT_PUBLIC_SANITY_DATASET"),
  sanityApiVersion:
    process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-07-23",
  resendApiKey: process.env.RESEND_API_KEY ?? "",
  contactEmail: process.env.CONTACT_EMAIL ?? "hello@mpl1.com",
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
};
