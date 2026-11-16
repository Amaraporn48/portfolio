import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves under /<repo>/ (default); container build sets VITE_BASE=/ — dev keeps '/'
export default defineConfig(({ command }) => ({
  base: command === 'build' ? (process.env.VITE_BASE || '/portfolio/') : '/',
  plugins: [react(), tailwindcss()],
  server: { port: 5173, strictPort: true, host: '0.0.0.0', allowedHosts: true },
  preview: { port: 4173, strictPort: true, host: '0.0.0.0', allowedHosts: true },
}))
