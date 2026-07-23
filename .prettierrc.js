/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");

module.exports = {
  extends: "@vercel/style-guide/prettier",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: path.join(__dirname, "./tailwind.config.ts"),
};
