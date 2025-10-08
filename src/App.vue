<template>
  <navbarComponents />
  <router-view />
  <footerComponents />
</template>

<script setup>
import navbarComponents from "./components/layout/navbar.vue";
import footerComponents from "./components/layout/footer.vue";
</script>

<style>
body {
  font-family: "Poppins", sans-serif;
  background-color: #0d0d0d;
}
</style>
