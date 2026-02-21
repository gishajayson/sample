import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",              // ✅ works on /sample/ AND on custom domain root
  plugins: [react()],
  server: {
    port: 5174,
    strictPort: true,
  },
});