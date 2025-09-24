<template>
  <section class="bg-[#0D0D0D] py-20 pb-36 px-6">
    <div class="max-w-5xl mx-auto relative">
      <h2
        class="text-center text-4xl md:text-5xl font-extrabold text-[#00D8FF] mb-10"
      >
        User <span class="text-[#D7EAD9]">Persona</span>
      </h2>

      <div
        class="overflow-hidden rounded-2xl"
        @touchstart="startTouch"
        @touchmove="moveTouch"
        @touchend="endTouch"
      >
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            class="flex-shrink-0 w-full flex flex-col md:flex-row bg-[#1A1A1A] rounded-2xl shadow-2xl overflow-hidden"
          >
            <div class="w-full md:w-1/3 h-64 md:h-auto">
              <img
                src="../../../../assets/images/case-study/persona1.png"
                alt="Alex Persona"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="w-full md:w-2/3 p-6 md:p-8 text-[#D7EAD9]">
              <h2 class="text-3xl md:text-4xl font-extrabold text-[#00D8FF]">
                Alex
              </h2>
              <p class="text-lg md:text-xl font-semibold mb-4">
                The Tech-Smart Homeowner
              </p>
              <ul
                class="list-disc list-inside space-y-1 text-base md:text-lg mb-4"
              >
                <li><strong>Age:</strong> 38 yrs old</li>
                <li><strong>Occupation:</strong> Software Engineer</li>
                <li><strong>Education:</strong> Computer Science</li>
                <li><strong>Hometown:</strong> Dolores, Taytay Rizal</li>
                <li><strong>Family:</strong> Married with 2 children</li>
              </ul>
              <h3 class="text-xl md:text-2xl font-bold mt-4">Goals</h3>
              <ul class="list-disc list-inside space-y-1 text-base md:text-lg">
                <li>Secure home with advanced, user-friendly technology</li>
                <li>
                  Easily manage access for family, guests, or service personnel
                </li>
                <li>Monitor home remotely and get timely alerts</li>
              </ul>
              <h3 class="text-xl md:text-2xl font-bold mt-4">Frustrations</h3>
              <ul class="list-disc list-inside space-y-1 text-base md:text-lg">
                <li>
                  Existing smart locks aren’t fully integrated or user-friendly
                </li>
                <li>Limited options for flexible access</li>
                <li>Lack of AI-driven predictive alerts</li>
              </ul>
              <p class="mt-4 italic text-base md:text-lg">
                "I want a smart lock that keeps my family safe, lets me control
                access easily, and gives me peace of mind even when I’m away
                from home."
              </p>
              <p class="mt-2 text-base md:text-lg">
                Alex is a tech-savvy homeowner who values security and
                convenience...
              </p>
            </div>
          </div>

          <div
            class="flex-shrink-0 w-full flex flex-col md:flex-row bg-[#1A1A1A] rounded-2xl shadow-2xl overflow-hidden"
          >
            <div class="w-full md:w-1/3 h-64 md:h-auto">
              <img
                src="../../../../assets/images/case-study/persona2.png"
                alt="Maria Persona"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="w-full md:w-2/3 p-6 md:p-8 text-[#D7EAD9]">
              <h2 class="text-3xl md:text-4xl font-extrabold text-[#00D8FF]">
                Maria
              </h2>
              <p class="text-lg md:text-xl font-semibold mb-4">
                The Safety-Conscious Parent
              </p>
              <ul
                class="list-disc list-inside space-y-1 text-base md:text-lg mb-4"
              >
                <li><strong>Age:</strong> 36 yrs old</li>
                <li><strong>Occupation:</strong> Nurse</li>
                <li><strong>Education:</strong> Nursing Degree</li>
                <li><strong>Hometown:</strong> Sta. Ana., Taytay Rizal</li>
                <li><strong>Family:</strong> Married with 2 kids</li>
              </ul>
              <h3 class="text-xl md:text-2xl font-bold mt-4">Goals</h3>
              <ul class="list-disc list-inside space-y-1 text-base md:text-lg">
                <li>Keep home and children safe</li>
                <li>Monitor who enters and leaves the house</li>
                <li>Access alerts and activity logs easily via phone</li>
              </ul>
              <h3 class="text-xl md:text-2xl font-bold mt-4">Frustrations</h3>
              <ul class="list-disc list-inside space-y-1 text-base md:text-lg">
                <li>Current locks don’t provide real-time notifications</li>
                <li>Hard to manage access for caregivers or family members</li>
                <li>Lack of clear instructions or intuitive app interface</li>
              </ul>
              <p class="mt-4 italic text-base md:text-lg">
                "I want to know exactly who’s coming in and out of my home..."
              </p>
              <p class="mt-2 text-base md:text-lg">
                Maria is a safety-conscious parent who prioritizes her family’s
                security...
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-6 space-x-2">
        <span
          v-for="index in totalSlides"
          :key="index"
          @click="currentIndex = index - 1"
          :class="[
            'w-4 h-4 rounded-full cursor-pointer transition-colors duration-300',
            currentIndex === index - 1 ? 'bg-[#00D8FF]' : 'bg-gray-500',
          ]"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const currentIndex = ref(0);
const totalSlides = 2;

let interval = null;
const startAutoSlide = () => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % totalSlides;
  }, 10000);
};
const stopAutoSlide = () => clearInterval(interval);

onMounted(() => startAutoSlide());
onBeforeUnmount(() => stopAutoSlide());

let startX = 0;
let endX = 0;

const startTouch = (e) => {
  stopAutoSlide();
  startX = e.touches[0].clientX;
};

const moveTouch = (e) => {
  endX = e.touches[0].clientX;
};

const endTouch = () => {
  const threshold = 50;
  if (startX - endX > threshold) {
    currentIndex.value = (currentIndex.value + 1) % totalSlides;
  } else if (endX - startX > threshold) {
    currentIndex.value = (currentIndex.value - 1 + totalSlides) % totalSlides;
  }
  startAutoSlide();
};
</script>
