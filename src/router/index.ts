import { createRouter, createWebHistory } from "vue-router";
import { useTitle } from "@vueuse/core";
import path from "path";

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
    path: "/portfolio",
    children: [
      {
        path: "",
        component: () => import("@/routes/portfolio/index.vue"),
        name: "Portfolio",
      },
      {
        path: ":category",
        component: () => import("@/routes/portfolio/[category].vue"),
      },
    ],
  },
  {
    path: "/project/:slug",
    component: () => import("@/routes/project.vue"),
  },
  {
    path: "/events",
    children: [
      {
        path: "",
        component: () => import("@/routes/events/index.vue"),
        name: "Events",
      },
      {
        path: ":slug",
        component: () => import("@/routes/events/[slug].vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/routes/404.vue"),
    name: "404",
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
