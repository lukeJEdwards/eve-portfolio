import "./assets/styles.css"

import { createApp } from 'vue'
import App from './App.vue'
import Router from "./router"

import { createPinia } from "pinia";
import MasonryWall from "@yeger/vue-masonry-wall";


const pinia = createPinia();
const app = createApp(App)

app.use(Router)
app.use(pinia)
app.use(MasonryWall)

app.mount('#app')
