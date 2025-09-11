<template>
  <section
    class="relative bg-[#0D0D0D] text-white min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
  >
    <div
      class="absolute inset-0 -z-20 bg-gradient-to-tr from-[#001F2D] via-[#002B40] to-[#001F2D]"
    ></div>
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute w-96 h-96 bg-[#00D8FF]/20 rounded-full blur-3xl top-20 left-10 animate-pulse-slow"
      ></div>
      <div
        class="absolute w-72 h-72 bg-[#00D8FF]/10 rounded-full blur-3xl bottom-20 right-10 animate-pulse-slow delay-300"
      ></div>
    </div>

    <transition name="fade-slide">
      <div
        v-show="showContent"
        class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10"
      >
        <div class="flex justify-center animate-stagger">
          <img
            src="@/assets/images/case-study/logo1.png"
            alt="Guardian Lock"
            class="w-32 md:w-56"
          />
        </div>

        <div class="text-center md:text-left space-y-4 animate-stagger">
          <h1 class="text-4xl md:text-5xl font-bold text-[#00D8FF]">
            Guardian Lock
          </h1>
          <h2 class="text-xl md:text-2xl font-semibold text-[#00D8FF]">
            A IoT Smart Door Lock Web App Project
          </h2>
          <p
            class="text-sm md:text-base text-[#00D8FF] border-b border-[#00D8FF] inline-block pb-1"
          >
            By: Simon Pasag
          </p>

          <div class="pt-4">
            <button
              class="bg-[#00D8FF] text-black font-medium px-8 py-3 rounded-md hover:bg-[#00c9e6] transition"
              @click="scrollToSection('case1Ref')"
            >
              Let's Get Started
            </button>
          </div>
        </div>
      </div>
    </transition>
  </section>

  <case1Section ref="case1Ref" @go-to="scrollToSection" />
  <case2Section ref="case2Ref" />
  <case3Section ref="case3Ref" />
  <case4Section ref="case4Ref" />
  <case5Section ref="case5Ref" />
  <case6Section ref="case6Ref" @go-to="scrollToSection" />
  <case7Section ref="case7Ref" />
  <case8Section ref="case8Ref" />

  <NotFound />

  <!-- Scroll to Top Button -->
  <transition name="fade">
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-28 md:bottom-6 right-4 md:right-12 p-4 rounded-full bg-[#00D8FF] text-black shadow-lg hover:bg-[#00c9e6] transition z-50"
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import case1Section from "./case1.vue";
import case2Section from "./case2.vue";
import case3Section from "./case3.vue";
import case4Section from "./case4.vue";
import case5Section from "./case5.vue";
import case6Section from "./case6.vue";
import case7Section from "./case7.vue";
import case8Section from "./case8.vue";

import NotFound from "@/components/layout/NotFound.vue";

const showContent = ref(false);
const case1Ref = ref(null);
const case2Ref = ref(null);
const case3Ref = ref(null);
const case4Ref = ref(null);
const case5Ref = ref(null);
const case6Ref = ref(null);
const case7Ref = ref(null);
const case8Ref = ref(null);
const showScrollTop = ref(false);

onMounted(() => {
  setTimeout(() => {
    showContent.value = true;
  }, 300);

  const handleScroll = () => {
    showScrollTop.value = window.scrollY > 200;
  };

  window.addEventListener("scroll", handleScroll);

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});

const scrollToSection = (section) => {
  const target = {
    case1Ref,
    case2Ref,
    case3Ref,
    case4Ref,
    case5Ref,
    case6Ref,
    case7Ref,
    case8Ref,
  }[section];
  if (target?.value?.$el) {
    target.value.$el.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style scoped>
.fade-slide-enter-active {
  transition: all 1.6s cubic-bezier(0.25, 1, 0.5, 1);
}
.fade-slide-leave-active {
  transition: all 0.8s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(50px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.animate-stagger {
  opacity: 0;
  transform: translateY(30px);
  animation: staggerFade 1.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

@keyframes staggerFade {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulseSlow {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
}
.animate-pulse-slow {
  animation: pulseSlow 8s infinite ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
