<template>
  <section
    class="bg-[#0D0D0D] min-h-screen flex items-center justify-center py-20 px-6 md:pt-36 md:pb-60"
  >
    <div class="max-w-5xl w-full mx-auto grid md:grid-cols-2 gap-12">
      <!-- Contact Info -->
      <div class="flex flex-col justify-center space-y-6">
        <h2 class="text-4xl font-bold text-white">Get in Touch</h2>
        <p class="text-gray-300">
          I'm open to questions, collaborations, or job opportunities. Reach out
          and let's create something great together.
        </p>

        <div class="space-y-4">
          <!-- Email -->
          <div class="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-[#FD6F00]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 8V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z"
              />
            </svg>
            <a
              href="mailto:mon.dev005@gmail.com"
              class="text-gray-300 hover:text-[#FD6F00]"
              >mon.dev005@gmail.com</a
            >
          </div>

          <!-- Phone -->
          <div class="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-[#FD6F00]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a2 2 0 011.84 1.26l.72 1.81a2 2 0 01-.45 2.21l-1.27 1.27a11.042 11.042 0 005.34 5.34l1.27-1.27a2 2 0 012.21-.45l1.81.72A2 2 0 0121 17.72V21a2 2 0 01-2 2h-1C7.373 23 1 16.627 1 9V8a2 2 0 012-2h0z"
              />
            </svg>
            <a
              href="tel:+639927199525"
              class="text-gray-300 hover:text-[#FD6F00]"
              >+63 992 719 9525</a
            >
          </div>

          <!-- LinkedIn -->
          <div class="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-[#FD6F00]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.25 11.28h-3v-5.5c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v5.5h-3v-10h3v1.4c.838-1.182 2.3-1.9 3.8-1.9 2.762 0 5 2.238 5 5v5.5z"
              />
            </svg>
            <a
              href="https://www.linkedin.com/in/simon-expression-pasag-85b1112b7/"
              target="_blank"
              class="text-gray-300 hover:text-[#FD6F00]"
              >LinkedIn</a
            >
          </div>

          <!-- GitHub -->
          <div class="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-[#FD6F00]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.304.762-1.604-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.465-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.403c1.02.004 2.045.138 3.003.403 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.803 5.625-5.475 5.921.43.37.823 1.102.823 2.222v3.293c0 .319.218.694.825.576 4.765-1.587 8.2-6.083 8.2-11.385 0-6.627-5.373-12-12-12z"
              />
            </svg>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              class="text-gray-300 hover:text-[#FD6F00]"
              >GitHub</a
            >
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <form
        class="bg-gray-900 shadow-lg rounded-lg p-8 space-y-6"
        @submit.prevent="submitForm"
      >
        <div>
          <label class="block text-gray-200 font-medium mb-2" for="name"
            >Name</label
          >
          <input
            type="text"
            id="name"
            v-model="form.name"
            class="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-[#FD6F00] focus:outline-none"
            required
          />
        </div>
        <div>
          <label class="block text-gray-200 font-medium mb-2" for="email"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="form.email"
            class="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-[#FD6F00] focus:outline-none"
            required
          />
        </div>
        <div>
          <label class="block text-gray-200 font-medium mb-2" for="message"
            >Message</label
          >
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            class="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-[#FD6F00] focus:outline-none"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-[#FD6F00] text-white font-semibold py-3 rounded-lg hover:bg-[#e65a00] transition flex items-center justify-center"
          :disabled="loading"
        >
          <span v-if="!loading">Send Message</span>
          <span v-else class="flex items-center gap-2">
            Sending
            <svg
              class="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
              ></path>
            </svg>
          </span>
        </button>
        <p v-if="success" class="text-green-400 font-medium mt-2">
          Message sent successfully!
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { push, ref as dbRef } from "firebase/database";
import { database } from "../../firebase/firebase";

const form = ref({ name: "", email: "", message: "" });
const loading = ref(false);
const success = ref(false);

async function submitForm() {
  loading.value = true;
  success.value = false;

  try {
    await push(dbRef(database, "contacts"), {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message,
      timestamp: new Date().toISOString(),
    });

    success.value = true;
    form.value.name = "";
    form.value.email = "";
    form.value.message = "";
  } catch (error) {
    console.error("Error sending message:", error);
    alert("Oops! Something went wrong. Please try again.");
  } finally {
    loading.value = false;
  }
}
</script>

<style>
input:focus,
textarea:focus {
  transition: all 0.2s ease-in-out;
}
</style>
