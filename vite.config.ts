import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePluginRadar } from "vite-plugin-radar";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/s
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    sentryVitePlugin({
      authToken: process.env.VITE_SENTRY_AUTH_TOKEN as string,
      org: process.env.VITE_SENTRY_ORG as string,
      project: "coach-coach"
    }),
    VitePluginRadar({
      analytics: {
        id: process.env.VITE_GA_MEASUREMENT_ID as string
      }
    })
  ],
  build: {
    sourcemap: true
  }
});
