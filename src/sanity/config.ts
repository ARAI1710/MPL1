import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "mpl1-cms",
  title: "MPL1 CMS",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Homepage")
              .id("homepage")
              .child(
                S.document()
                  .schemaType("homepage")
                  .documentId("homepage")
              ),
            S.divider(),
            S.documentTypeListItem("project").title("Projects"),
            S.documentTypeListItem("service").title("Services"),
            S.documentTypeListItem("team").title("Team"),
            S.documentTypeListItem("journal").title("Journal"),
            S.documentTypeListItem("award").title("Awards"),
            S.documentTypeListItem("client").title("Clients"),
            S.divider(),
            S.listItem()
              .title("Settings")
              .id("settings")
              .child(
                S.list()
                  .title("Settings")
                  .items([
                    S.listItem()
                      .title("Site Settings")
                      .id("siteSettings")
                      .child(
                        S.document()
                          .schemaType("siteSettings")
                          .documentId("siteSettings")
                      ),
                    S.listItem()
                      .title("Navigation")
                      .id("navigation")
                      .child(
                        S.document()
                          .schemaType("navigation")
                          .documentId("navigation")
                      ),
                    S.listItem()
                      .title("Footer")
                      .id("footer")
                      .child(
                        S.document()
                          .schemaType("footer")
                          .documentId("footer")
                      ),
                  ])
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
