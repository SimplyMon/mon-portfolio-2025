<template>
  <transition name="fade-scale">
    <div
      v-if="show"
      class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4"
    >
      <div
        class="bg-gray-900 text-gray-100 rounded-xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all"
      >
        <div
          class="flex justify-between items-center border-b border-gray-700 px-6 py-4"
        >
          <h3 class="text-lg font-semibold">{{ title }}</h3>
          <button
            @click="closeModal"
            class="text-gray-400 hover:text-[#FD6F00] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div class="px-6 py-4">
          <p class="text-gray-300">{{ message }}</p>
        </div>

        <div class="px-6 py-4 border-t border-gray-700 flex justify-end">
          <button
            @click="closeModal"
            class="px-4 py-2 bg-[#FD6F00] text-gray-900 font-medium rounded-lg hover:bg-[#e65a00] transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  show: Boolean,
  title: { type: String, default: "Notice" },
  message: String,
});

const emit = defineEmits(["update:show"]);

function closeModal() {
  emit("update:show", false);
}
</script>

<style>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.25s ease-out;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
