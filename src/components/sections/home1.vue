<template>
  <section class="bg-[#0D0D0D] text-[#D7EAD9] px-6 py-24 md:py-28">
    <div ref="wrapperRef" class="max-w-6xl mx-auto">
      <div
        class="text-center opacity-0 translate-y-10"
        :class="isVisible ? 'opacity-100 translate-y-0' : ''"
        :style="reveal(0)"
      >
        <div class="group inline-block">
          <h2 class="text-3xl md:text-4xl font-bold cursor-pointer">
            Experience &amp; <span class="text-[#FD6F00]">Education</span>
          </h2>
          <p class="text-[#A6B9A8] mt-3 max-w-xl mx-auto">
            Where I've worked, what I studied, and the training behind it.
          </p>
          <div
            class="w-20 h-1 bg-[#FD6F00] rounded mx-auto mt-5 transition-all duration-500 group-hover:w-full"
          ></div>
        </div>
      </div>

      <div class="mt-14 md:mt-20 grid md:grid-cols-2 gap-12 md:gap-16">
        <!-- Work Experience -->
        <div
          class="opacity-0 translate-y-10"
          :class="isVisible ? 'opacity-100 translate-y-0' : ''"
          :style="reveal(150)"
        >
          <h3 class="flex items-center gap-3 mb-8">
            <span
              class="grid place-items-center w-10 h-10 rounded-lg bg-[#FD6F00]/10 border border-[#FD6F00]/25 text-[#FD6F00]"
            >
              <i class="fas fa-briefcase"></i>
            </span>
            <span
              class="text-xs font-semibold uppercase tracking-[0.2em] text-[#A6B9A8]"
            >
              Work Experience
            </span>
          </h3>

          <ol class="relative border-l border-white/10 space-y-6">
            <li
              v-for="job in experience"
              :key="job.company"
              class="relative pl-8"
            >
              <span
                class="absolute -left-[7px] top-7 w-3.5 h-3.5 rounded-full ring-4 ring-[#0D0D0D]"
                :class="
                  job.current
                    ? 'bg-[#FD6F00]'
                    : 'bg-[#1A1A1A] border-2 border-[#FD6F00]'
                "
                aria-hidden="true"
              ></span>

              <article
                class="bg-[#141414] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-[#FD6F00]/40 hover:-translate-y-1"
              >
                <div
                  class="flex flex-wrap items-start justify-between gap-x-4 gap-y-2"
                >
                  <h4 class="text-lg font-bold text-[#D7EAD9]">
                    {{ job.role }}
                  </h4>
                  <span
                    class="shrink-0 px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap"
                    :class="
                      job.current
                        ? 'bg-[#FD6F00] text-[#0D0D0D]'
                        : 'bg-[#FD6F00]/10 border border-[#FD6F00]/25 text-[#FD6F00]'
                    "
                  >
                    {{ job.period }}
                  </span>
                </div>
                <p class="text-[#A6B9A8] text-sm mt-1.5">{{ job.company }}</p>

                <ul
                  class="mt-4 space-y-3 text-sm md:text-[15px] leading-relaxed text-gray-300"
                >
                  <li
                    v-for="(point, i) in job.points"
                    :key="i"
                    class="flex gap-3"
                  >
                    <i
                      class="fas fa-chevron-right text-[#FD6F00] text-[0.65rem] mt-1.5 shrink-0"
                      aria-hidden="true"
                    ></i>
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </article>
            </li>
          </ol>
        </div>

        <!-- Education -->
        <div
          class="opacity-0 translate-y-10"
          :class="isVisible ? 'opacity-100 translate-y-0' : ''"
          :style="reveal(300)"
        >
          <h3 class="flex items-center gap-3 mb-8">
            <span
              class="grid place-items-center w-10 h-10 rounded-lg bg-[#FD6F00]/10 border border-[#FD6F00]/25 text-[#FD6F00]"
            >
              <i class="fas fa-graduation-cap"></i>
            </span>
            <span
              class="text-xs font-semibold uppercase tracking-[0.2em] text-[#A6B9A8]"
            >
              Education
            </span>
          </h3>

          <ol class="relative border-l border-white/10 space-y-6">
            <!-- Degree -->
            <li class="relative pl-8">
              <span
                class="absolute -left-[7px] top-7 w-3.5 h-3.5 rounded-full bg-[#FD6F00] ring-4 ring-[#0D0D0D]"
                aria-hidden="true"
              ></span>

              <article
                class="bg-[#141414] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-[#FD6F00]/40 hover:-translate-y-1"
              >
                <div
                  class="flex flex-wrap items-start justify-between gap-x-4 gap-y-2"
                >
                  <h4 class="text-lg font-bold text-[#D7EAD9] max-w-[22ch]">
                    BS in Information Technology
                  </h4>
                  <span
                    class="shrink-0 px-2.5 py-1 rounded-md bg-[#FD6F00]/10 border border-[#FD6F00]/25 text-[#FD6F00] text-xs font-medium whitespace-nowrap"
                  >
                    2022 – 2025
                  </span>
                </div>
                <p class="text-[#A6B9A8] text-sm mt-1.5">
                  Jesus Reigns Christian College
                </p>

                <div
                  class="mt-5 pt-5 border-t border-white/10 flex items-baseline gap-2.5"
                >
                  <span class="text-2xl font-bold text-[#FD6F00]">1.86</span>
                  <span
                    class="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[#A6B9A8]"
                  >
                    General Weighted Average
                  </span>
                </div>

                <div class="mt-5">
                  <p
                    class="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[#A6B9A8] mb-3"
                  >
                    Relevant Coursework
                  </p>
                  <ul class="flex flex-wrap gap-2">
                    <li
                      v-for="course in coursework"
                      :key="course"
                      class="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300"
                    >
                      {{ course }}
                    </li>
                  </ul>
                </div>
              </article>
            </li>

            <!-- Certifications -->
            <li class="relative pl-8">
              <span
                class="absolute -left-[7px] top-7 w-3.5 h-3.5 rounded-full bg-[#1A1A1A] border-2 border-[#FD6F00] ring-4 ring-[#0D0D0D]"
                aria-hidden="true"
              ></span>

              <article
                class="bg-[#141414] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-[#FD6F00]/40 hover:-translate-y-1"
              >
                <h4
                  class="flex items-center gap-2.5 text-lg font-bold text-[#D7EAD9]"
                >
                  <i
                    class="fas fa-award text-[#FD6F00] text-base"
                    aria-hidden="true"
                  ></i>
                  Training &amp; Publications
                </h4>

                <ul class="mt-4 space-y-4">
                  <li v-for="item in certifications" :key="item.issuer">
                    <p class="text-sm font-semibold text-[#FD6F00]">
                      {{ item.issuer }}
                    </p>
                    <p
                      class="text-sm md:text-[15px] text-gray-300 leading-relaxed mt-0.5"
                    >
                      {{ item.detail }}
                    </p>
                  </li>
                </ul>
              </article>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Most recent first
const experience = [
  {
    role: "Jr. Web Developer",
    company: "Ensemble Digital Media",
    period: "Dec 2025 – Present",
    current: true,
    points: [
      "Own the build and development of CRM systems for client businesses, from initial setup through ongoing feature work.",
      "Maintain server infrastructure and cPanel configuration across client hosting environments.",
      "Publish blogs and newsletters to existing clients and prospective leads.",
      "Collaborate with other departments on cross-functional projects and deliverables.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "eTaxpoint Software Solutions Corp.",
    period: "Jan – Jun 2025",
    points: [
      "Built POS and kiosk features for customer-facing and staff applications, ensuring seamless user experiences.",
      "Designed and developed intuitive web UIs using modern frameworks, reducing booking complexity and errors.",
      "Gained practical experience in server-side development, focusing on scalability and performance.",
    ],
  },
];

const coursework = [
  "Web Development",
  "Database Management",
  "Network",
  "Software Engineering",
  "Cybersecurity",
];

const certifications = [
  {
    issuer: "IIARL.org",
    detail: "Presented and published a thesis paper",
  },
  {
    issuer: "Design.Ed.ph",
    detail: "Graphic Design Foundation Bootcamp",
  },
  {
    issuer: "UI/UX Oasis",
    detail: "Figma Masterclass",
  },
];

const isVisible = ref(false);
const wrapperRef = ref(null);
let observer = null;

const reveal = (delayMs = 0) => ({
  transitionProperty: "opacity, transform",
  transitionDuration: "700ms",
  transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)",
  transitionDelay: isVisible.value ? `${delayMs}ms` : "0ms",
});

onMounted(() => {
  if (!wrapperRef.value) return;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  observer.observe(wrapperRef.value);
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>
