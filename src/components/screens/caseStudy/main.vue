<template>
  <section class="bg-[#0D0D0D] text-[#F1FAEE] py-20 px-6 md:pt-48 md:pb-60">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold">
        Case <span class="text-[#FD6F00]">Studies</span>
      </h2>
      <p class="text-gray-400 mt-2">
        In-depth looks at how I approach and deliver successful projects
      </p>

      <!-- Projects -->
      <div class="flex flex-wrap justify-center gap-8 mt-12">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="relative group overflow-hidden rounded-2xl shadow-lg w-80 cursor-pointer"
          @click="project.status === 'up' ? toggleOverlay(index) : null"
        >
          <!-- DOT -->
          <span
            v-if="project.status"
            class="absolute top-4 right-6 w-3 h-3 rounded-full"
            :class="project.status === 'up' ? 'bg-green-500' : 'bg-red-500'"
          ></span>

          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            :class="{ 'opacity-100': activeIndex === index }"
          >
            <router-link
              v-if="project.status === 'up'"
              :to="project.route"
              class="bg-[#FD6F00] text-[#F1FAEE] px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition"
              @click.stop
            >
              View Case Study
            </router-link>

            <span
              v-else
              class="bg-gray-500 text-gray-300 px-6 py-2 rounded-md font-semibold cursor-not-allowed"
            >
              In Progress
            </span>
          </div>

          <div class="absolute bottom-4 left-4">
            <h3 class="text-lg font-bold">{{ project.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import diverseWeb from "@/assets/images/projects/diverseWeb.png";
import lamesaWeb from "@/assets/images/projects/lamesaWeb.png";
import guardianLock from "@/assets/images/projects/guardianLock.png";

const projects = ref([
  {
    title: "Guardian Lock",
    image: guardianLock,
    route: { name: "caseStudy1" },
    status: "up",
  },
  {
    title: "Lamesa Inasal Unified Platform",
    image: lamesaWeb,
    route: { name: "caseStudy2" },
    status: "down",
  },
  {
    title: "Dental Clinic Platform",
    image: diverseWeb,
    route: { name: "caseStudy3" },
    status: "down",
  },
]);

const activeIndex = ref(null);

function toggleOverlay(index) {
  activeIndex.value = activeIndex.value === index ? null : index;
}
</script>
