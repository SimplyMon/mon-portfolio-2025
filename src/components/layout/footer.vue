<template>
  <footer class="bg-[#0D0D0D] text-[#F1FAEE] py-10 border-t border-gray-700">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="flex flex-col md:flex-row justify-between items-center md:items-start gap-8"
      >
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left"
        >
          <img
            src="../../assets/images/logo1.png"
            alt="Mon Dev Logo"
            class="h-16 w-16 rounded-full object-cover"
          />
          <div class="flex flex-col">
            <h2 class="text-2xl font-bold text-[#F1FAEE]">MON DEV</h2>
            <p class="text-sm text-[#F1FAEE]">Web Developer • UI/UX Designer</p>
          </div>
        </div>

        <div
          class="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-8 text-center"
        >
          <router-link to="/" class="hover:text-[#FD6F00] transition-colors"
            >Home</router-link
          >
          <router-link
            to="/case-study"
            class="hover:text-[#FD6F00] transition-colors"
            >Case Study</router-link
          >
          <router-link
            to="/resume"
            class="hover:text-[#FD6F00] transition-colors"
            >Resume</router-link
          >
          <router-link
            to="/contacts"
            class="hover:text-[#FD6F00] transition-colors"
            >Contacts</router-link
          >
        </div>

        <div class="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/simon.pasag.30"
            target="_blank"
            class="text-gray-400 hover:text-white transition-colors"
          >
            <i class="fab fa-facebook fa-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/simon-expression-pasag-85b1112b7/"
            target="_blank"
            class="text-gray-400 hover:text-white transition-colors"
          >
            <i class="fab fa-linkedin fa-lg"></i>
          </a>
          <a
            href="https://github.com/SimplyMon"
            target="_blank"
            class="text-gray-400 hover:text-white transition-colors"
          >
            <i class="fab fa-github fa-lg"></i>
          </a>
        </div>
      </div>

      <div
        class="mt-1 mb-14 md:mb-0 md:mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500"
      >
        © 2025 Mon Dev. All rights reserved.
      </div>
    </div>
  </footer>
</template>
