<template>
  <section class="bg-[#0D0D0D] text-[#D7EAD9] py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-10">
        <span class="text-[#00D8FF]">Design & Development</span> Process
      </h2>

      <div class="relative" ref="timeline">
        <div
          class="left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full"
        ></div>

        <div
          class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#00D8FF] transition-all duration-500"
          :style="{
            top: firstStepCenter + 'px',
            height: Math.max(0, fillHeight - firstStepCenter) + 'px',
          }"
        ></div>

        <div
          v-for="(step, index) in steps"
          :key="index"
          class="mb-16 flex items-center justify-center text-center"
          :ref="(el) => (stepRefs[index] = el)"
        >
          <div
            class="relative w-full md:w-1/2 p-6 bg-[#1A1A1A] rounded-2xl shadow-lg opacity-0 translate-y-10 transition-all duration-700"
            :class="{ 'opacity-100 translate-y-0': currentStep >= index }"
          >
            <h3 class="text-xl text-[#00D8FF] font-semibold mb-2">
              {{ step.title }}
            </h3>
            <p class="text-gray-300">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";

const currentStep = ref(0);
const fillHeight = ref(0);
const firstStepCenter = ref(0);
const stepRefs = ref([]);

const steps = [
  {
    title: "Wireframes",
    description: "Early sketches of layout and structure.",
  },
  {
    title: "Low-Fidelity Prototype",
    description: "Basic representation of design flow.",
  },
  {
    title: "High-Fidelity Design",
    description: "Polished UI with visual style applied.",
  },
  {
    title: "Mockups",
    description: "Detailed previews of the design before coding.",
  },
  {
    title: "Development",
    description: "Code implementation and testing.",
  },
];

function handleScroll() {
  const trigger = window.innerHeight * 0.75;
  let lastVisible = -1;

  stepRefs.value.forEach((el, i) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) {
      lastVisible = i;
      currentStep.value = i;
    }
  });

  if (lastVisible >= 0) {
    const lastStep = stepRefs.value[lastVisible];
    const lastStepCenter = lastStep.offsetTop + lastStep.offsetHeight / 2;
    fillHeight.value = lastStepCenter;
  }
}

onMounted(async () => {
  await nextTick();
  if (stepRefs.value[0]) {
    firstStepCenter.value =
      stepRefs.value[0].offsetTop + stepRefs.value[0].offsetHeight / 2;
  }
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
