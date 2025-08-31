<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4"
  >
    <h1
      class="text-6xl md:text-8xl font-extrabold mb-4 text-orange-400 animate-wiggle"
    >
      404
    </h1>

    <div class="mb-6">
      <img
        src="../../assets/images/egg1.gif"
        alt="Waiting cartoon"
        class="w-48 h-48 animate-bounce-slow"
      />
    </div>

    <p class="text-xl md:text-2xl mb-6 text-orange-300 text-center">
      This page is currently under
      <span class="font-semibold">work in progress</span>.
    </p>

    <div class="flex space-x-3 mb-6">
      <span class="w-4 h-4 bg-orange-500 rounded-full animate-wait1"></span>
      <span class="w-4 h-4 bg-orange-500 rounded-full animate-wait2"></span>
      <span class="w-4 h-4 bg-orange-500 rounded-full animate-wait3"></span>
    </div>

    <router-link
      to="/"
      class="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition"
    >
      Go Back Home
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
@keyframes wiggle {
  0%,
  100% {
    transform: rotate(-5deg) translateY(0);
  }
  50% {
    transform: rotate(5deg) translateY(-10px);
  }
}
.animate-wiggle {
  display: inline-block;
  animation: wiggle 2s ease-in-out infinite;
}

@keyframes wait1 {
  0%,
  80%,
  100% {
    transform: translateY(0);
    opacity: 0.3;
  }
  40% {
    transform: translateY(-15px);
    opacity: 1;
  }
}
@keyframes wait2 {
  0%,
  80%,
  100% {
    transform: translateY(0);
    opacity: 0.3;
  }
  40% {
    transform: translateY(-15px);
    opacity: 1;
  }
}
@keyframes wait3 {
  0%,
  80%,
  100% {
    transform: translateY(0);
    opacity: 0.3;
  }
  40% {
    transform: translateY(-15px);
    opacity: 1;
  }
}
.animate-wait1 {
  animation: wait1 1.4s infinite ease-in-out;
  animation-delay: 0s;
}
.animate-wait2 {
  animation: wait2 1.4s infinite ease-in-out;
  animation-delay: 0.2s;
}
.animate-wait3 {
  animation: wait3 1.4s infinite ease-in-out;
  animation-delay: 0.4s;
}

@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
.animate-bounce-slow {
  animation: bounce-slow 2.5s ease-in-out infinite;
}
</style>
