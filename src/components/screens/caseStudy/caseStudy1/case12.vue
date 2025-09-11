<template>
  <section class="bg-[#0D0D0D] text-white px-6 py-20 md:py-32">
    <div class="max-w-5xl mx-auto space-y-16">
      <!-- Color Palette -->
      <div>
        <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">
          Design Color Palette
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          <div
            v-for="(color, i) in palette"
            :key="i"
            class="flex flex-col items-center"
          >
            <div
              :style="{ backgroundColor: color.hex }"
              class="w-20 h-20 md:w-28 md:h-28 rounded-xl shadow-lg border border-gray-700"
            ></div>
            <p class="mt-3 font-medium">{{ color.name }}</p>
            <p class="text-sm text-gray-400">{{ color.hex }}</p>
          </div>
        </div>
      </div>

      <!-- Logo Flow -->
      <div>
        <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">
          Logo Flow
        </h2>
        <div
          class="flex flex-col md:flex-row items-center justify-center gap-12"
        >
          <!-- Logo Variations -->
          <div
            v-for="(logo, i) in logos"
            :key="i"
            class="flex flex-col items-center"
          >
            <img
              :src="logo.src"
              :alt="logo.label"
              class="w-28 h-28 md:w-40 md:h-40 object-contain rounded-lg shadow-md bg-white p-4"
            />
            <p class="mt-4 font-medium">{{ logo.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import logoDefault from "@/assets/images/case-study/logo1.png";
import logoHorizontal from "@/assets/images/case-study/logo1.png";
import logoVertical from "@/assets/images/case-study/logo1.png";

export default {
  data() {
    return {
      palette: [
        { name: "Primary Blue", hex: "#00D8FF" },
        { name: "Dark Gray", hex: "#0D0D0D" },
        { name: "Light Gray", hex: "#EAEAEA" },
        { name: "Accent Orange", hex: "#FF7A45" },
        { name: "Pure White", hex: "#FFFFFF" },
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
