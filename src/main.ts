import './assets/main.css'

import { createApp } from 'vue'
import { StoryblokVue, apiPlugin } from "@storyblok/vue";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(StoryblokVue, {
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
  bridge: import.meta.env.NODE_ENV !== 'production',
  use: [apiPlugin],
});
app.use(router)

app.mount('#app')
