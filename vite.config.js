import { vitePlugin as remix } from "@remix-run/dev"
import { defineConfig } from "vite"
import jsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [remix(), jsconfigPaths()],
  server: {
    open: true,
  },
})
