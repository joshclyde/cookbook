import { fileURLToPath } from "node:url";
import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  typescript: {
    strict: true,
  },
  alias: {
    utils: fileURLToPath(new URL("./utils", import.meta.url)),
  },
});
