import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  // Use / for local dev, /my_portfolio/ for production
  base: process.env.NODE_ENV === "production" ? "/my_portfolio/" : "/",
  plugins: [
    react(),
    tailwindcss()
  ]
});
