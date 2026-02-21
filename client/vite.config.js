import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./", // IMPORTANT: works for https://gishajayson.github.io/sample/ and later your domain
  plugins: [react()],
  server: {
    port: 5174,
    strictPort: true,
  },
});