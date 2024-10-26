import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copy } from "vite-plugin-copy";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [{ src: "src/assets/fonts/*", dest: "dist/fonts" }],
      hook: "build",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
