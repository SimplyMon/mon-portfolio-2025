<template>
  <section class="bg-[#0D0D0D] text-[#D7EAD9] px-6 py-24 md:py-32">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div
        ref="titleRef"
        :class="[
          'text-center transition-all duration-1000 ease-out',
          isVisible.title
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10',
        ]"
      >
        <div class="group inline-block">
          <h2 class="text-3xl md:text-4xl font-bold cursor-pointer">
            What <span class="text-[#FD6F00]">Clients</span> Say
          </h2>
          <p class="text-[#A6B9A8] mt-3 max-w-xl mx-auto">
            Feedback from the people and teams I've built for.
          </p>
          <div
            class="w-20 h-1 bg-[#FD6F00] rounded mx-auto mt-5 transition-all duration-500 group-hover:w-full"
          ></div>
        </div>
      </div>

      <!-- Carousel -->
      <div
        ref="cardRef"
        role="group"
        aria-roledescription="carousel"
        aria-label="Client testimonials"
        tabindex="0"
        @mouseenter="pause"
        @mouseleave="resume"
        @focusin="pause"
        @focusout="resume"
        @keydown.arrow-left.prevent="go(activeIndex - 1)"
        @keydown.arrow-right.prevent="go(activeIndex + 1)"
        :class="[
          'mt-14 md:mt-16 transition-all duration-1000 ease-out delay-300 outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00]/60 rounded-2xl',
          isVisible.card
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10',
        ]"
      >
        <!-- Quote card -->
        <div
          class="relative bg-[#141414] border border-white/10 rounded-2xl overflow-hidden"
        >
          <!-- accent edge -->
          <div
            class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FD6F00]/60 to-transparent"
          ></div>

          <transition name="quote" mode="out-in">
            <article
              :key="activeIndex"
              class="grid gap-8 md:gap-12 md:grid-cols-[minmax(0,15rem)_1fr] p-7 sm:p-10 md:p-12 md:min-h-[26rem]"
            >
              <!-- Author -->
              <header
                class="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-3 md:border-r md:border-white/10 md:pr-10"
              >
                <img
                  v-if="active.avatar"
                  :src="active.avatar"
                  :alt="`Photo of ${active.name}`"
                  loading="lazy"
                  class="shrink-0 w-16 h-16 rounded-full object-cover border border-[#FD6F00]/30"
                />
                <div
                  v-else
                  class="shrink-0 grid place-items-center w-16 h-16 rounded-full bg-[#FD6F00]/10 border border-[#FD6F00]/30 text-[#FD6F00] font-semibold tracking-wide"
                  aria-hidden="true"
                >
                  {{ initials(active.name) }}
                </div>
                <div class="min-w-0 text-left">
                  <h3
                    class="text-lg font-semibold text-[#D7EAD9] leading-tight"
                  >
                    {{ active.name }}
                  </h3>
                  <p class="text-[#A6B9A8] text-sm mt-1">{{ active.role }}</p>
                  <a
                    v-if="active.website"
                    :href="active.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 mt-3 text-sm text-[#FD6F00] hover:text-orange-400 transition-colors"
                  >
                    {{ active.website }}
                    <i
                      class="fas fa-arrow-up-right-from-square text-[0.7em]"
                    ></i>
                  </a>
                </div>
              </header>

              <!-- Quote -->
              <blockquote class="relative flex flex-col justify-center">
                <span
                  class="absolute -top-6 -left-1 text-7xl leading-none text-[#FD6F00]/20 font-serif select-none"
                  aria-hidden="true"
                  >&ldquo;</span
                >
                <p
                  class="relative whitespace-pre-line text-left text-[#D7EAD9]/90 text-base md:text-lg leading-relaxed md:leading-[1.85] max-w-[68ch]"
                >
                  {{ active.feedback }}
                </p>
              </blockquote>
            </article>
          </transition>
        </div>

        <!-- Controls -->
        <div class="mt-8 flex items-center justify-center gap-5">
          <button
            @click="go(activeIndex - 1)"
            aria-label="Previous testimonial"
            class="w-10 h-10 grid place-items-center rounded-md bg-[#1A1A1A] text-[#A6B9A8] hover:bg-[#333] hover:text-[#D7EAD9] transition-colors duration-300"
          >
            <i class="fas fa-chevron-left"></i>
          </button>

          <!-- Dots -->
          <div class="flex items-center gap-3">
            <button
              v-for="(t, i) in testimonials"
              :key="i"
              @click="go(i)"
              :aria-pressed="i === activeIndex"
              :aria-label="`Show testimonial from ${t.name}`"
              class="w-3 h-3 rounded-full transition-all duration-300"
              :class="
                i === activeIndex
                  ? 'bg-[#FD6F00] scale-110'
                  : 'bg-gray-500 hover:bg-gray-400'
              "
            ></button>
          </div>

          <button
            @click="go(activeIndex + 1)"
            aria-label="Next testimonial"
            class="w-10 h-10 grid place-items-center rounded-md bg-[#1A1A1A] text-[#A6B9A8] hover:bg-[#333] hover:text-[#D7EAD9] transition-colors duration-300"
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>

        <!-- Autoplay progress -->
        <div
          v-if="autoplayEnabled"
          class="mt-6 h-0.5 w-full bg-white/10 rounded-full overflow-hidden"
        >
          <div
            class="h-full bg-[#FD6F00] rounded-full transition-[width] duration-100 ease-linear"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

import jackAvatar from "@/assets/images/testimonials/jack.webp";

const testimonials = [
  {
    feedback: `Working with Mon that created our website was an outstanding experience from start to finish. He took the time to understand our business, our goals, and our vision, then turned those ideas into a professional, modern, and easy-to-navigate website that truly represents our company.

    His communication was excellent throughout the entire process, he was responsive to our requests, and he paid close attention to every detail. The final result exceeded our expectations, and we've received many compliments on the site's appearance and functionality.

    I highly recommend his services to anyone looking for a knowledgeable, reliable, and talented web developer. Thank you for helping bring our vision to life.`,
    name: "Jack Binen",
    role: "CEO, Linkconasia",
    website: "linkconasia.com",
    url: "https://linkconasia.com",
    avatar: jackAvatar,
  },
  {
    feedback: `From our very first conversation, it was clear we were working with someone who cared about the outcome as much as we did. We came in with a rough idea and a lot of half-formed requirements, and those were patiently shaped into a clear plan we actually understood before a single line of code was written.

    The build itself was refreshingly transparent. We saw progress regularly, our feedback was folded in without friction, and nothing was ever hidden behind technical jargon. When we changed direction midway through, the response was practical rather than defensive, and the revised scope was delivered without drama.

    The site we ended up with is quick, clean, and genuinely easy for our staff to maintain. It has held up beautifully since launch, and I would happily work together again on our next project.`,
    name: "Marcus Pelaney",
    role: "Operations Director",
  },
  {
    feedback: `We had been through two developers before this and were bracing ourselves for another difficult experience. It could not have been more different. The discovery process was thorough, the questions asked were the right ones, and for the first time we felt like someone was genuinely interested in how our business actually runs day to day.

    What stood out most was the attention to the small things. Loading speed, how the site behaved on older phones, the wording on our booking form, details we would never have thought to raise were all handled without us having to ask. Deadlines were met exactly as promised, and every update came with a clear explanation of what had changed and why.

    Our enquiries have gone up noticeably since the new site went live, and the admin side is simple enough that our team picked it up in an afternoon. An easy recommendation.`,
    name: "Priya Paghunathan",
    role: "Founder",
  },
  {
    feedback: `Our project was not a simple one. We needed an internal system that tied together several tools we already relied on, and we were sceptical that anyone could make it feel cohesive. The work was approached methodically, mapping out our existing process first rather than pushing us toward a template that would not have fit.

    Communication throughout was excellent. Weekly check-ins were concise and useful, blockers were raised early instead of surfacing as last-minute surprises, and technical trade-offs were explained in terms our non-technical directors could weigh in on. That transparency built a lot of trust.

    The finished system has cut hours of manual work out of our week and has been rock solid since handover. The documentation left behind was thorough enough that onboarding new staff has been straightforward. Genuinely first-rate work.`,
    name: "Yelena Ross",
    role: "Managing Partner, Halden & Reyes",
  },
];

const activeIndex = ref(0);
const active = computed(() => testimonials[activeIndex.value]);

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

// Autoplay — paced for the longest quote, pauses on hover, focus and off-screen
const DURATION = 12000;
const TICK = 60;
const progress = ref(0);
const autoplayEnabled = ref(true);
const isHovered = ref(false);
const inView = ref(false);
const timer = ref(null);

function go(index) {
  const total = testimonials.length;
  activeIndex.value = (index + total) % total;
  progress.value = 0;
}

function tick() {
  if (isHovered.value || !inView.value) return;
  progress.value += (TICK / DURATION) * 100;
  if (progress.value >= 100) go(activeIndex.value + 1);
}

function pause() {
  isHovered.value = true;
}

function resume() {
  isHovered.value = false;
}

// Scroll reveal
const isVisible = ref({ title: false, card: false });
const titleRef = ref(null);
const cardRef = ref(null);
let observer = null;

onMounted(() => {
  autoplayEnabled.value = !window.matchMedia("(prefers-reduced-motion: reduce)")
    .matches;
  if (autoplayEnabled.value) timer.value = setInterval(tick, TICK);

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === titleRef.value && entry.isIntersecting)
          isVisible.value.title = true;
        if (entry.target === cardRef.value) {
          if (entry.isIntersecting) isVisible.value.card = true;
          inView.value = entry.isIntersecting;
        }
      });
    },
    { threshold: 0.2 },
  );

  if (titleRef.value) observer.observe(titleRef.value);
  if (cardRef.value) observer.observe(cardRef.value);
});

onBeforeUnmount(() => {
  clearInterval(timer.value);
  observer?.disconnect();
});
</script>

<style scoped>
.quote-enter-active,
.quote-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}
.quote-enter-from {
  opacity: 0;
  transform: translateY(0.75rem);
}
.quote-leave-to {
  opacity: 0;
  transform: translateY(-0.75rem);
}

@media (prefers-reduced-motion: reduce) {
  .quote-enter-active,
  .quote-leave-active {
    transition: opacity 0.2s ease;
  }
  .quote-enter-from,
  .quote-leave-to {
    transform: none;
  }
}
</style>
