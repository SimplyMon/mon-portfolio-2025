import { createRouter, createWebHistory } from "vue-router";

import homeScreen from "@/components/screens/home.vue";

// NOT FOUND SCREEN
import notFoundScreen from "@/components/layout/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: homeScreen,
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
