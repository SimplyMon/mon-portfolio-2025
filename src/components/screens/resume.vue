<template>
  <section
    class="bg-[#0D0D0D] text-[#F1FAEE] min-h-screen px-6 py-12 md:pt-36 md:pb-40"
  >
    <div class="max-w-5xl mx-auto space-y-8 opacity-0 animate-fade-in-up">
      <header class="text-center space-y-2">
        <h1 class="text-3xl font-bold">Simon Pasag</h1>
        <p class="text-gray-400">
          <a
            href="https://github.com/SimplyMon"
            class="text-blue-400 hover:underline"
            target="_blank"
            >GitHub</a
          >
          |
          <a
            href="https://www.linkedin.com/in/simon-expression-pasag-85b1112b7/"
            target="_blank"
            class="text-blue-400 hover:underline"
            >LinkedIn</a
          >
          | mon.dev005@gmail.com | 09927199525
        </p>
      </header>

      <!-- Technical Skills -->
      <section>
        <h2 class="text-xl font-semibold border-b border-gray-700 pb-1 mb-4">
          TECHNICAL SKILLS
        </h2>
        <ul class="space-y-2 text-[#F1FAEE]">
          <li>
            <strong>Languages:</strong> HTML, CSS, JavaScript, PHP, Java,
            Python, C++, C#
          </li>
          <li>
            <strong>Frameworks & Libraries:</strong> Vue.js, React.js, Tailwind
            CSS, Bootstrap
          </li>
          <li><strong>Databases:</strong> MySQL, Firebase, MongoDB, MS SQL</li>
          <li><strong>Developer Tools:</strong> Git, GitHub, VS Code</li>
        </ul>
      </section>

      <!-- Projects -->
      <section>
        <h2 class="text-xl font-semibold border-b border-gray-700 pb-1 mb-4">
          PROJECTS
        </h2>
        <div class="space-y-6">
          <!-- Project 2 -->
          <div>
            <h3 class="font-semibold text-[#F1FAEE]">
              Guardian Lock – Smart Door Lock System
              <a
                href="https://guardian-lock.vercel.app/"
                target="_blank"
                class="text-blue-400 hover:underline"
                >(view)</a
              >
            </h3>
            <p class="italic text-gray-400 mb-2">
              Technologies: HTML, CSS, JavaScript, Vue.js, Firebase
              (Authentication, Realtime Database)
            </p>
            <ul class="list-disc list-inside text-[#F1FAEE] space-y-2">
              <li>
                Built IoT smart lock with real-time monitoring and remote
                control integrated multi-factor authentication.
              </li>
              <li>
                Integrated multi-factor authentication (web app, fingerprint,
                face recognition, RFID, PIN).
              </li>
              <li>
                Added role-based access, logs, and alarm for failed attempts.
              </li>
            </ul>
          </div>

          <!-- Project 1 -->
          <div class="text-[#F1FAEE]">
            <h3 class="font-semibold">
              Diverse Oral Core – Dental Clinic Platform
              <a
                href="https://diverseoralcore.vercel.app/"
                target="_blank"
                class="text-blue-400 hover:underline"
                >(view)</a
              >
            </h3>
            <p class="italic text-gray-400 mb-2">
              Technologies: Vue.js, Firebase Realtime Database, Google Maps API
            </p>
            <ul class="list-disc list-inside text-[#F1FAEE] space-y-2">
              <li>
                Launched clinic website with booking system and Google Maps
                integration.
              </li>
              <li>
                Developed real-time appointment management with patient records.
              </li>
            </ul>
          </div>

          <!-- Project 3 -->
          <div>
            <h3 class="font-semibold text-[#F1FAEE]">
              Bozriah – Web-Based Kiosk & POS System
            </h3>
            <p class="italic text-gray-400 mb-2">
              Technologies: HTML, CSS, JavaScript, PHP, SQL, Graph.js
            </p>
            <ul class="list-disc list-inside text-[#F1FAEE] space-y-2">
              <li>
                Developed self-service kiosk and POS with automated receipts.
              </li>
              <li>Built admin dashboard with role-based management.</li>
              <li>Implemented sales analytics and visualization.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Work Experience -->
      <section>
        <h2 class="text-xl font-semibold border-b border-gray-700 pb-1 mb-4">
          WORK EXPERIENCE
        </h2>
        <div class="text-[#F1FAEE] space-y-2">
          <p class="font-semibold">
            Full-Stack Developer Intern: Jan 2025 – Jun 2025
          </p>
          <ul class="list-disc list-inside space-y-2">
            <li>
              Built POS and kiosk features used daily by staff and customers.
            </li>
            <li>
              Debugged and optimized codebase, improving stability of
              operations.
            </li>
            <li>
              Improved/Designed web UI, reducing booking time and errors in
              transactions.
            </li>
          </ul>
        </div>
      </section>

      <!-- Education -->
      <section>
        <h2 class="text-xl font-semibold border-b border-gray-700 pb-1 mb-4">
          EDUCATION
        </h2>
        <p class="text-[#F1FAEE]">
          BS Information Technology – Jesus Reigns Christian College
        </p>
      </section>

      <!-- Certificates & Courses -->
      <section>
        <h2 class="text-xl font-semibold border-b border-gray-700 pb-1 mb-4">
          CERTIFICATES, COURSES AND SEMINARS ATTENDED
        </h2>
        <ul class="list-disc list-inside space-y-2 text-[#F1FAEE]">
          <li>UI/UX Oasis: Figma Masterclass</li>
          <li>Design.Ed.ph: Graphic Design Foundation</li>
          <li>Udemy: Complete 2024 Web Development Course</li>
          <li>W3school: HTML, CSS, JavaScript, PHP</li>
          <li>IIARL.org: Presented and published a research paper</li>
        </ul>
      </section>
    </div>

    <!-- Download Resume Button -->
    <div class="text-center mt-20">
      <a
        href="/Simon-2025.pdf"
        target="_blank"
        class="bg-[#FD6F00] hover:bg-orange-600 text-[#F1FAEE] font-semibold py-3 px-6 rounded-md transition"
      >
        Download Resume
      </a>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}
</style>
