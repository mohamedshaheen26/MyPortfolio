import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Gzip compression
    viteCompression({
      algorithm: "gzip", // Compression algorithm
      ext: ".gz", // File extension for compressed files
      threshold: 10240, // Compress files larger than 10KB
      deleteOriginFile: false, // Keep the original files
    }),

    // Brotli compression
    viteCompression({
      algorithm: "brotliCompress", // Compression algorithm
      ext: ".br", // File extension for compressed files
      threshold: 10240, // Compress files larger than 10KB
      deleteOriginFile: false, // Keep the original files
    }),
  ],
});
