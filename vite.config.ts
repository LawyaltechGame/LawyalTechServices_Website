import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig(({ command, mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
    ...(command === 'build'
      ? [
          viteImagemin({
            mozjpeg: { quality: 70, progressive: true },
            optipng: { optimizationLevel: 5 },
            pngquant: { quality: [0.6, 0.75] },
            webp: { quality: 70 },
          }),
        ]
      : []),
  ],
  build: {
    sourcemap: false,
    target: 'es2020',
    minify: 'esbuild',
    cssMinify: true,
    reportCompressedSize: true,
    treeshake: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  esbuild: {
    drop: command === 'build' ? ['console', 'debugger'] : [],
  },
  define: {
    __DEV__: mode !== 'production',
  },
}))