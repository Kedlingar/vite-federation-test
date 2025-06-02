import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

export function mount(el: HTMLElement) {
  const app = createApp(App)
  app
  .use(router)
  .mount(el)
}