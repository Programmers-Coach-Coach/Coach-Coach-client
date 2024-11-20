import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePluginRadar } from "vite-plugin-radar";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/s
export default defineConfig({
  define: {
    global: "window" // 글로벌 객체를 브라우저 환경에 맞게 설정
  },
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({ include: "**/*.svg?react" }),
    VitePluginRadar({
      analytics: {
        id: process.env.VITE_GA_MEASUREMENT_ID as string
      }
    })
  ],
  build: {
    sourcemap: false
  }
});
