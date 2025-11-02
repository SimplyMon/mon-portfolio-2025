<template>
  <section class="bg-gray-900 text-[#E8F5E9] py-28">
    <div class="max-w-5xl mx-auto px-6 text-center">
      <h2
        ref="titleRef"
        :class="[
          'text-3xl md:text-5xl font-extrabold tracking-tight mb-8 md:mb-14 transition-all duration-1000 ease-out',
          isVisible.title
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10',
        ]"
      >
        Let’s Create Your Next Digital Experience
      </h2>

      <p
        ref="paraRef"
        :class="[
          'text-[#D7EAD9] text-lg md:text-xl leading-relaxed mb-10 transition-all duration-1000 ease-out delay-200',
          isVisible.para
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10',
        ]"
      >
        I’d love to collaborate and bring your ideas to life. Built with
        clarity, purpose, and performance. <br /><br />
        Together, we can create something that feels effortless yet
        extraordinary. Designed for people who appreciate beauty and
        performance. Let’s connect and build your next experience.
      </p>

      <div
        ref="btnRef"
        :class="[
          'flex flex-wrap justify-center gap-5 mt-10 transition-all duration-1000 ease-out delay-400',
          isVisible.btn
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10',
        ]"
      >
        <!-- Email Button -->
        <div class="relative">
          <button
            @click="toggleTooltip"
            @keydown.enter.prevent="toggleTooltip"
            @keydown.space.prevent="toggleTooltip"
            aria-label="Click to reveal email"
            class="bg-[#FD6F00] text-white font-semibold py-4 w-40 text-center rounded-xl transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-[#FD6F00]"
          >
            Email Me
          </button>

          <span
            v-if="showTooltip"
            class="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-gray-800 text-[#E8F5E9] text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap z-10 border border-gray-700"
          >
            mon.dev005@gmail.com
          </span>
        </div>

        <a
          href="https://www.linkedin.com/in/simon-expression-pasag-85b1112b7/"
          target="_blank"
          aria-label="Visit LinkedIn Profile"
          class="border border-gray-700 hover:border-[#FD6F00] hover:text-[#FD6F00] text-[#E8F5E9] font-semibold py-4 w-40 text-center rounded-xl transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-[#FD6F00]"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/SimplyMon"
          target="_blank"
          aria-label="Visit GitHub Profile"
          class="border border-gray-700 hover:border-[#FD6F00] hover:text-[#FD6F00] text-[#E8F5E9] font-semibold py-4 w-40 text-center rounded-xl transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-[#FD6F00]"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const showTooltip = ref(false);

function toggleTooltip() {
  showTooltip.value = !showTooltip.value;
}

function handleClickOutside(e) {
  if (!e.target.closest("button")) {
    showTooltip.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

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
