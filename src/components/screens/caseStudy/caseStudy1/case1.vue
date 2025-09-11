<template>
  <section
    class="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden bg-cover bg-center"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="absolute inset-0 bg-black/60"></div>
    <div
      class="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0D0D0D]/100 to-transparent"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0D0D0D]/100 to-transparent"
    ></div>

    <div
      ref="contentRef"
      :class="[
        'max-w-5xl mx-auto relative z-10 transition-all duration-800',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
      ]"
    >
      <h2 class="text-3xl md:text-7xl font-extrabold text-[#00D8FF] mb-10">
        <span class="stroke-text">Project </span>Overview
      </h2>

      <div
        class="flex flex-wrap justify-center items-center gap-6 text-[#F1FAEE] text-lg font-medium"
      >
        <span
          class="relative group px-4 cursor-pointer transition transform hover:scale-110 hover:text-[#00D8FF]"
          @click="$emit('go-to', 'case2Ref')"
        >
          The Product
          <span
            class="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#00D8FF] transition-all duration-300 group-hover:w-full"
          ></span>
        </span>

        <div class="w-1 h-10 bg-[#00D8FF] hidden md:block"></div>

        <span
          class="relative group px-4 cursor-pointer transition transform hover:scale-110 hover:text-[#00D8FF]"
          @click="$emit('go-to', 'case4Ref')"
        >
          The Problem
          <span
            class="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#00D8FF] transition-all duration-300 group-hover:w-full"
          ></span>
        </span>

        <div class="w-1 h-10 bg-[#00D8FF] hidden md:block"></div>

        <span
          class="relative group px-4 cursor-pointer transition transform hover:scale-110 hover:text-[#00D8FF]"
          @click="$emit('go-to', 'case5Ref')"
        >
          The Goal
          <span
            class="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#00D8FF] transition-all duration-300 group-hover:w-full"
          ></span>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import bgImage from "@/assets/images/case-study/we.webp";

defineEmits(["go-to"]);

const contentRef = ref(null);
const isVisible = ref(false);

let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.unobserve(contentRef.value);
      }
    },
    { threshold: 0.2 }
  );

  if (contentRef.value) observer.observe(contentRef.value);
});

onBeforeUnmount(() => {
  if (observer && contentRef.value) observer.unobserve(contentRef.value);
});
</script>

<style scoped>
.stroke-text {
  -webkit-text-stroke: 2px #00d8ff;
  color: transparent;
}

.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

.translate-y-12 {
  transform: translateY(3rem);
}

.translate-y-0 {
  transform: translateY(0);
}

.transition-all {
  transition: all 0.8s ease;
}
</style>
