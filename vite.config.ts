import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base is relative so the build works when served from a subfolder (e.g. GitHub Pages / archive).
export default defineConfig({
  base: './',
  plugins: [react()],
})
