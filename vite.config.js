import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/iphone-website/",
  plugins: [
    react(),
    sentryVitePlugin({
      org: "jsm-x9",
      project: "javascript-react",
    }),
  ],
  build: {
    chunkSizeWarningLimit: 10000, // Set to 1000 KB (default is 500 KB)
  },
});
