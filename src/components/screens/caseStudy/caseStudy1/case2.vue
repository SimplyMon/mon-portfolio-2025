<template>
  <section
    ref="productSection"
    class="bg-[#0D0D0D] text-white min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
  >
    <transition name="fade-slide">
      <div
        v-show="visible"
        class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <div class="space-y-6">
          <h2 class="text-4xl md:text-5xl font-extrabold text-[#00D8FF]">
            The Product
          </h2>
          <p class="text-gray-300 text-lg leading-relaxed">
            A smart door lock platform built with a web dashboard and mobile UI
            interface. The system allows users to manage access, monitor
            activity, and control locks remotely in real time. Designed for
            security and ease of use, it combines modern UI with reliable
            functionality.
          </p>
          <a
            href="https://guardian-lock.vercel.app/"
            target="_blank"
            class="inline-block bg-[#00D8FF] text-black font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-[#00c9e6] transition"
          >
            View Live Site
          </a>
        </div>

        <div class="flex justify-center relative">
          <img
            src="../../../../assets/images/case-study/product.png"
            alt="Product Mockup"
            class="w-full max-w-md md:max-w-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

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

onUnmounted(() => {});
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
