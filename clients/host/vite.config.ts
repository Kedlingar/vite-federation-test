import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    vue(),
    federation({
      name: 'host-app',
      remotes: {
        remote_app: "http://localhost:7173/remote/assets/remoteEntry.js",
      },
      shared: ['vue'],
    })
  ],
  server: {
    port: 5175,
  }
})
