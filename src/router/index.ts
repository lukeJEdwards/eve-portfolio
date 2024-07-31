import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('@/views/portfolio.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/contact.vue')
    }
  ]
})

export default router
