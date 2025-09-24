<template>
  <section class="bg-[#0D0D0D] text-[#D7EAD9] px-6 py-20 md:py-32">
    <transition name="fade-slide">
      <div v-show="isVisible" class="max-w-5xl mx-auto space-y-16">
        <!-- Color Palette -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">
            Design Color <span class="text-[#00D8FF]">Palette</span>
          </h2>
          <transition-group
            name="fade-slide-stagger"
            tag="div"
            class="flex flex-wrap justify-center gap-6"
          >
            <div
              v-for="(color, i) in palette"
              :key="i"
              class="flex flex-col items-center"
            >
              <div
                class="w-20 h-20 md:w-28 md:h-28 rounded-xl shadow-lg border border-gray-700 relative overflow-hidden"
              >
                <div
                  v-if="color.transparent"
                  class="absolute inset-0 bg-[linear-gradient(45deg,#ccc_25%,transparent_25%),linear-gradient(-45deg,#ccc_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#ccc_75%),linear-gradient(-45deg,transparent_75%,#ccc_75%)] bg-[length:16px_16px]"
                ></div>
                <div
                  :style="{ backgroundColor: color.hex }"
                  class="absolute inset-0 rounded-xl"
                ></div>
              </div>
              <p class="mt-3 font-medium">{{ color.name }}</p>
              <p class="text-sm text-[#A6B9A8]">{{ color.hex }}</p>
            </div>
          </transition-group>
        </div>

        <!-- Logo Variations -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">
            Logo <span class="text-[#00D8FF]">Variations</span>
          </h2>
          <transition-group
            name="fade-slide-stagger"
            tag="div"
            class="flex flex-col md:flex-row items-center justify-center gap-12"
          >
            <div
              v-for="(logo, i) in logos"
              :key="i"
              class="flex flex-col items-center"
            >
              <img
                :src="logo.src"
                :alt="logo.label"
                class="w-28 h-28 md:w-40 md:h-40 object-contain rounded-lg shadow-md border border-white p-4"
              />
              <p class="mt-4 font-medium">{{ logo.label }}</p>
            </div>
          </transition-group>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import logoDefault from "@/assets/images/case-study/logo.png";
import logoHorizontal from "@/assets/images/case-study/logo-horizontal.png";
import logoVertical from "@/assets/images/case-study/logo-vertical.png";

export default {
  setup() {
    const isVisible = ref(false);

    onMounted(() => {
      setTimeout(() => {
        isVisible.value = true;
      }, 200);
    });

    return { isVisible };
  },
  data() {
    return {
      palette: [
        { name: "White", hex: "#FFFFFF" },
        { name: "Black", hex: "#000000" },
        { name: "Primary Color", hex: "#00D8FF" },
        { name: "Secondary Color", hex: "#CCCCCC" },
        { name: "Red Accent", hex: "#E74C3C" },
        { name: "Green Accent", hex: "#2ECC71" },
        { name: "Orange Accent", hex: "#F39C12" },
      ],
      logos: [
        { label: "Logo", src: logoDefault },
        { label: "Logo Horizontal", src: logoHorizontal },
        { label: "Logo Vertical", src: logoVertical },
      ],
    };
  },
};
</script>

<style scoped>
/* Base fade + slide */
.fade-slide-enter-active {
  transition: all 0.8s ease;
}
.fade-slide-leave-active {
  transition: all 0.5s ease;
  opacity: 0;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered child elements */
.fade-slide-stagger-enter-active {
  transition: all 0.6s ease;
}
.fade-slide-stagger-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.fade-slide-stagger-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-stagger-enter-active {
  transition-delay: 0.1s;
}
.fade-slide-stagger-enter-active:nth-child(1) {
  transition-delay: 0.1s;
}
.fade-slide-stagger-enter-active:nth-child(2) {
  transition-delay: 0.2s;
}
.fade-slide-stagger-enter-active:nth-child(3) {
  transition-delay: 0.3s;
}
.fade-slide-stagger-enter-active:nth-child(4) {
  transition-delay: 0.4s;
}
.fade-slide-stagger-enter-active:nth-child(5) {
  transition-delay: 0.5s;
}
</style>
