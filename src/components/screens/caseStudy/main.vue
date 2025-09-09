<template>
  <section class="bg-[#0D0D0D] text-[#F1FAEE] py-20 px-6 md:pt-48 md:pb-60">
    <div class="max-w-5xl mx-auto text-center">
      <!-- Title -->
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
          @click="toggleOverlay(index)"
        >
          <!-- Project Image -->
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            :class="{
              'opacity-100': activeIndex === index, // visible when clicked
            }"
          >
            <router-link
              :to="project.route"
              class="bg-[#FD6F00] text-[#F1FAEE] px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition"
              @click.stop
            >
              View Case Study
            </router-link>
          </div>

          <!-- Project Title -->
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
import guardianLock from "@/assets/images/projects/guardianLock.png";

const projects = ref([
  {
    title: "Guardian Lock",
    image: guardianLock,
    route: { name: "caseStudy1" },
  },
  {
    title: "Dental Clinic Platform",
    image: diverseWeb,
    route: { name: "caseStudy2" },
  },
]);

const activeIndex = ref(null);

function toggleOverlay(index) {
  activeIndex.value = activeIndex.value === index ? null : index;
}
</script>
