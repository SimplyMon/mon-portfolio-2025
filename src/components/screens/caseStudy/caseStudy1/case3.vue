<template>
  <section
    class="bg-[#0D0D0D] text-[#D7EAD9] px-6 py-20 min-h-[70vh] border-t-4 border-b-4 border-[#00D8FF] flex items-center"
  >
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 w-full">
      <div
        ref="card1Ref"
        :class="[
          'flex-1 relative group bg-[#0D0D0D] border border-gray-700 rounded-xl p-6 space-y-4 transform transition-all duration-700 ease-out hover:scale-105 active:scale-95 hover:shadow-xl overflow-hidden',
          card1Visible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12',
        ]"
      >
        <div class="flex items-center gap-3">
          <img
            src="@/assets/images/logo1.png"
            alt="Profile"
            class="w-12 h-12 rounded-full object-cover"
          />
          <h3 class="font-semibold text-lg">Simon Pasag</h3>
        </div>
        <div>
          <h2 class="text-2xl font-bold mb-3">My Role and Responsibilities</h2>
          <ul class="space-y-2 text-[#D7EAD9]">
            <li>• Full-Stack Developer</li>
            <li>• UI/UX Designer</li>
            <li>• Prototype</li>
            <li>• Integration with IoT</li>
          </ul>
        </div>
      </div>

      <div
        ref="card2Ref"
        :class="[
          'flex-1 relative group bg-[#30C1DB] text-[#0D0D0D] rounded-xl p-6 space-y-4 transform transition-all duration-700 ease-out hover:scale-105 active:scale-95 hover:shadow-xl overflow-hidden',
          card2Visible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12',
        ]"
      >
        <h2 class="text-3xl font-extrabold">
          Project <span class="font-light">Duration</span>
        </h2>
        <p><span class="font-bold">Date Approved:</span> August 31, 2024</p>
        <p><span class="font-bold">Research and Planning:</span> 5 months</p>
        <p><span class="font-bold">Design and Development:</span> 1 month</p>
        <p><span class="font-bold">Date Completed:</span> June 23, 2025</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const card1Ref = ref(null);
const card2Ref = ref(null);

const card1Visible = ref(false);
const card2Visible = ref(false);

let observers = [];

onMounted(() => {
  const cards = [
    { el: card1Ref, visible: card1Visible },
    { el: card2Ref, visible: card2Visible },
  ];

  cards.forEach((card) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          card.visible.value = true;
          observer.unobserve(card.el.value);
        }
      },
      { threshold: 0.2 }
    );

    if (card.el.value) observer.observe(card.el.value);
    observers.push(observer);
  });
});

onUnmounted(() => {
  observers.forEach((observer, i) => {
    if (i === 0 && card1Ref.value) observer.unobserve(card1Ref.value);
    if (i === 1 && card2Ref.value) observer.unobserve(card2Ref.value);
  });
});
</script>
