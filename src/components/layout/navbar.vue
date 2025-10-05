<template>
  <nav
    class="fixed w-full z-50 md:bottom-auto md:top-0 transition-all duration-300"
    :class="{
      'py-1 md:py-1.5': isShrunk,
      'py-5 md:py-5': !isShrunk,
    }"
  >
    <div class="max-w-5xl mx-auto flex justify-center px-2 sm:px-4">
      <div
        class="flex flex-nowrap items-center justify-center gap-1.5 sm:gap-3.5 px-1 sm:px-3.5 py-1.5 border-3 border-white/20 rounded-full backdrop-blur-lg shadow-lg whitespace-nowrap transition-all duration-300"
        :class="{
          'gap-1 sm:gap-2': isShrunk,
          'gap-1.5 sm:gap-3.5': !isShrunk,
        }"
      >
        <!-- Left Links -->
        <router-link
          to="/"
          class="flex items-center justify-center text-xs sm:text-base rounded-full transition-all duration-300 flex-shrink-0"
          :class="[
            $route.path === '/'
              ? 'bg-gradient-to-r from-[#FD6F00] to-orange-400 text-[#D7EAD9] shadow-md'
              : 'text-gray-200 hover:text-[#FD6F00]',
            isShrunk
              ? 'h-6 sm:h-8 w-16 sm:w-24 px-1 sm:px-3'
              : 'h-8 sm:h-10 w-16 sm:w-28 px-1 sm:px-5',
          ]"
        >
          Home
        </router-link>

        <router-link
          to="/case-study"
          class="flex items-center justify-center text-xs sm:text-base rounded-full transition-all duration-300 flex-shrink-0"
          :class="[
            $route.path.startsWith('/case-study')
              ? 'bg-gradient-to-r from-[#FD6F00] to-orange-400 text-[#D7EAD9] shadow-md'
              : 'text-gray-200 hover:text-[#FD6F00]',
            isShrunk
              ? 'h-6 sm:h-8 w-16 sm:w-24 px-1 sm:px-3'
              : 'h-8 sm:h-10 w-16 sm:w-28 px-1 sm:px-5',
          ]"
        >
          Case Study
        </router-link>

        <!-- Center Logo -->
        <router-link
          to="/"
          class="flex items-center flex-shrink-0 transition-all duration-300"
        >
          <img
            src="../../assets/images/logo3.png"
            alt="Logo"
            class="object-contain transition-all duration-300 mx-4"
            :class="{
              'w-5 sm:w-7': isShrunk,
              'w-6 sm:w-10': !isShrunk,
            }"
          />
        </router-link>

        <!-- Right Links -->
        <router-link
          to="/resume"
          class="flex items-center justify-center text-xs sm:text-base rounded-full transition-all duration-300 flex-shrink-0"
          :class="[
            $route.path === '/resume'
              ? 'bg-gradient-to-r from-[#FD6F00] to-orange-400 text-[#D7EAD9] shadow-md'
              : 'text-gray-200 hover:text-[#FD6F00]',
            isShrunk
              ? 'h-6 sm:h-8 w-16 sm:w-24 px-1 sm:px-3'
              : 'h-8 sm:h-10 w-16 sm:w-28 px-1 sm:px-5',
          ]"
        >
          Resume
        </router-link>

        <router-link
          to="/contacts"
          class="flex items-center justify-center text-xs sm:text-base rounded-full transition-all duration-300 flex-shrink-0"
          :class="[
            $route.path === '/contacts'
              ? 'bg-gradient-to-r from-[#FD6F00] to-orange-400 text-[#D7EAD9] shadow-md'
              : 'text-gray-200 hover:text-[#FD6F00]',
            isShrunk
              ? 'h-6 sm:h-8 w-16 sm:w-24 px-1 sm:px-3'
              : 'h-8 sm:h-10 w-16 sm:w-28 px-1 sm:px-5',
          ]"
        >
          Contacts
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isShrunk = ref(false);
let lastScroll = 0;

const handleScroll = () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 50) {
    isShrunk.value = true;
  } else if (currentScroll < lastScroll) {
    isShrunk.value = false;
  }

  lastScroll = currentScroll;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
