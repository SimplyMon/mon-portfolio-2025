<!-- this is version1 -->
<template>
  <section
    class="bg-[#0D0D0D] text-[#F1FAEE] px-6 min-h-screen flex items-center justify-center"
  >
    <div
      class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16"
    >
      <div class="relative flex-shrink-0 flex justify-center md:justify-start">
        <!-- Circle Skeleton -->
        <div
          v-if="!imageLoaded"
          class="w-52 sm:w-56 md:w-80 h-72 sm:h-72 md:h-96 rounded-full bg-gray-700 animate-pulse"
        ></div>

        <img
          v-show="imageLoaded"
          src="../../assets/images/hero1.png"
          alt="Profile"
          class="relative w-52 sm:w-56 md:w-80 h-auto rounded-full object-cover shadow-lg"
          @load="onImageLoad"
        />
      </div>

      <div class="flex-1 text-center md:text-left space-y-4">
        <!-- Skeleton layout -->
        <div v-if="!textLoaded" class="space-y-4">
          <div
            class="mx-auto md:mx-0 w-3/4 h-10 bg-gray-700 rounded animate-pulse"
          ></div>
          <div
            class="mx-auto md:mx-0 w-1/2 h-6 bg-gray-700 rounded animate-pulse"
          ></div>
          <div
            class="mx-auto md:mx-0 w-full lg:w-96 max-w-md md:max-w-lg h-20 bg-gray-700 rounded animate-pulse"
          ></div>
          <div
            class="mx-auto md:mx-0 w-40 h-12 bg-gray-700 rounded-lg animate-pulse"
          ></div>
          <div class="flex justify-center md:justify-start space-x-4 pt-4">
            <div class="w-6 h-6 bg-gray-700 rounded-full animate-pulse"></div>
            <div class="w-6 h-6 bg-gray-700 rounded-full animate-pulse"></div>
            <div class="w-6 h-6 bg-gray-700 rounded-full animate-pulse"></div>
            <div class="w-6 h-6 bg-gray-700 rounded-full animate-pulse"></div>
          </div>
        </div>

        <transition appear name="fade-slide" mode="out-in">
          <div v-if="textLoaded">
            <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
              Simon Pasag
            </h1>

            <p class="text-base md:text-lg text-gray-400 mt-2">
              Web Developer • UI/UX Designer
            </p>

            <p class="mt-6 max-w-md md:max-w-lg text-[#F1FAEE] mx-auto md:mx-0">
              I build responsive websites where clean design meets clean code.
              Turning Ideas Into Interactive Web Experiences.
            </p>

            <div class="mt-8 flex flex-col items-center md:items-start">
              <router-link
                to="/case-study"
                class="bg-[#FD6F00] hover:bg-orange-600 px-8 py-3 rounded-md font-medium"
              >
                View Case Studies
              </router-link>

              <!-- Contact Icons -->
              <div class="mt-5 flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/simon-expression-pasag-85b1112b7/"
                  target="_blank"
                  class="flex items-center space-x-2 group transition-all duration-300"
                >
                  <i class="fab fa-linkedin fa-lg text-[#F1FAEE]"></i>
                  <span
                    class="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 text-sm text-[#F1FAEE]"
                  >
                    Simon Patrick Pasag
                  </span>
                </a>

                <a
                  href="https://www.facebook.com/simon.pasag.30"
                  target="_blank"
                  class="flex items-center space-x-2 group transition-all duration-300"
                >
                  <i class="fab fa-facebook fa-lg text-[#F1FAEE]"></i>
                  <span
                    class="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 text-sm text-[#F1FAEE]"
                  >
                    Simon Ex Pression Pasag
                  </span>
                </a>

                <a
                  href="https://github.com/SimplyMon"
                  target="_blank"
                  class="flex items-center space-x-2 group transition-all duration-300"
                >
                  <i class="fab fa-github fa-lg text-[#F1FAEE]"></i>
                  <span
                    class="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 text-sm text-[#F1FAEE]"
                  >
                    SimplyMon
                  </span>
                </a>

                <a
                  href="https://discord.com/users/744076933007933520"
                  target="_blank"
                  class="flex items-center space-x-2 group transition-all duration-300"
                >
                  <i class="fab fa-discord fa-lg text-[#F1FAEE]"></i>
                  <span
                    class="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 text-sm text-[#F1FAEE]"
                  >
                    Discord
                  </span>
                </a>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
  <home3 />
  <home1 />
  <home2 />
  <home4 />
  <home5 />

  <button
    v-show="showScrollTop"
    @click="scrollToTop"
    class="fixed bottom-28 md:bottom-6 right-4 md:right-12 p-4 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-[#F1FAEE] shadow-xl hover:scale-110 hover:from-orange-600 hover:to-orange-700 transition transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
    aria-label="Scroll to top"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 15l7-7 7 7"
      />
    </svg>
  </button>
</template>
`
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import home1 from "../sections/home1.vue";
import home2 from "../sections/home2.vue";
import home3 from "../sections/home3.vue";
import home4 from "../sections/home4.vue";
import home5 from "../sections/home5.vue";

import skeletonLoader from "../skeletons/skeletonLoader.vue";

const imageLoaded = ref(false);
const textLoaded = ref(false);

const showScrollTop = ref(false);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function handleScroll() {
  showScrollTop.value = window.scrollY > 300;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function onImageLoad() {
  setTimeout(() => {
    imageLoaded.value = true;
  }, 500);
}

onMounted(() => {
  setTimeout(() => {
    textLoaded.value = true;
  }, 500);
});
</script>

<style scoped>
.fade-slide-enter-active {
  transition: all 0.8s ease-out;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
