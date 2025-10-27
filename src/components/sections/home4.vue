<template>
  <section class="bg-[#0D0D0D] text-[#D7EAD9] py-16">
    <div class="max-w-5xl mx-auto text-center px-6">
      <!-- Title -->
      <h2
        ref="titleRef"
        :class="[
          'text-3xl md:text-4xl font-bold mb-12 transition-all duration-1000 ease-out',
          isVisible.title
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10',
        ]"
      >
        What <span class="text-[#FD6F00]">Clients</span> Say
      </h2>

      <!-- Slider -->
      <div
        ref="sliderRef"
        :class="[
          'overflow-hidden relative transition-all duration-1000 ease-out delay-300',
          isVisible.slider
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10',
        ]"
      >
        <div
          class="flex transition-transform duration-700 ease-in-out"
          :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
        >
          <div
            v-for="(t, index) in testimonials"
            :key="index"
            class="min-w-full px-6"
          >
            <div
              class="bg-gray-900 rounded-lg shadow-lg p-8 md:p-10 max-w-3xl mx-auto"
            >
              <p class="text-lg md:text-xl text-gray-300 italic mb-6">
                "{{ t.feedback }}"
              </p>
              <h3 class="text-xl font-semibold text-[#FD6F00]">
                {{ t.name }}
              </h3>
              <p class="text-[#A6B9A8] text-sm">{{ t.role }}</p>
            </div>
          </div>
        </div>

        <!-- Dots -->
        <div class="flex justify-center mt-6 space-x-3">
          <button
            v-for="(dot, i) in testimonials"
            :key="i"
            @click="goTo(i)"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="
              i === activeIndex ? 'bg-[#FD6F00] scale-110' : 'bg-gray-500'
            "
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const activeIndex = ref(0);
const interval = ref(null);

const testimonials = [
  {
    feedback:
      "Working with Simon was smooth and professional. He built our project fast and exceeded expectations.",
    name: "Kamal, Hussain",
    role: "Owner, Lamesa Inasal Restaurant",
  },
  {
    feedback:
      "Simon’s attention to detail and clean design made our product stand out. Highly recommend him.",
    name: "Santos, Jonathan",
    role: "Information Tech, Student",
  },
  {
    feedback:
      "A reliable developer who communicates well and delivers on time. Our website runs flawlessly.",
    name: "Pagaturo, Cath",
    role: "QA Engineer",
  },
];

function startAutoPlay() {
  interval.value = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % testimonials.length;
  }, 4000);
}

function goTo(index) {
  activeIndex.value = index;
  clearInterval(interval.value);
  startAutoPlay();
}

// Scroll animations
const isVisible = ref({ title: false, slider: false });
const titleRef = ref(null);
const sliderRef = ref(null);

onMounted(() => {
  startAutoPlay();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.value) isVisible.value.title = true;
          if (entry.target === sliderRef.value) isVisible.value.slider = true;
        }
      });
    },
    { threshold: 0.2 }
  );

  if (titleRef.value) observer.observe(titleRef.value);
  if (sliderRef.value) observer.observe(sliderRef.value);
});

onBeforeUnmount(() => {
  clearInterval(interval.value);
});
</script>
