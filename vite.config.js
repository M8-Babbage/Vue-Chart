import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// Creación de alias
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // GitHub Pages
  base: "/Vue-Cash-Flow/",
  resolve: {
    // Aquí se pueden añadir los alias a las carpetas
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
