import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { execSync } from "child_process";
import { componentTagger } from "lovable-tagger";

// Build-time version info: short git commit hash + ISO build date.
// Exposed to the app via `define` as __COMMIT_HASH__ / __BUILD_DATE__.
function gitCommitHash(): string {
  try {
    return execSync("git rev-parse --short HEAD").toString().trim();
  } catch {
    return "unknown";
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Served from https://<user>.github.io/madrid-serenity-hub/ on GitHub Pages.
  // Use "/" locally (dev/preview) so the app keeps working at the root.
  base: mode === "production" ? "/madrid-serenity-hub/" : "/",
  define: {
    __COMMIT_HASH__: JSON.stringify(gitCommitHash()),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)),
  },
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
