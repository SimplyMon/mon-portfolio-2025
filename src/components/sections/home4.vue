<template>
  <section class="bg-gray-950 text-gray-100 py-28">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <!-- Title -->
      <h2 class="text-4xl font-extrabold tracking-tight mb-10">
        Let’s Create Together
      </h2>

      <!-- Message -->
      <div
        class="bg-gray-900 border border-gray-800 rounded-3xl shadow-2xl p-12 md:p-16 mb-14"
      >
        <ul
          class="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 space-y-3"
        >
          <li>• Collaborating on exciting projects</li>
          <li>• Sharing innovative ideas</li>
          <li>• Exploring new opportunities</li>
        </ul>
        <p class="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
          Feel free to reach out through the links below.
        </p>
        <p class="text-gray-300 text-lg md:text-xl leading-relaxed font-medium">
          I look forward to building something great together.
        </p>
      </div>

      <!-- Contact Links -->
      <div class="flex flex-wrap justify-center gap-5">
        <!-- Email with Tooltip -->
        <div class="relative group" @click="toggleTooltip">
          <!-- <a
            href="mailto:mail@gmail.com"
            class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 w-40 text-center rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Email Me
          </a> -->

          <!-- Tooltip -->
          <span
            class="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-800 text-gray-200 text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
            :class="{ 'opacity-100': showTooltip }"
          >
            mail@gmail.com
          </span>
        </div>

        <a
          href="https://www.linkedin.com/in/simon-expression-pasag-85b1112b7/"
          target="_blank"
          class="border border-gray-700 hover:border-orange-500 hover:text-orange-400 text-gray-300 font-semibold py-4 w-40 text-center rounded-xl transition-transform duration-300 hover:scale-105"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/SimplyMon"
          target="_blank"
          class="border border-gray-700 hover:border-orange-500 hover:text-orange-400 text-gray-300 font-semibold py-4 w-40 text-center rounded-xl transition-transform duration-300 hover:scale-105"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const showTooltip = ref(false);

function toggleTooltip() {
  // For mobile: toggle tooltip on tap
  showTooltip.value = !showTooltip.value;

  // Hide automatically after 2s (optional)
  if (showTooltip.value) {
    setTimeout(() => {
      showTooltip.value = false;
    }, 2000);
  }
}
</script>
