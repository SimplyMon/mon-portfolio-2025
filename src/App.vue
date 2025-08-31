<template>
  <navbarComponents />
  <router-view />
  <footerComponents />
</template>

<script setup>
import navbarComponents from "./components/layout/navbar.vue";
import footerComponents from "./components/layout/footer.vue";
</script>
