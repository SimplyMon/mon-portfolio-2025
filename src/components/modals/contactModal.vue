<template>
  <transition name="fade">
    <div
      v-if="show"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        class="bg-gray-800 text-gray-200 p-6 rounded-lg max-w-sm w-full shadow-lg"
      >
        <h3 class="text-lg font-bold mb-2">{{ title }}</h3>
        <p>{{ message }}</p>
        <div class="mt-4 flex justify-end">
          <button
            class="px-4 py-2 bg-[#FD6F00] text-[#0D0D0D] rounded hover:bg-[#e65a00]"
            @click="closeModal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, ref, watch } from "vue";

const props = defineProps({
  show: Boolean,
  title: { type: String, default: "Error" },
  message: String,
});

const emit = defineEmits(["update:show"]);

function closeModal() {
  emit("update:show", false);
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
