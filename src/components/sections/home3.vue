<template>
  <section class="bg-[#0D0D0D] text-[#D7EAD9] px-6 py-32 border-t-2">
    <div class="max-w-5xl mx-auto text-center">
      <h2
        ref="titleRef"
        :class="[
          'text-3xl md:text-4xl font-bold transition-all duration-1000 ease-out',
          isVisible.title
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10',
        ]"
      >
        My Projects
      </h2>

      <p
        ref="descRef"
        :class="[
          'relative text-[#A6B9A8] mt-2 inline-block cursor-pointer transition-all duration-1000 ease-out delay-300',
          isVisible.desc
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10',
        ]"
      >
        Tap or click the
        <span class="text-[#FD6F00]"> picture </span>
        to view projects
        <span
          class="absolute left-1/2 -translate-x-1/2 -bottom-2 w-32 h-1 bg-[#FD6F00] rounded transition-all duration-500 group-hover:w-full"
        ></span>
      </p>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 lg:mt-16"
      >
        <div
          v-for="(project, index) in projects"
          :key="index"
          ref="projectRefs"
          :class="[
            'hover:scale-105 transform transition duration-300',
            'transition-all duration-1000 ease-out',
            isVisible.projects[index]
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
            `delay-[${index * 150}ms]`,
          ]"
        >
          <!-- Image wrapper -->
          <div
            class="relative group rounded-lg overflow-hidden cursor-pointer"
            @click="toggleOverlay(index)"
          >
            <img
              :src="project.image"
              alt="project"
              class="rounded-lg shadow-lg w-full h-48 object-cover"
            />

            <div
              v-if="project.caseStudy || project.livePreview"
              class="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white/10 backdrop-blur-sm opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:backdrop-blur-lg transition-all duration-500 ease-in-out rounded-lg"
              :class="{
                'opacity-100 scale-100 backdrop-blur-lg':
                  activeProject === index,
              }"
            >
              <a
                v-if="project.caseStudy"
                :href="project.caseStudy"
                class="bg-[#FD6F00] text-[#D7EAD9] px-4 py-2 rounded-md font-medium hover:bg-orange-600 transition"
              >
                View Case Study
              </a>
              <a
                v-if="project.livePreview"
                :href="project.livePreview"
                target="_blank"
                class="bg-white/80 text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition"
              >
                Live Preview
              </a>
            </div>
          </div>

          <p class="text-sm text-[#FD6F00] mt-3">{{ project.category }}</p>
          <h3 class="text-lg font-semibold">{{ project.title }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

import guardianLock from "@/assets/images/projects/guardianLock.png";
import diverseWeb from "@/assets/images/projects/diverseWeb.png";
import lamesaPos from "@/assets/images/projects/lamesaPos.png";
import lamesaWeb from "@/assets/images/projects/lamesaWeb.png";
import bozriahPos from "@/assets/images/projects/bozriahPos.png";
import bozriahKiosk from "@/assets/images/projects/bozriahKiosk.png";
import ascendCare from "@/assets/images/projects/ascendcare.png";

const activeProject = ref(null);
const toggleOverlay = (index) => {
  activeProject.value = activeProject.value === index ? null : index;
};

const projects = [
  {
    title: "Guardian Lock",
    category: "Web based Smart Door Application",
    image: guardianLock,
    caseStudy: "/case-study/guardian-lock",
    livePreview: "https://guardian-lock.vercel.app/",
  },
  {
    title: "Diverse Oral Core",
    category: "Dental Clinic Platform",
    image: diverseWeb,
    caseStudy: "/case-study/diverse-oral-core",
    livePreview: "https://diverseoralcore.vercel.app/",
  },
  {
    title: "Ascend Care",
    category: "Web based Home Care Service Application",
    image: ascendCare,
    livePreview: "https://ascendcare.vercel.app/",
  },
  {
    title: "Lamesa Inasal Website",
    category: "Lamesa Website",
    image: lamesaWeb,
    caseStudy: "/case-study/lamesa-inasal",
    livePreview: "https://lamesa.infinityfreeapp.com/WEB/index.php",
  },
  {
    title: "Lamesa Inasal POS System",
    category: "Web based Point Of Sale System",
    image: lamesaPos,
    caseStudy: "/case-study/lamesa-inasal",
  },
  {
    title: "Bozriah POS",
    category: "Web based Point Of Sale System",
    image: bozriahPos,
  },
  {
    title: "Bozriah Kiosk",
    category: "Web based Kiosk System",
    image: bozriahKiosk,
  },
];

// Animation visibility states
const isVisible = ref({
  title: false,
  desc: false,
  projects: Array(projects.length).fill(false),
});

const titleRef = ref(null);
const descRef = ref(null);
const projectRefs = ref([]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.value) isVisible.value.title = true;
          if (entry.target === descRef.value) isVisible.value.desc = true;
          const index = projectRefs.value.indexOf(entry.target);
          if (index !== -1) isVisible.value.projects[index] = true;
        }
      });
    },
    { threshold: 0.2 }
  );

  if (titleRef.value) observer.observe(titleRef.value);
  if (descRef.value) observer.observe(descRef.value);
  projectRefs.value.forEach((el) => {
    if (el) observer.observe(el);
  });
});
</script>
