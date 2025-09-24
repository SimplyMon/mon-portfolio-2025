<template>
  <section
    ref="productSection"
    class="bg-[#0D0D0D] min-h-screen flex items-center justify-center px-6 py-20 pb-36 overflow-hidden"
  >
    <transition name="fade-slide">
      <div
        v-show="visible"
        class="max-w-5xl mx-auto flex flex-col items-center gap-12"
      >
        <div class="md:flex-1 space-y-6">
          <h2
            class="text-4xl md:text-5xl text-center font-extrabold text-[#00D8FF]"
          >
            Layout <span class="text-[#D7EAD9]">Ideation</span>
          </h2>
          <p class="text-[#D7EAD9] text-lg text-center leading-relaxed">
            I did a quick ideation exercise to think through how the smart door
            lock could feel simple and natural for people to use. My focus was
            on making everyday actions, like unlocking and locking doors or
            managing who has access through the app, smooth and stress-free. I
            also thought about real-life situations, like letting a guest in,
            checking who came by, or making sure the lock still works securely
            even when the internet or power is down.
          </p>
        </div>
        <div class="flex justify-center relative md:flex-1">
          <img
            src="../../../../assets/images/case-study/ideation.jpg"
            alt="Product Mockup"
            class="w-full max-w-md md:max-w-lg drop-shadow-2xl rounded-2xl"
          />
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
