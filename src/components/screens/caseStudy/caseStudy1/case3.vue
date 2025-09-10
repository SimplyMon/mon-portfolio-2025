<template>
  <section
    class="bg-[#0D0D0D] text-[#F1FAEE] px-6 py-20 min-h-[70vh] border-t-4 border-b-4 border-[#00D8FF] flex items-center"
  >
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 w-full">
      <div
        class="flex-1 relative group bg-[#0D0D0D] border border-gray-700 rounded-xl p-6 space-y-4 transition-transform duration-300 ease-out transform hover:scale-105 active:scale-95 hover:shadow-xl overflow-hidden"
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
          <ul class="space-y-2 text-[#F1FAEE]">
            <li>• Full-Stack Developer</li>
            <li>• UI/UX Designer</li>
            <li>• Prototype</li>
            <li>• Integration with IoT</li>
          </ul>
        </div>
      </div>

      <div
        class="flex-1 relative group bg-[#30C1DB] text-[#0D0D0D] rounded-xl p-6 space-y-4 transition-transform duration-300 ease-out transform hover:scale-105 active:scale-95 hover:shadow-xl overflow-hidden"
      >
        <h2 class="text-3xl font-extrabold">
          Project <span class="font-light">Duration</span>
        </h2>
        <p><span class="font-bold">Date Approved:</span> August 31, 2024</p>

        <p><span class="font-bold">Research and Planning:</span> 5 months</p>
        <p>
          <span class="font-bold">Design and Development:</span>
          1 month
        </p>
        <p><span class="font-bold">Date Completed:</span> June 23, 2025</p>
      </div>
    </div>
  </section>
</template>
