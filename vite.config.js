import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const base = '/dashboard/';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: base,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    'import.meta.env.APP_BASE_PATH': JSON.stringify(base.replace(/\/$/, ''))
  }
})
