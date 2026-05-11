import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const port = Number(process.env.PORT) || 5173;
const basePath = process.env.BASE_PATH || "/";

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
<<<<<<< HEAD
    },
    dedupe: ["react", "react-dom"],
  },
  server: {
    port,
    host: "0.0.0.0",
=======
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
>>>>>>> 3190796648f825b187b0275e7ca94cc8d806e837
  },
  preview: {
    port,
    host: "0.0.0.0",
<<<<<<< HEAD
=======
    allowedHosts: true,
>>>>>>> 3190796648f825b187b0275e7ca94cc8d806e837
  },
});
