<template>
  <section
    ref="productSection"
    class="bg-[#0D0D0D] min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
  >
    <transition name="fade-slide">
      <div
        v-show="visible"
        class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12"
      >
        <div class="flex justify-center relative md:flex-1">
          <img
            src="../../../../assets/images/case-study/problem.svg"
            alt="Product Mockup"
            class="w-full max-w-md md:max-w-lg drop-shadow-2xl"
          />
        </div>

        <div class="md:flex-1 space-y-6">
          <h2 class="text-4xl md:text-5xl font-extrabold text-[#00D8FF]">
            The Problem
          </h2>
          <p class="text-[#D7EAD9] text-lg leading-relaxed">
            Existing smart locks often fall short because they aren’t fully
            user-friendly or integrated, making them harder to manage. They
            typically lack flexible access control for different users, offer
            limited biometric features such as facial recognition or
            multi-factor authentication, and don’t always provide timely alerts
            for break-in attempts. While missing AI capabilities that can
            predict maintenance issues and flag suspicious activity, keeping
            homeowners less secure than they should be.
          </p>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const productSection = ref(null);
const visible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visible.value = true;
          observer.disconnect();
        }
      });
    },
    { threshold: 0.2 }
  );
  if (productSection.value) observer.observe(productSection.value);
});
</script>

<style scoped>
.fade-slide-enter-active {
  transition: all 3s cubic-bezier(0.25, 1, 0.5, 1);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(50px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
