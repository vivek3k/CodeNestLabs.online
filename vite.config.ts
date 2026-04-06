import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  // Cache outside OneDrive to prevent EPERM permission errors on Windows
  cacheDir: "C:/Users/Vivek/.vite-cache/CodeNestLabs",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
