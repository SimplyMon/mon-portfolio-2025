<template>
  <footer class="bg-gray-900 text-gray-300 py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Top Section -->
      <div
        class="flex flex-col md:flex-row justify-between items-center md:items-start gap-6"
      >
        <!-- Logo / Brand -->
        <div class="text-center md:text-left">
          <h2 class="text-xl font-bold text-white">MON DEV</h2>
          <p class="mt-2 text-sm text-gray-400">Building awesome web apps 🚀</p>
        </div>

        <!-- Navigation Links -->
        <div class="flex space-x-6">
          <a href="#" class="hover:text-white">Home</a>
          <router-link to="/about">
            <a href="#" class="hover:text-white">About</a>
          </router-link>
          <a href="#" class="hover:text-white">Services</a>
          <a href="#" class="hover:text-white">Contact</a>
        </div>

        <!-- Social Icons -->
        <div class="flex space-x-4">
          <a href="#" class="hover:text-white">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="hover:text-white">
            <i class="fab fa-github"></i>
          </a>
          <a href="#" class="hover:text-white">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <!-- Bottom Section -->
      <div
        class="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-500"
      >
        © 2025 Mon Dev. All rights reserved.
      </div>
    </div>
  </footer>
</template>
