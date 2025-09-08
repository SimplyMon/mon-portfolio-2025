<!-- this is version1 -->
<template>
  <section
    class="bg-[#0D0D0D] text-[#F1FAEE] px-6 min-h-screen flex items-center justify-center"
  >
    <div
      class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16"
    >
      <!-- Image -->
      <div class="relative flex-shrink-0 flex justify-center md:justify-start">
        <!-- Circle Skeleton -->
        <div
          v-if="!imageLoaded"
          class="w-52 sm:w-56 md:w-80 h-72 sm:h-72 md:h-96 rounded-full bg-gray-700 animate-pulse"
        ></div>

        <!-- Real Image -->
        <img
          v-show="imageLoaded"
          src="../../assets/images/hero1.png"
          alt="Profile"
          class="relative w-52 sm:w-56 md:w-80 h-auto rounded-full object-cover shadow-lg"
          @load="onImageLoad"
        />
      </div>

      <!-- Text -->
      <div class="flex-1 text-center md:text-left space-y-4">
        <!-- Skeleton layout -->
        <div v-if="!textLoaded" class="space-y-4">
          <!-- Name -->
          <div
            class="mx-auto md:mx-0 w-3/4 h-10 bg-gray-700 rounded animate-pulse"
          ></div>
          <!-- Subtitle -->
          <div
            class="mx-auto md:mx-0 w-1/2 h-6 bg-gray-700 rounded animate-pulse"
          ></div>
          <!-- Paragraph -->
          <div
            class="mx-auto md:mx-0 w-full lg:w-96 max-w-md md:max-w-lg h-20 bg-gray-700 rounded animate-pulse"
          ></div>
          <!-- Button -->
          <div
            class="mx-auto md:mx-0 w-40 h-12 bg-gray-700 rounded-lg animate-pulse"
          ></div>
          <!-- Social icons -->
          <div class="flex justify-center md:justify-start space-x-4 pt-4">
            <div class="w-6 h-6 bg-gray-700 rounded-full animate-pulse"></div>
            <div class="w-6 h-6 bg-gray-700 rounded-full animate-pulse"></div>
            <div class="w-6 h-6 bg-gray-700 rounded-full animate-pulse"></div>
            <div class="w-6 h-6 bg-gray-700 rounded-full animate-pulse"></div>
          </div>
        </div>

        <!-- Real text -->
        <transition appear name="fade-slide" mode="out-in">
          <div v-if="textLoaded">
            <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
              Simon Pasag
            </h1>

            <p class="text-base md:text-lg text-gray-400 mt-2">
              Web Developer • UI/UX Designer
            </p>

            <p class="mt-6 max-w-md md:max-w-lg text-[#F1FAEE] mx-auto md:mx-0">
              I create responsive, user-first web interfaces where creativity
              drives results. Focused, fast, and ready to turn ideas into
              experiences. Actively seeking opportunities to build and innovate.
            </p>

            <div class="mt-8 flex flex-col items-center md:items-start">
              <router-link
                to="/case-study"
                class="bg-[#FD6F00] hover:bg-orange-600 px-8 py-3 rounded-md font-medium transition transform hover:scale-105"
              >
                View Case Studies
              </router-link>

              <!-- Contact Icons -->
              <div class="mt-5 flex space-x-4">
                <!-- LinkedIn -->
                <a
                  href="https://www.linkedin.com/in/simon-expression-pasag-85b1112b7/"
                  target="_blank"
                  class="hover:text-[#0A66C2]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 24h4V7h-4v17zm7-17h3.6v2.3h.05c.5-.95 1.73-1.95 3.56-1.95 3.81 0 4.5 2.5 4.5 5.75V24h-4v-6.5c0-1.55-.03-3.55-2.16-3.55-2.16 0-2.49 1.68-2.49 3.42V24h-4V7z"
                    />
                  </svg>
                </a>

                <!-- Facebook -->
                <a
                  href="https://www.facebook.com/simon.pasag.30"
                  target="_blank"
                  class="hover:text-[#1877F2]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.12 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.69c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 17 22 12z"
                    />
                  </svg>
                </a>

                <!-- GitHub -->
                <a
                  href="https://github.com/SimplyMon"
                  target="_blank"
                  class="hover:text-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.757-1.334-1.757-1.09-.746.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.333-5.466-5.933 0-1.31.465-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013-.405c1.02.004 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.628-5.475 5.924.43.37.815 1.1.815 2.22 0 1.605-.015 2.898-.015 3.293 0 .323.21.698.825.58C20.565 22.295 24 17.797 24 12.5 24 5.87 18.627.5 12 .5z"
                    />
                  </svg>
                </a>

                <!-- Discord -->
                <a
                  href="https://discord.com/users/yourprofile"
                  target="_blank"
                  class="hover:text-[#5865F2]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.0371c-1.597.3632-3.285 1.0026-4.8852 1.5152a.0704.0704 0 00-.0321.0277C2.184 9.045 1.2803 13.5799 1.639 18.057c.0016.0135.0093.0263.0199.0346 2.0528 1.5076 4.0413 2.4228 5.9932 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2747-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.0991.246.1971.3729.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0406.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.9618-.6067 3.9503-1.5219 6.0031-3.0294a.077.077 0 00.0208-.0346c.5004-6.1777-.8382-10.6739-3.5485-13.6594a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0942 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0942 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
  <home1 />
  <home2 />
  <home3 />
  <home4 />
  <home5 />

  <!-- Scroll to Top Button -->
  <button
    v-show="showScrollTop"
    @click="scrollToTop"
    class="fixed bottom-28 md:bottom-6 right-4 md:right-12 p-4 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-xl hover:scale-110 hover:from-orange-600 hover:to-orange-700 transition transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
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
