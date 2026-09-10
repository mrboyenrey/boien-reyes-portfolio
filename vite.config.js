import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// base: './' keeps asset URLs relative so the build can be served from any
// sub-path — GitHub Pages (/boien-reyes-portfolio/), a CDN folder, or file://.
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 5175,
    open: true,
  },
})
