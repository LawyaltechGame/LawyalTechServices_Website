import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    proxy: {
      // Local dev proxy to avoid CORS for WordPress API
      '/wp-proxy': {
        target: 'https://legal-tech-writing.lawyaltech.org',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/wp-proxy/, '')
      }
    }
  }
})