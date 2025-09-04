<template>
  <div
    class="skeleton"
    :class="customClass"
    :style="{
      width: width,
      height: height,
      borderRadius: rounded ? '9999px' : radius,
    }"
  ></div>
</template>

<script setup>
defineProps({
  width: { type: String, default: "100%" },
  height: { type: String, default: "1rem" },
  radius: { type: String, default: "0.5rem" }, // default rounded rectangle
  rounded: { type: Boolean, default: false }, // for circle skeletons
  customClass: { type: String, default: "" }, // allow Tailwind overrides
});
</script>

<style scoped>
.skeleton {
  position: relative;
  overflow: hidden;
  background: #1a1a1a;
}
.skeleton::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.08) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  animation: shimmer 1.6s infinite;
}
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>
