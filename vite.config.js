import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 'https://shop-fe-one.vercel.app/',
    proxy: {
    "/api": {
        target: "https://puce-doubtful-harp-seal.cyclic.app/",
        changeOrigin: true,
        },
    }
  },
})
