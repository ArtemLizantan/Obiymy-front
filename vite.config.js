import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copy } from "vite-plugin-copy";
import path from "path";

const isProd = process.env.VITE_NODE_ENV === "production";

export default defineConfig({
  // Базовый путь зависит от режима
  base: isProd ? "/Obiymy-front/" : "/",

  plugins: [
    react(),
    copy({
      targets: [{ src: "src/assets/fonts/*", dest: "dist/fonts" }],
      hook: "build",
    }),
  ],

  // Настройка алиасов
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    port: 3000,
    open: true,
  },

  build: {
    minify: isProd,
    sourcemap: !isProd,
  },
});
