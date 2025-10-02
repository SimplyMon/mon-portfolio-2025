<template>
  <section
    class="bg-[#0D0D0D] text-[#D7EAD9] px-6 pt-16 pb-16 md:pt-32 flex justify-center"
  >
    <div
      ref="sectionRef"
      :class="[
        'max-w-xl w-full mx-auto text-center mt-16 md:mt-20 mb-16 md:mb-20 transition-all duration-1000 ease-out',
        sectionVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10',
      ]"
    >
      <!-- Title -->
      <div class="group text-center inline-block mb-12">
        <h1
          ref="titleRef"
          :class="[
            'text-4xl font-bold mb-2 cursor-pointer transition-all duration-1000 ease-out',
            isVisible.title
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          ]"
        >
          Tech Stack
        </h1>
        <div
          class="w-20 h-1 bg-[#FD6F00] rounded mx-auto transition-all duration-500 group-hover:w-full"
        ></div>
      </div>

      <div class="flex justify-center mb-8 md:mb-10 gap-4 flex-wrap">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          :class="[
            'px-4 py-2 rounded-md font-medium transition-colors duration-300',
            activeTab === tab
              ? 'bg-[#FD6F00] text-[#0D0D0D]'
              : 'bg-[#1A1A1A] hover:bg-[#333]',
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <transition name="fade" mode="out-in">
        <div
          :key="activeTab"
          class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center"
        >
          <img
            v-for="(item, i) in getActiveItems()"
            :key="i"
            :src="item"
            class="h-12 transition-transform duration-500 hover:scale-110"
          />
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

import phpLogo from "@/assets/images/tech/php-plain.png";
import cppLogo from "@/assets/images/tech/cplusplus-plain.png";
import javaLogo from "@/assets/images/tech/java-original.png";
import pythonLogo from "@/assets/images/tech/python-original.png";
import typescriptLogo from "@/assets/images/tech/typescript-plain.png";
import jsLogo from "@/assets/images/tech/javascript-original.png";
import htmlLogo from "@/assets/images/tech/html5-plain.png";
import cssLogo from "@/assets/images/tech/css3-plain.png";

import vueLogo from "@/assets/images/tech/vuejs-original.png";
import reactLogo from "@/assets/images/tech/react-original.png";
import jqueryLogo from "@/assets/images/tech/jquery-original.png";
import bootstrapLogo from "@/assets/images/tech/bootstrap-original.png";
import tailwindLogo from "@/assets/images/tech/tailwindcss-plain.png";
import nodejsLogo from "@/assets/images/tech/nodejs-original-wordmark.png";
import expressjsLogo from "@/assets/images/tech/express-original-wordmark.png";
import laravelLogo from "@/assets/images/tech/laravel-plain-wordmark.png";

import githubLogo from "@/assets/images/tech/github-original.png";
import gitLogo from "@/assets/images/tech/git-plain.png";
import vscodeLogo from "@/assets/images/tech/vscode-original.png";
import npmLogo from "@/assets/images/tech/npm-original-wordmark.png";
import figmaLogo from "@/assets/images/tech/figma-original.png";
import photoshopLogo from "@/assets/images/tech/photoshop-plain.png";
import dockerLogo from "@/assets/images/tech/docker-plain-wordmark.svg";
import wordpressLogo from "@/assets/images/tech/wordpress-plain.svg";

import firebaseLogo from "@/assets/images/tech/firebase-plain.png";
import mysqlLogo from "@/assets/images/tech/mysql-original-wordmark.png";
import sqlserverLogo from "@/assets/images/tech/microsoftsqlserver-plain-wordmark.png";
import sqlliteLogo from "@/assets/images/tech/sqlite-original-wordmark.png";
import postgresqlLogo from "@/assets/images/tech/postgresql-plain-wordmark.png";
import mongodbLogo from "@/assets/images/tech/mongodb-plain-wordmark.png";

const languages = [
  phpLogo,
  cppLogo,
  javaLogo,
  pythonLogo,
  typescriptLogo,
  jsLogo,
  htmlLogo,
  cssLogo,
];
const frameworks = [
  vueLogo,
  reactLogo,
  jqueryLogo,
  bootstrapLogo,
  tailwindLogo,
  nodejsLogo,
  expressjsLogo,
  laravelLogo,
];
const tools = [
  vscodeLogo,
  githubLogo,
  gitLogo,
  npmLogo,
  figmaLogo,
  photoshopLogo,
  wordpressLogo,
  dockerLogo,
];
const databases = [
  firebaseLogo,
  mysqlLogo,
  sqlserverLogo,
  sqlliteLogo,
  postgresqlLogo,
  mongodbLogo,
];

const tabs = ["Languages", "Frameworks", "Tools", "Databases"];
const activeTab = ref("Languages");

const isVisible = ref({ title: false });
const titleRef = ref(null);

const sectionVisible = ref(false);
const sectionRef = ref(null);

onMounted(() => {
  const titleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) isVisible.value.title = true;
      });
    },
    { threshold: 0.2 }
  );
  if (titleRef.value) titleObserver.observe(titleRef.value);

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) sectionVisible.value = true;
      });
    },
    { threshold: 0.2 }
  );
  if (sectionRef.value) sectionObserver.observe(sectionRef.value);
});

function getActiveItems() {
  switch (activeTab.value) {
    case "Languages":
      return languages;
    case "Frameworks":
      return frameworks;
    case "Tools":
      return tools;
    case "Databases":
      return databases;
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
