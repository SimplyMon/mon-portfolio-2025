<template>
  <section
    class="bg-[#0D0D0D] text-[#F1FAEE] px-4 sm:px-6 pt-28 md:pt-44 pb-20 md:pb-20"
  >
    <div class="max-w-5xl mx-auto">
      <div
        class="flex overflow-x-auto md:overflow-visible md:justify-between gap-4 md:gap-0 text-base md:text-2xl font-bold mb-10 md:mb-16"
      >
        <span
          v-for="(step, i) in steps"
          :key="i"
          @click="currentStep = i"
          class="cursor-pointer transition shrink-0"
          :class="
            currentStep === i
              ? 'text-[#00D8FF]'
              : 'text-gray-500 hover:text-[#00D8FF]'
          "
        >
          {{ step.short }}
        </span>
      </div>

      <h3 class="text-lg md:text-2xl font-semibold mb-6 md:mb-8">
        {{ steps[currentStep].title }}
      </h3>

      <div>
        <template v-if="steps[currentStep].images.mobile">
          <h4 class="text-xl md:text-2xl text-[#00D8FF] font-semibold mb-4">
            Mobile View
          </h4>
          <div
            class="flex flex-wrap justify-start gap-2 md:gap-1.5 md:gap-y-3 mb-8"
          >
            <img
              v-for="(img, i) in steps[currentStep].images.mobile"
              :key="'m-' + i"
              :src="img"
              :alt="steps[currentStep].title + ' mobile ' + (i + 1)"
              class="rounded-lg shadow-lg border border-gray-700 w-[48%] sm:w-auto max-w-[200px] md:max-w-[200px]"
            />
          </div>

          <h4 class="text-xl md:text-2xl text-[#00D8FF] font-semibold mb-4">
            Desktop View
          </h4>
          <div class="flex flex-wrap justify-start gap-2 md:gap-1.5 md:gap-y-3">
            <img
              v-for="(img, i) in steps[currentStep].images.desktop"
              :key="'d-' + i"
              :src="img"
              :alt="steps[currentStep].title + ' desktop ' + (i + 1)"
              class="rounded-lg shadow-lg border border-gray-700 w-full sm:w-auto max-w-full md:max-w-[337px]"
            />
          </div>
        </template>

        <!-- for mobile no desktop -->
        <template v-else>
          <div class="flex flex-wrap justify-start gap-2 md:gap-1.5">
            <img
              v-for="(img, i) in steps[currentStep].images"
              :key="i"
              :src="img"
              :alt="steps[currentStep].title + ' ' + (i + 1)"
              class="rounded-lg shadow-lg border border-gray-700 w-[48%] sm:w-auto max-w-[200px] md:max-w-[200px]"
            />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import wire1 from "@/assets/images/case-study/designs/wire1.svg";
import wire2 from "@/assets/images/case-study/designs/wire2.svg";
import wire3 from "@/assets/images/case-study/designs/wire3.svg";
import wire4 from "@/assets/images/case-study/designs/wire4.svg";
import wire5 from "@/assets/images/case-study/designs/wire5.svg";
import wire6 from "@/assets/images/case-study/designs/wire6.svg";

import low1 from "@/assets/images/case-study/designs/lofi1.svg";
import low2 from "@/assets/images/case-study/designs/lofi2.svg";
import low3 from "@/assets/images/case-study/designs/lofi3.svg";
import low4 from "@/assets/images/case-study/designs/lofi4.svg";
import low5 from "@/assets/images/case-study/designs/lofi5.svg";
import low6 from "@/assets/images/case-study/designs/lofi6.svg";

// High-fidelity
import hiDesktop1 from "@/assets/images/case-study/designs/hifi1.png";
import hiDesktop2 from "@/assets/images/case-study/designs/hifi2.png";
import hiDesktop3 from "@/assets/images/case-study/designs/hifi3.png";
import hiDesktop4 from "@/assets/images/case-study/designs/hifi4.png";
import hiDesktop5 from "@/assets/images/case-study/designs/hifi5.png";
import hiDesktop6 from "@/assets/images/case-study/designs/hifi6.png";
import hiDesktop7 from "@/assets/images/case-study/designs/hifi7.png";

import hiMobile1 from "@/assets/images/case-study/designs/hifi1d.jpg";
import hiMobile2 from "@/assets/images/case-study/designs/hifi2d.jpg";
import hiMobile3 from "@/assets/images/case-study/designs/hifi3d.jpg";
import hiMobile4 from "@/assets/images/case-study/designs/hifi4d.jpg";
import hiMobile5 from "@/assets/images/case-study/designs/hifi5d.jpg";
import hiMobile6 from "@/assets/images/case-study/designs/hifi6d.jpg";
import hiMobile7 from "@/assets/images/case-study/designs/hifi7d.jpg";
import hiMobile8 from "@/assets/images/case-study/designs/hifi8d.jpg";

// Mockups
import mockMobile1 from "@/assets/images/case-study/designs/hifi8d.jpg";
import mockMobile2 from "@/assets/images/case-study/designs/hifi1d.jpg";
import mockMobile3 from "@/assets/images/case-study/designs/hifi3d.jpg";
import mockMobile4 from "@/assets/images/case-study/designs/hifi4d.jpg";
import mockMobile5 from "@/assets/images/case-study/designs/hifi5d.jpg";
import mockMobile6 from "@/assets/images/case-study/designs/hifi6d.jpg";
import mockMobile7 from "@/assets/images/case-study/designs/hifi7d.jpg";

import mockDesktop1 from "@/assets/images/case-study/designs/hifi1.png";
import mockDesktop2 from "@/assets/images/case-study/designs/hifi2.png";
import mockDesktop3 from "@/assets/images/case-study/designs/hifi3.png";
import mockDesktop4 from "@/assets/images/case-study/designs/hifi4.png";
import mockDesktop5 from "@/assets/images/case-study/designs/hifi5.png";
import mockDesktop6 from "@/assets/images/case-study/designs/hifi6.png";
import mockDesktop7 from "@/assets/images/case-study/designs/hifi7.png";

// Reactive state
const currentStep = ref(0);

const steps = ref([
  {
    title: "ock App | Digital Wireframe",
    short: "Wireframe",
    images: [wire1, wire2, wire3, wire4, wire5, wire6],
  },
  {
    title: "Guardian Lock App | Low-Fidelity Prototype",
    short: "Low-Fidelity",
    images: [low1, low2, low3, low4, low5, low6],
  },
  {
    title: "Guardian Lock App | High-Fidelity Design",
    short: "High-Fidelity",
    images: {
      mobile: [
        hiMobile1,
        hiMobile2,
        hiMobile3,
        hiMobile4,
        hiMobile5,
        hiMobile6,
        hiMobile7,
        hiMobile8,
      ],
      desktop: [
        hiDesktop1,
        hiDesktop2,
        hiDesktop3,
        hiDesktop4,
        hiDesktop5,
        hiDesktop6,
        hiDesktop7,
      ],
    },
  },
  {
    title: "Guardian Lock App | Mockups",
    short: "Mockups",
    images: {
      mobile: [
        mockMobile1,
        mockMobile2,
        mockMobile3,
        mockMobile4,
        mockMobile5,
        mockMobile6,
        mockMobile7,
      ],
      desktop: [
        mockDesktop1,
        mockDesktop2,
        mockDesktop3,
        mockDesktop4,
        mockDesktop5,
        mockDesktop6,
        mockDesktop7,
      ],
    },
  },
]);
</script>
