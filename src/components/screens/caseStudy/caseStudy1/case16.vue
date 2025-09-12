<template>
  <section class="bg-[#0D0D0D] text-[#00D8FF] py-36">
    <div class="max-w-5xl mx-auto px-6 text-center">
      <div class="relative w-32 h-32 mx-auto mb-6">
        <div
          class="absolute inset-0 bg-[#00D8FF] rounded-full blur-xl scale-125 z-0"
        ></div>
        <img
          src="../../../../assets/images/logo1.png"
          alt="Jimwell Manlusoc"
          class="relative z-10 w-32 h-32 rounded-full object-cover border-2 border-gray-800"
        />
      </div>

      <!-- Name -->
      <h2 class="text-3xl md:text-4xl font-extrabold mb-2">Simon Pasag</h2>

      <!-- Subtitle -->
      <p class="text-gray-400 mb-6">
        Web Developer | UI/UX Designer | Web Designer
      </p>

      <!-- Message -->
      <p class="text-gray-300 text-base leading-relaxed mb-10 md:w-2/3 mx-auto">
        Thank you for your time reviewing my work on Guardian Lock's App! If
        you’d like to see more or would like to get in touch, my contact
        information is provided below. Thank you!
      </p>

      <!-- Buttons -->
      <div class="flex flex-wrap justify-center gap-5">
        <button
          @click="toggleTooltip"
          class="bg-[#00D8FF] hover:bg-opacity-90 text-black font-semibold py-3 px-6 rounded-md transition-transform duration-300 hover:scale-105 relative group"
        >
          Email Account
          <span
            class="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-[#00D8FF] text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
            :class="{ 'opacity-100': showTooltip }"
          >
            mon.dev005@gmail.com
          </span>
        </button>

        <a
          href="https://www.linkedin.com/in/simon-expression-pasag-85b1112b7/"
          target="_blank"
          class="bg-[#00D8FF] hover:bg-opacity-90 text-black font-semibold py-3 px-6 rounded-md transition-transform duration-300 hover:scale-105"
        >
          LinkedIn Account
        </a>

        <a
          href="/contacts"
          class="bg-[#00D8FF] hover:bg-opacity-90 text-black font-semibold py-3 px-6 rounded-md transition-transform duration-300 hover:scale-105"
        >
          Contacts
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const showTooltip = ref(false);

function toggleTooltip() {
  showTooltip.value = !showTooltip.value;

  if (showTooltip.value) {
    setTimeout(() => {
      showTooltip.value = false;
    }, 2000);
  }
}
</script>
