import { createRouter, createWebHistory } from "vue-router";
import { useTitle } from "@vueuse/core";

const routes = [
  {
    path: "/",
    component: () => import("@/routes/index.vue"),
    name: "Eve Koskie",
  },
  {
    path: "/shop",
    component: () => import("@/routes/shop.vue"),
    name: "shop",
  },
  {
    path: "/about",
    component: () => import("@/routes/about.vue"),
    name: "about",
  },
  {
    path: "/portfolio/:category",
    component: () => import("@/routes/portfolio.vue"),
    name: "Portfolio",
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/routes/404.vue"),
    name:"404"
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  if (to.path == "/") {
    useTitle(to.name?.toString());
    return;
  }
  useTitle(`${to.name?.toString()} - Eve Koskie`);
});

export default router;
