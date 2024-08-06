import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/s
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    sentryVitePlugin({
      org: "a5b84cea07f9",
      project: "javascript-react"
    })
  ],

  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_BASE_URL,
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  },

  build: {
    sourcemap: true
  }
  plugins: [react(), tsconfigPaths()]
});
