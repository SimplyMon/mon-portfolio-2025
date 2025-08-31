<template>
  <nav class="fixed w-full z-50 bottom-8 md:bottom-auto md:top-0">
    <div
      class="max-w-6xl mx-auto flex justify-center pt-2 md:pt-5 px-2 sm:px-4"
    >
      <div
        class="flex flex-nowrap items-center justify-center gap-1.5 sm:gap-3.5 px-1 sm:px-3.5 py-1.5 border-3 border-white/20 rounded-full backdrop-blur-lg shadow-lg whitespace-nowrap"
      >
        <!-- Left Links -->
        <router-link
          to="/"
          class="flex items-center justify-center h-8 sm:h-10 px-1 sm:px-5 text-xs sm:text-base rounded-full transition duration-300 flex-shrink-0 w-16 sm:w-28"
          :class="
            $route.path === '/'
              ? 'bg-gradient-to-r from-[#FD6F00] to-orange-400 text-white shadow-md'
              : 'text-gray-200 hover:text-[#FD6F00]'
          "
        >
          Home
        </router-link>

        <router-link
          to="/case-study"
          class="flex items-center justify-center h-8 sm:h-10 px-1 sm:px-5 text-xs sm:text-base rounded-full transition duration-300 flex-shrink-0 w-16 sm:w-28"
          :class="
            $route.path === '/case-study'
              ? 'bg-gradient-to-r from-[#FD6F00] to-orange-400 text-white shadow-md'
              : 'text-gray-200 hover:text-[#FD6F00]'
          "
        >
          Case Study
        </router-link>

        <!-- Center Logo -->
        <router-link
          to="/"
          class="flex items-center px-1 sm:px-4 flex-shrink-0"
        >
          <img
            src="../../assets/images/logo.png"
            alt="Logo"
            class="w-6 sm:w-20 object-contain"
          />
        </router-link>

        <!-- Right Links -->
        <router-link
          to="/resume"
          class="flex items-center justify-center h-8 sm:h-10 px-1 sm:px-5 text-xs sm:text-base rounded-full transition duration-300 flex-shrink-0 w-16 sm:w-28"
          :class="
            $route.path === '/resume'
              ? 'bg-gradient-to-r from-[#FD6F00] to-orange-400 text-white shadow-md'
              : 'text-gray-200 hover:text-[#FD6F00]'
          "
        >
          Resume
        </router-link>

        <router-link
          to="/contacts"
          class="flex items-center justify-center h-8 sm:h-10 px-1 sm:px-5 text-xs sm:text-base rounded-full transition duration-300 flex-shrink-0 w-16 sm:w-28"
          :class="
            $route.path === '/contacts'
              ? 'bg-gradient-to-r from-[#FD6F00] to-orange-400 text-white shadow-md'
              : 'text-gray-200 hover:text-[#FD6F00]'
          "
        >
          Contacts
        </router-link>
      </div>
    </div>
  </nav>
</template>
