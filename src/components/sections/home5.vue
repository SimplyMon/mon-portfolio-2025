<template>
  <section class="bg-gray-900 text-[#F1FAEE] py-28">
    <div class="max-w-5xl mx-auto px-6 text-center">
      <!-- Title -->
      <h2
        ref="titleRef"
        :class="[
          'text-4xl md:text-5xl font-extrabold tracking-tight mb-8 transition-all duration-1000 ease-out',
          isVisible.title
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10',
        ]"
      >
        Let’s Create Together
      </h2>

      <!-- Paragraph -->
      <p
        ref="paraRef"
        :class="[
          'text-[#F1FAEE] text-lg md:text-xl leading-relaxed mb-6 transition-all duration-1000 ease-out delay-200',
          isVisible.para
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10',
        ]"
      >
        I look forward to the possibility of collaborating with you in the
        future. Thank you! <br /><br />
        If you have any further questions, collaborations, or opportunities
        you'd like to discuss, I would be delighted to connect with you. Please
        feel free to reach out to me through the following platforms.
      </p>

      <!-- Buttons -->
      <div
        ref="btnRef"
        :class="[
          'flex flex-wrap justify-center gap-5 mt-10 transition-all duration-1000 ease-out delay-400',
          isVisible.btn
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10',
        ]"
      >
        <div class="relative group cursor-pointer" @click="toggleTooltip">
          <span
            class="border border-gray-700 hover:border-[#FD6F00] hover:text-[#FD6F00] text-[#F1FAEE] font-semibold py-4 w-40 inline-block text-center rounded-xl transition-transform duration-300 hover:scale-105"
          >
            Email Me
          </span>
          <span
            class="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-800 text-[#F1FAEE] text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
            :class="{ 'opacity-100': showTooltip }"
          >
            mon.dev005@gmail.com
          </span>
        </div>

        <a
          href="https://www.linkedin.com/in/simon-expression-pasag-85b1112b7/"
          target="_blank"
          class="border border-gray-700 hover:border-[#FD6F00] hover:text-[#FD6F00] text-[#F1FAEE] font-semibold py-4 w-40 text-center rounded-xl transition-transform duration-300 hover:scale-105"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/SimplyMon"
          target="_blank"
          class="border border-gray-700 hover:border-[#FD6F00] hover:text-[#FD6F00] text-[#F1FAEE] font-semibold py-4 w-40 text-center rounded-xl transition-transform duration-300 hover:scale-105"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const showTooltip = ref(false);

function toggleTooltip() {
  showTooltip.value = !showTooltip.value;

  if (showTooltip.value) {
    setTimeout(() => {
      showTooltip.value = false;
    }, 2000);
  }
}

// --- Scroll animation setup ---
const isVisible = ref({ title: false, para: false, btn: false });
const titleRef = ref(null);
const paraRef = ref(null);
const btnRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.value) isVisible.value.title = true;
          if (entry.target === paraRef.value) isVisible.value.para = true;
          if (entry.target === btnRef.value) isVisible.value.btn = true;
        }
      });
    },
    { threshold: 0.2 }
  );

  if (titleRef.value) observer.observe(titleRef.value);
  if (paraRef.value) observer.observe(paraRef.value);
  if (btnRef.value) observer.observe(btnRef.value);
});
</script>
