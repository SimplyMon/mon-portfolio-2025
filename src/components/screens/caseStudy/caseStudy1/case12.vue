<template>
  <section class="bg-[#0D0D0D] text-[#F1FAEE] px-6 py-20 md:py-32">
    <div class="max-w-5xl mx-auto space-y-16">
      <div>
        <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">
          Design Color <span class="text-[#00D8FF]">Palette</span>
        </h2>
        <div class="flex flex-wrap justify-center gap-6">
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
            <p class="text-sm text-gray-400">{{ color.hex }}</p>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">
          Logo <span class="text-[#00D8FF]">Variations</span>
        </h2>
        <div
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import logoDefault from "@/assets/images/case-study/logo.png";
import logoHorizontal from "@/assets/images/case-study/logo-horizontal.png";
import logoVertical from "@/assets/images/case-study/logo-vertical.png";

export default {
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
