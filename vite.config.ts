import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const DEFAULT_SPOTS = {
  remaining: Number(process.env.SPOTS_REMAINING ?? 3),
  total: Number(process.env.SPOTS_TOTAL ?? 8),
  batch: process.env.SPOTS_BATCH || "September",
  year: Number(process.env.SPOTS_YEAR ?? 2026),
};

function spotsApiPlugin(): Plugin {
  return {
    name: "zimarix-spots-api",
    configureServer(server) {
      server.middlewares.use("/api/spots", (_req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Cache-Control", "no-store");
        res.end(JSON.stringify(DEFAULT_SPOTS));
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    spotsApiPlugin(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
