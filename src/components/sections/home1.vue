<template>
  <section class="bg-[#0D0D0D] text-[#D7EAD9] px-6 py-16">
    <div
      ref="wrapperRef"
      class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-stretch"
    >
      <!-- Work Experience -->
      <div
        :class="[
          'opacity-0 translate-y-10',
          isVisible ? 'opacity-100 translate-y-0' : '',
        ]"
        :style="colStyle(0)"
        aria-hidden="false"
        class="flex flex-col"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Work Experience
        </h2>

        <div class="flex-1">
          <div
            class="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl h-full"
          >
            <h3 class="text-lg font-bold">Full-Stack Developer</h3>
            <p class="text-[#A6B9A8] text-sm mt-1">January – June 2025</p>
            <p
              class="mt-5 text-sm md:text-[16px] text-gray-300 leading-relaxed"
            >
              Developed
              <span class="text-[#FD6F00]">POS and kiosk features</span>
              used daily by staff and customers. Improved stability by debugging
              and optimizing the codebase. Designed intuitive web UIs that
              reduced booking time and transaction errors. Gaining experience in
              server side Development
            </p>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div
        :class="[
          'opacity-0 translate-y-10',
          isVisible ? 'opacity-100 translate-y-0' : '',
        ]"
        :style="colStyle(150)"
        aria-hidden="false"
        class="flex flex-col"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Education
        </h2>

        <div class="flex-1">
          <div
            class="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl h-full"
          >
            <h3 class="text-lg font-bold">
              Bachelor of Science in Information Technology
            </h3>
            <p class="text-[#A6B9A8] text-sm mt-1">
              Jesus Reigns Christian College
            </p>
            <p class="text-[#A6B9A8] text-sm">2022 – 2025</p>
            <p class="text-gray-300 text-sm md:text-[16px] mt-2">
              <span class="text-[#FD6F00]">GWA</span> 1.86
            </p>
            <p class="text-gray-300 text-sm md:text-[16px] mt-2">
              <span class="text-[#FD6F00]">IIARL.org:</span> Presented and
              published a Thesis paper
            </p>
            <p class="text-gray-300 text-sm md:text-[16px] mt-2">
              <span class="text-[#FD6F00]">Design.Ed.ph:</span> Graphic Design
              Foundation Bootcamp
            </p>
            <p class="text-gray-300 text-sm md:text-[16px] mt-2">
              <span class="text-[#FD6F00]">UI/UX Oasis:</span> Figma Masterclass
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);
const wrapperRef = ref(null);
let observer = null;

const colStyle = (delayMs = 0) => {
  return {
    transitionProperty: "opacity, transform",
    transitionDuration: "700ms",
    transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    transitionDelay: isVisible.value ? `${delayMs}ms` : "0ms",
  };
};

onMounted(() => {
  if (!wrapperRef.value) return;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  observer.observe(wrapperRef.value);
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>
