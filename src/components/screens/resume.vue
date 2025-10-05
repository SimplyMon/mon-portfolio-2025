<template>
  <section
    class="bg-[#0D0D0D] text-[#D7EAD9] min-h-screen px-6 py-12 pt-24 md:pt-36 md:pb-40"
  >
    <div class="max-w-5xl mx-auto space-y-8 opacity-0 animate-fade-in-up">
      <header class="text-center space-y-2">
        <h1 class="text-3xl font-bold">Simon Pasag</h1>
        <p class="text-[#A6B9A8]">
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
        <ul class="space-y-2 text-[#D7EAD9]">
          <li>
            <strong>Languages:</strong> HTML, CSS, JavaScript, TypeScript, PHP,
            Java, Python, C++
          </li>
          <li>
            <strong>Frameworks & Libraries:</strong> Vue.js, React.js, Next.js,
            Express.js, Laravel, Tailwind CSS, Bootstrap
          </li>
          <li>
            <strong>Databases:</strong> MySQL, MS SQL, PostgreSQL, Firebase,
            MongoDB
          </li>
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
            <h3 class="font-semibold text-[#D7EAD9]">
              Guardian Lock – Smart Door Lock System
              <a
                href="https://guardian-lock.vercel.app/"
                target="_blank"
                class="text-blue-400 hover:underline"
                >(view)</a
              >
            </h3>
            <p class="italic text-[#A6B9A8] mb-2">
              Technologies: HTML, CSS, JavaScript, Vue.js, Firebase
              (Authentication, Realtime Database)
            </p>
            <ul class="list-disc list-inside text-[#D7EAD9] space-y-2">
              <li>
                Built IoT smart lock with real-time monitoring and remote
                control, enabling secure multi-factor authentication
                (fingerprint, face recognition, RFID, PIN).
              </li>
              <li>
                Implemented role-based access, access logs, and an alarm system,
                reducing unauthorized entry attempts by 84% during testing.
              </li>
              <li>
                Optimized Firebase Realtime Database queries to support 40-45
                concurrent users without performance loss.
              </li>
            </ul>
          </div>

          <!-- Project 1 -->
          <div class="text-[#D7EAD9]">
            <h3 class="font-semibold">
              Diverse Oral Core – Dental Clinic Platform
              <a
                href="https://diverseoralcore.vercel.app/"
                target="_blank"
                class="text-blue-400 hover:underline"
                >(view)</a
              >
            </h3>
            <p class="italic text-[#A6B9A8] mb-2">
              Technologies: Vue.js, Firebase Realtime Database, Google Maps API
            </p>
            <ul class="list-disc list-inside text-[#D7EAD9] space-y-2">
              <li>
                Developed clinic platform with appointment booking system,
                digital patient records, and Google Maps integration, reducing
                scheduling conflicts.
              </li>
              <li>
                Enabled real-time appointment management, handling 10-15
                bookings per day through digital record management
              </li>
            </ul>
          </div>

          <!-- Project 3 -->
          <div>
            <h3 class="font-semibold text-[#D7EAD9]">
              Bozriah – Web-Based Kiosk & POS System
            </h3>
            <p class="italic text-[#A6B9A8] mb-2">
              Technologies: HTML, CSS, JavaScript, PHP, SQL, Graph.js
            </p>
            <ul class="list-disc list-inside text-[#D7EAD9] space-y-2">
              <li>
                Built self-service kiosk and POS system with automated receipts,
                reducing checkout time by 95%.
              </li>
              <li>
                Integrated sales analytics and data visualization with Graph.js,
                enabling business owners to track daily transactions.
              </li>
              <li>
                Designed admin dashboard with role-based management, improving
                oversight efficiency.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Work Experience -->
      <section>
        <h2 class="text-xl font-semibold border-b border-gray-700 pb-1 mb-4">
          WORK EXPERIENCE
        </h2>
        <div class="text-[#D7EAD9] space-y-2">
          <p class="font-semibold">Full-Stack Developer: Jan 2025 – Jun 2025</p>
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
        <p class="text-[#D7EAD9]">
          BS Information Technology – Jesus Reigns Christian College
        </p>
      </section>

      <!-- Certificates & Courses -->
      <section>
        <h2 class="text-xl font-semibold border-b border-gray-700 pb-1 mb-4">
          CERTIFICATES, COURSES AND SEMINARS ATTENDED
        </h2>
        <ul class="list-disc list-inside space-y-2 text-[#D7EAD9]">
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
        class="bg-[#FD6F00] hover:bg-orange-600 text-[#D7EAD9] font-semibold py-3 px-6 rounded-md transition"
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
