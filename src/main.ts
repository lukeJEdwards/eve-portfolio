import "./assets/styles.css"

import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from "vue-router";
import { routes } from "vue-router/auto-routes";
import { useTitle } from "@vueuse/core";

import { StoryblokVue, apiPlugin } from "@storyblok/vue";
import MasonryWall from "@yeger/vue-masonry-wall";



const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  if(to.path == "/"){
    useTitle(to.name?.toString())
    return
  }
  useTitle(`${to.name?.toString()} - Eve Koskie`)
})


const app = createApp(App)

app.use(MasonryWall);

app.use(StoryblokVue, {
  accessToken: import.meta.env.VITE_STORYBLOK_PREVIEW_TOKEN,
  bridge: import.meta.env.NODE_ENV !== "production", // optimizes by excluding the bridge on production
  use: [apiPlugin],
});

app.use(router)
app.mount('#app')
