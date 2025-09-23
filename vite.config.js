import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/', // 👈 Must match your repo name on GitHub
  plugins: [react()],
  server: {
    port: 5173, // optional: local dev server port
    open: true, // auto-open browser on `npm run dev`
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
