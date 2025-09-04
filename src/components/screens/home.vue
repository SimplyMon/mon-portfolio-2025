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
          class="w-52 sm:w-56 md:w-80 h-52 sm:h-56 md:h-80 rounded-full bg-gray-700 animate-pulse"
        ></div>

        <!-- Real Image -->
        <img
          v-show="imageLoaded"
          src="../../assets/images/hero.png"
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
            class="mx-auto md:mx-0 w-full max-w-md md:max-w-lg h-20 bg-gray-700 rounded animate-pulse"
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
              Front End Developer • Web Designer
            </p>

            <p class="mt-6 max-w-md md:max-w-lg text-[#F1FAEE] mx-auto md:mx-0">
              I create responsive, user-first web interfaces where creativity
              drives results. Focused, fast, and ready to turn ideas into
              experiences. Actively seeking opportunities to build and innovate.
            </p>

            <div class="mt-8 flex flex-col items-center md:items-start">
              <router-link
                to="/case-study"
                class="bg-[#FD6F00] hover:bg-orange-600 px-8 py-3 rounded-lg font-medium transition transform hover:scale-105"
              >
                View Case Studies
              </router-link>

              <!-- Contact Icons -->
              <div class="mt-5 flex space-x-4">
                <!-- LinkedIn -->
                <a
                  href="https://www.linkedin.com/in/yourprofile"
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
                  href="https://www.facebook.com/yourprofile"
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
                  href="https://github.com/yourprofile"
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
                    viewBox="0 0 245 240"
                  >
                    <path
                      d="M104.4 104.3c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1zm36.2 0c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
                    />
                    <path
                      d="M189.5 20H55.5C41.2 20 30 31.2 30 45.5v149c0 14.3 11.2 25.5 25.5 25.5h109l-5-17 12 11 11 10 20 17V45.5c0-14.3-11.2-25.5-25.5-25.5zM72 115s6-8 11-12c21-15 42-14 42-14l3 5c-25 6-35 20-35 20-5 3-11 10-11 10s-4 5-5 10c6 0 11-3 11-3s6-4 12-10c0 0 15-15 35-21l3-5s-21-1-42 14c-5 4-11 12-11 12s-6 8-11 12c-1 0-1 0-1-1zm102 0s-6-8-11-12c-21-15-42-14-42-14l-3 5c25 6 35 20 35 20 5 3 11 10 11 10s4 5 5 10c-6 0-11-3-11-3s-6-4-12-10c0 0-15-15-35-21l-3-5s21-1 42 14c5 4 11 12 11 12s6 8 11 12c1 0 1 0 1-1z"
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
</template>

<script setup>
import { ref, onMounted } from "vue";
import home1 from "../sections/home1.vue";
import skeletonLoader from "../skeletons/skeletonLoader.vue";

const imageLoaded = ref(false);
const textLoaded = ref(false);

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
