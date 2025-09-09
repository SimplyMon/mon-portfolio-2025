<template>
  <section
    class="bg-[#0D0D0D] text-white min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 text-center"
  >
    <!-- Title -->
    <h2 class="text-3xl md:text-5xl font-extrabold text-[#00D8FF] mb-6">
      PROJECT OVERVIEW
    </h2>

    <!-- Sub navigation -->
    <div
      class="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-300 text-lg"
    >
      <span class="flex items-center gap-2">
        The Product <span class="w-px h-6 bg-gray-500"></span>
      </span>
      <span class="flex items-center gap-2">
        The Problem <span class="w-px h-6 bg-gray-500"></span>
      </span>
      <span>The Goal</span>
    </div>
  </section>
  <NotFound />
</template>

<script setup>
import NotFound from "@/components/layout/NotFound.vue";
</script>
