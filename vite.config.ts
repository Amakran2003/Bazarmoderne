import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Check if we're building for GitHub Pages
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const baseUrl = isGitHubPages ? '/Bazarmoderne/' : '/'

// https://vitejs.dev/config/
export default defineConfig({
  base: baseUrl, // Use repo name for GitHub Pages, relative path for other deployments
  plugins: [react()],
  server: {
    // Improve mobile testing capabilities
    host: true,
    open: true,
  },
  build: {
    // Ensure source maps are generated for easier debugging
    sourcemap: true,
    // Add options to handle assets correctly for GitHub Pages
    assetsInlineLimit: 0, // Disable asset inlining to ensure correct paths
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
})