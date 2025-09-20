import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // 👇 Important: must match your repo name ("portfolio")
  base: '/portfolio/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
