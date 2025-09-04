import { createRouter, createWebHistory } from "vue-router";

import homeScreen from "@/components/screens/home.vue";
import notFoundScreen from "@/components/layout/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: homeScreen,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: notFoundScreen,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
