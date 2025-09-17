<template>
  <section
    class="bg-[#0D0D0D] text-[#F1FAEE] px-6 pt-16 md:pt-32 flex items-center justify-center"
  >
    <div class="max-w-5xl w-full mx-auto text-center mt-20 mb-20 lg:mt-0">
      <div class="group text-center inline-block">
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
          class="w-20 h-1 bg-[#FD6F00] rounded mb-10 lg:mb-16 mx-auto transition-all duration-500 group-hover:w-full"
        ></div>
      </div>

      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
        <!-- Languages -->
        <div
          ref="langRef"
          :class="[
            'transition-all duration-1000 ease-out',
            isVisible.lang
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          ]"
        >
          <h2 class="text-lg font-semibold mb-4">Languages:</h2>
          <div
            class="grid grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-6 justify-items-center"
          >
            <img
              v-for="(lang, i) in languages"
              :key="i"
              :src="lang"
              class="h-12 transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>

        <!-- Frameworks -->
        <div
          ref="fwRef"
          :class="[
            'transition-all duration-1000 ease-out delay-150',
            isVisible.fw
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          ]"
        >
          <h2 class="text-lg font-semibold mb-4">Frameworks:</h2>
          <div
            class="grid grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-6 justify-items-center"
          >
            <img
              v-for="(fw, i) in frameworks"
              :key="i"
              :src="fw"
              class="h-12 transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>

        <!-- Tools -->
        <div
          ref="toolsRef"
          :class="[
            'transition-all duration-1000 ease-out delay-300',
            isVisible.tools
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          ]"
        >
          <h2 class="text-lg font-semibold mb-4">Tools:</h2>
          <div
            class="grid grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-6 justify-items-center"
          >
            <img
              v-for="(tool, i) in tools"
              :key="i"
              :src="tool"
              class="h-12 transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>

        <!-- Databases -->
        <div
          ref="dbRef"
          :class="[
            'transition-all duration-1000 ease-out delay-500',
            isVisible.db
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          ]"
        >
          <h2 class="text-lg font-semibold mb-4">Databases:</h2>
          <div
            class="grid grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-6 justify-items-center"
          >
            <img
              v-for="(db, i) in databases"
              :key="i"
              :src="db"
              class="h-12 transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

// --- Tech logos imports (same as yours) ---
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
import debianLogo from "@/assets/images/tech/debian-plain-wordmark.png";
import linuxLogo from "@/assets/images/tech/linux-original.png";

import firebaseLogo from "@/assets/images/tech/firebase-plain.png";
import mysqlLogo from "@/assets/images/tech/mysql-original-wordmark.png";
import sqlserverLogo from "@/assets/images/tech/microsoftsqlserver-plain-wordmark.png";
import sqlliteLogo from "@/assets/images/tech/sqlite-original-wordmark.png";
import postgresqlLogo from "@/assets/images/tech/postgresql-plain-wordmark.png";
import mongodbLogo from "@/assets/images/tech/mongodb-plain-wordmark.png";

// --- Arrays ---
const languages = ref([
  phpLogo,
  cppLogo,
  javaLogo,
  pythonLogo,
  typescriptLogo,
  jsLogo,
  htmlLogo,
  cssLogo,
]);

const frameworks = ref([
  vueLogo,
  reactLogo,
  jqueryLogo,
  bootstrapLogo,
  tailwindLogo,
  nodejsLogo,
  expressjsLogo,
  laravelLogo,
]);

const tools = ref([
  githubLogo,
  gitLogo,
  vscodeLogo,
  npmLogo,
  figmaLogo,
  photoshopLogo,
  debianLogo,
  linuxLogo,
]);

const databases = ref([
  firebaseLogo,
  mysqlLogo,
  sqlserverLogo,
  sqlliteLogo,
  postgresqlLogo,
  mongodbLogo,
]);

const isVisible = ref({
  title: false,
  lang: false,
  fw: false,
  tools: false,
  db: false,
});

const titleRef = ref(null);
const langRef = ref(null);
const fwRef = ref(null);
const toolsRef = ref(null);
const dbRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.value) isVisible.value.title = true;
          if (entry.target === langRef.value) isVisible.value.lang = true;
          if (entry.target === fwRef.value) isVisible.value.fw = true;
          if (entry.target === toolsRef.value) isVisible.value.tools = true;
          if (entry.target === dbRef.value) isVisible.value.db = true;
        }
      });
    },
    { threshold: 0.2 }
  );

  [titleRef, langRef, fwRef, toolsRef, dbRef].forEach((refEl) => {
    if (refEl.value) observer.observe(refEl.value);
  });
});
</script>
