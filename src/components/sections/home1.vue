<template>
  <section
    class="bg-[#0D0D0D] text-white px-6 min-h-screen flex items-center justify-center"
  >
    <div class="max-w-5xl w-full mx-auto text-center mt-20 mb-20 lg:mt-0">
      <!-- Title -->
      <h1 class="text-4xl font-bold mb-2">Tech Stack</h1>
      <div class="w-20 h-1 bg-orange-500 rounded mb-10 mx-auto"></div>

      <!-- Grid -->
      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
        <!-- Languages -->
        <div>
          <h2 class="text-lg font-semibold mb-4">Languages:</h2>
          <div
            class="grid grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-6 justify-items-center"
          >
            <img
              v-for="(lang, i) in languages"
              :key="i"
              :src="lang"
              class="h-12"
            />
          </div>
        </div>

        <!-- Frameworks -->
        <div>
          <h2 class="text-lg font-semibold mb-4">Frameworks:</h2>
          <div
            class="grid grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-6 justify-items-center"
          >
            <img
              v-for="(fw, i) in frameworks"
              :key="i"
              :src="fw"
              class="h-12"
            />
          </div>
        </div>

        <!-- Tools -->
        <div>
          <h2 class="text-lg font-semibold mb-4">Tools:</h2>
          <div
            class="grid grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-6 justify-items-center"
          >
            <img v-for="(tool, i) in tools" :key="i" :src="tool" class="h-12" />
          </div>
        </div>

        <!-- Databases -->
        <div>
          <h2 class="text-lg font-semibold mb-4">Databases:</h2>
          <div
            class="grid grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-6 justify-items-center"
          >
            <img v-for="(db, i) in databases" :key="i" :src="db" class="h-12" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// languages
import phpLogo from "@/assets/images/tech/php-plain.png";
import cppLogo from "@/assets/images/tech/cplusplus-plain.png";
import javaLogo from "@/assets/images/tech/java-original.png";
import pythonLogo from "@/assets/images/tech/python-original.png";
import csharpLogo from "@/assets/images/tech/csharp-plain.png";
import jsLogo from "@/assets/images/tech/javascript-original.png";
import htmlLogo from "@/assets/images/tech/html5-plain.png";
import cssLogo from "@/assets/images/tech/css3-plain.png";

// frameworks
import vueLogo from "@/assets/images/tech/vuejs-original.png";
import reactLogo from "@/assets/images/tech/react-original.png";
import jqueryLogo from "@/assets/images/tech/jquery-original.png";
import bootstrapLogo from "@/assets/images/tech/bootstrap-original.png";
import tailwindLogo from "@/assets/images/tech/tailwindcss-plain.png";
import nodejsLogo from "@/assets/images/tech/nodejs-original-wordmark.png";
import expressjsLogo from "@/assets/images/tech/express-original-wordmark.png";
import laravelLogo from "@/assets/images/tech/laravel-plain-wordmark.png";

// tools
import githubLogo from "@/assets/images/tech/github-original.png";
import gitLogo from "@/assets/images/tech/git-plain.png";
import vscodeLogo from "@/assets/images/tech/vscode-original.png";
import npmLogo from "@/assets/images/tech/npm-original-wordmark.png";
import figmaLogo from "@/assets/images/tech/figma-original.png";
import photoshopLogo from "@/assets/images/tech/photoshop-plain.png";
import debianLogo from "@/assets/images/tech/debian-plain-wordmark.png";
import linuxLogo from "@/assets/images/tech/linux-original.png";

// databases
import firebaseLogo from "@/assets/images/tech/firebase-plain.png";
import mysqlLogo from "@/assets/images/tech/mysql-original-wordmark.png";
import sqlserverLogo from "@/assets/images/tech/microsoftsqlserver-plain-wordmark.png";
import sqlliteLogo from "@/assets/images/tech/sqlite-original-wordmark.png";
import postgresqlLogo from "@/assets/images/tech/postgresql-plain-wordmark.png";
import mongodbLogo from "@/assets/images/tech/mongodb-plain-wordmark.png";

const languages = ref([
  phpLogo,
  cppLogo,
  javaLogo,
  pythonLogo,
  csharpLogo,
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
</script>
