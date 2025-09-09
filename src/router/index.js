import { createRouter, createWebHistory } from "vue-router";

import homeScreen from "@/components/screens/home.vue";
import contactsScreen from "@/components/screens/contacts.vue";
import resumeScreen from "@/components/screens/resume.vue";
import caseStudyScreen from "@/components/screens/caseStudy/main.vue";

// Case Studies
import caseStudy1 from "@/components/screens/caseStudy/caseStudy1/caseStudy1.vue";
import caseStudy2 from "@/components/screens/caseStudy/caseStudy2/caseStudy2.vue";

// 404
import notFoundScreen from "@/components/layout/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: homeScreen,
  },
  {
    path: "/case-study",
    name: "CaseStudy",
    component: caseStudyScreen,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: contactsScreen,
  },
  {
    path: "/resume",
    name: "Resume",
    component: resumeScreen,
  },

  // Case Studies
  {
    path: "/case-study/guardian-lock",
    name: "caseStudy1",
    component: caseStudy1,
  },
  {
    path: "/case-study/diverseoralcore-web",
    name: "caseStudy2",
    component: caseStudy2,
  },
  // 404
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
