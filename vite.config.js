import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves the site under /<repo>/ — dev keeps '/'
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/portfolio/' : '/',
  plugins: [react(), tailwindcss()],
  server: { port: 5173, strictPort: true, host: '0.0.0.0', allowedHosts: true },
  preview: { port: 4173, strictPort: true, host: '0.0.0.0', allowedHosts: true },
}))
