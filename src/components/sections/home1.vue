<template>
  <section
    class="bg-[#0D0D0D] text-[#F1FAEE] flex items-center justify-center px-6 pt-16"
  >
    <div class="max-w-4xl w-full">
      <h2 class="text-3xl md:text-4xl font-bold text-center">Education</h2>
      <div class="w-16 h-1 bg-[#FD6F00] mx-auto mt-2 mb-12 lg:mb-16"></div>

      <!-- Timeline -->
      <div class="relative">
        <div
          class="absolute left-1/2 top-0 h-full border-l-2 border-gray-700 transform -translate-x-1/2"
        ></div>

        <div
          class="absolute left-1/2 top-0 w-0.5 h-full bg-[#FD6F00] transform -translate-x-1/2 origin-top progress-line"
        ></div>

        <div class="mb-12 md:mb-20 flex justify-end items-center w-full reveal">
          <div class="w-1/2 pr-8 text-right">
            <h3 class="text-lg font-bold">Jesus Reigns Christian College</h3>
            <p class="text-gray-400 text-sm">2022 - 2025</p>
          </div>
          <div class="relative flex flex-col items-center">
            <span
              class="circle z-10 w-6 h-6 rounded-full border-2 border-gray-400 transition-all duration-700"
            ></span>
          </div>
          <div class="w-1/2"></div>
        </div>

        <div
          class="mb-12 md:mb-20 flex justify-start items-center w-full reveal"
        >
          <div class="w-1/2"></div>
          <div class="relative flex flex-col items-center">
            <span
              class="circle z-10 w-6 h-6 rounded-full border-2 border-gray-400 transition-all duration-700"
            ></span>
          </div>
          <div class="w-1/2 pl-8">
            <h3 class="text-lg font-bold">
              Arrellano University Andres Bonifacio Campus
            </h3>
            <p class="text-gray-400 text-sm">2020 - 2022</p>
          </div>
        </div>

        <div class="mb-12 md:mb-20 flex justify-end items-center w-full reveal">
          <div class="w-1/2 pr-8 text-right">
            <h3 class="text-lg font-bold">Antonio C. Esguerra</h3>
            <p class="text-gray-400 text-sm">2016 - 2020</p>
          </div>
          <div class="relative flex flex-col items-center">
            <span
              class="circle z-10 w-6 h-6 rounded-full border-2 border-gray-400 transition-all duration-700"
            ></span>
          </div>
          <div class="w-1/2"></div>
        </div>

        <div
          class="mb-12 md:mb-20 flex justify-start items-center w-full reveal"
        >
          <div class="w-1/2"></div>
          <div class="relative flex flex-col items-center">
            <span
              class="circle z-10 w-6 h-6 rounded-full border-2 border-gray-400 transition-all duration-700"
            ></span>
          </div>
          <div class="w-1/2 pl-8">
            <h3 class="text-lg font-bold">Sitio Tapayan Elementary School</h3>
            <p class="text-gray-400 text-sm">2010 - 2016</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";

const currentProgress = ref(0);
const targetProgress = ref(0);

onMounted(() => {
  const progressLine = document.querySelector(".progress-line");
  const timeline = progressLine.parentElement;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const circle = entry.target.querySelector(".circle");
        if (entry.isIntersecting) {
          circle?.classList.add("bg-[#FD6F00]");
          circle?.classList.remove("bg-black");
        } else {
          circle?.classList.remove("bg-[#FD6F00]");
          circle?.classList.add("bg-black");
        }
      });
    },
    { threshold: 0.4 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  const measureProgress = () => {
    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    targetProgress.value = Math.min(
      Math.max((windowHeight - rect.top) / rect.height, 0),
      1
    );
  };

  const animate = () => {
    currentProgress.value +=
      (targetProgress.value - currentProgress.value) * 0.03;
    progressLine.style.transform = `translateX(-50%) scaleY(${currentProgress.value})`;
    requestAnimationFrame(animate);
  };

  window.addEventListener("scroll", measureProgress);
  window.addEventListener("resize", measureProgress);

  measureProgress();
  animate();
});
</script>
