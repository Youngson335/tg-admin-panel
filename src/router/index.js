import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/Home/HomePage.vue"),
  },
  {
    path: "/tools",
    name: "tools",
    component: () => import("../pages/Tools/ToolsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
