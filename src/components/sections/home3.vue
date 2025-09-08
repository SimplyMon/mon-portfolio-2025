<template>
  <section
    class="bg-[#0D0D0D] text-white min-h-screen flex items-center justify-center px-6 py-16"
  >
    <div class="max-w-4xl w-full">
      <!-- Title -->
      <h2 class="text-3xl md:text-4xl font-bold text-center">Education</h2>
      <div class="w-16 h-1 bg-orange-500 mx-auto mt-2 mb-12 lg:mb-16"></div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Center Line Background -->
        <div
          class="absolute left-1/2 top-0 h-full border-l-2 border-gray-700 transform -translate-x-1/2"
        ></div>

        <!-- Jesus Reigns Christian College -->
        <div class="mb-12 md:mb-20 flex justify-end items-center w-full reveal">
          <div class="w-1/2 pr-8 text-right">
            <h3 class="text-lg font-bold">Jesus Reigns Christian College</h3>
            <p class="text-gray-400 text-sm">2022 - 2025</p>
          </div>
          <div class="relative flex flex-col items-center">
            <span
              class="circle z-10 w-6 h-6 rounded-full border-2 border-orange-500 transition-all duration-700"
            ></span>
            <span
              class="line w-0.5 bg-orange-500 h-0 transition-all duration-700"
            ></span>
          </div>
          <div class="w-1/2"></div>
        </div>

        <!-- Arrellano University -->
        <div
          class="mb-12 md:mb-20 flex justify-start items-center w-full reveal"
        >
          <div class="w-1/2"></div>
          <div class="relative flex flex-col items-center">
            <span
              class="circle z-10 w-6 h-6 rounded-full border-2 border-gray-400 transition-all duration-700"
            ></span>
            <span
              class="line w-0.5 bg-orange-500 h-0 transition-all duration-700"
            ></span>
          </div>
          <div class="w-1/2 pl-8">
            <h3 class="text-lg font-bold">
              Arrellano University Andres Bonifacio Campus
            </h3>
            <p class="text-gray-400 text-sm">2020 - 2022</p>
          </div>
        </div>

        <!-- Antonio C. Esguerra -->
        <div class="mb-12 md:mb-20 flex justify-end items-center w-full reveal">
          <div class="w-1/2 pr-8 text-right">
            <h3 class="text-lg font-bold">Antonio C. Esguerra</h3>
            <p class="text-gray-400 text-sm">2016 - 2020</p>
          </div>
          <div class="relative flex flex-col items-center">
            <span
              class="circle z-10 w-6 h-6 rounded-full border-2 border-orange-500 transition-all duration-700"
            ></span>
            <span
              class="line w-0.5 bg-orange-500 h-0 transition-all duration-700"
            ></span>
          </div>
          <div class="w-1/2"></div>
        </div>

        <!-- Sitio Tapayan Elementary School -->
        <div
          class="mb-12 md:mb-20 flex justify-start items-center w-full reveal"
        >
          <div class="w-1/2"></div>
          <div class="relative flex flex-col items-center">
            <span
              class="circle z-10 w-6 h-6 rounded-full border-2 border-gray-400 transition-all duration-700"
            ></span>
            <span
              class="line w-0.5 bg-orange-500 h-0 transition-all duration-700"
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

<script>
export default {
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const circle = entry.target.querySelector(".circle");
          const line = entry.target.querySelector(".line");

          if (entry.isIntersecting) {
            if (circle) {
              circle.classList.add("bg-orange-500");
              circle.classList.remove("bg-black");
            }
            if (line) {
              line.classList.add("h-24"); // animate down
            }
          } else {
            if (circle) {
              circle.classList.remove("bg-orange-500");
              circle.classList.add("bg-black");
            }
            if (line) {
              line.classList.remove("h-24"); // reset height
              line.classList.add("h-0");
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  },
};
</script>
