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
            src="../../../../assets/images/case-study/research.svg"
            alt="Product Mockup"
            class="w-full max-w-md md:max-w-lg drop-shadow-2xl"
          />
        </div>

        <div class="md:flex-1/5">
          <p class="text-[#D7EAD9] text-2xl leading-relaxed">User Research:</p>
          <h2 class="text-4xl md:text-5xl font-extrabold mb-6 text-[#00D8FF]">
            Summary
          </h2>
          <p class="text-[#D7EAD9] text-lg leading-relaxed">
            I conducted an unmoderated usability study with participants who own
            or live in homes with smart security systems in the Taytay Rizal
            area. The goal was to understand their habits, preferences, and
            frustrations with existing smart locks. Most participants reported
            difficulty managing multiple users, limited biometric options, and
            slow notifications during security events. The feedback showed that
            users would greatly benefit from a smart lock that is easy to
            manage, integrates multiple authentication methods, and provides
            timely security alerts.
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
