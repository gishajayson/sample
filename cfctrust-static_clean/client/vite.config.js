import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/",          // ✅ for www.cfctrust.org
  plugins: [react()],
  server: {
    port: 5174,
    strictPort: true,
  },
});

