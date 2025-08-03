import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      }
    }
  },
  resolve: {
    alias: [
      { find: '@webops/cms/react', replacement: path.resolve(__dirname, '../react/src/index.ts') },
      { find: '@webops/cms/core', replacement: path.resolve(__dirname, '../core/index.ts') }
    ],
  },  
})
