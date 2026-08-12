import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  /*
  This makes the project ready to deploy to:

  https://YOUR-GITHUB-USERNAME.github.io/skills_combine_webpage/

  The image paths in App.jsx use import.meta.env.BASE_URL,
  so your public assets will also work correctly on GitHub Pages.
  */
  base: "/skills_combine_webpage/",
});