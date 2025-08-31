import { createRouter, createWebHistory } from "vue-router";

import homeScreen from "@/components/screens/home.vue";
import aboutScreen from "@/components/screens/about.vue";

// NOT FOUND SCREEN
import notFoundScreen from "@/components/layout/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: homeScreen,
  },
  {
    path: "/about",
    name: "About",
    component: aboutScreen,
  },

  // route (404)
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: notFoundScreen,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
