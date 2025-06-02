import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  base: '/remote/',
  plugins: [
    vue(),
    federation({
      name: 'remote_app',
      filename: 'remoteEntry.js',
      exposes: {
        './mount': './src/Implementation.ts'
      },
      shared: ['vue'],
    })
  ],
  server: {
    port: 5173,
  },
  preview: {
    port: 7173,
  },
  build: {
    modulePreload: false,
    target: ['esnext'],
    minify: false,
    cssCodeSplit: false,
  },
})
