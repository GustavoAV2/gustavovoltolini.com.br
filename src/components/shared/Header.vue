<script>
export default {
  methods: {
    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<template>
  <nav class="bg-white border-gray-200 text-lg md:text-xl">
    <div class="flex justify-center items-center mx-auto max-w-screen-xl p-4">
      <div
        id="mega-menu-full"
        class="items-center justify-center font-medium w-full flex md:w-auto order-1 sm:flex sm:w-auto"
      >
        <a
          v-if="!isMobile()"
          href="/"
          class="block py-2 pl-3 p-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-5"
          aria-current="page"
          >Inicio</a
        >

        <a
          href="/storyline"
          class="block py-2 pl-3 p-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-5"
          aria-current="page"
          >Historia</a
        >

        <!-- <a
          href="/profile"
          class="block py-2 pl-3 p-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-5"
          aria-current="page"
          >Curriculo</a
        > -->
        
        <template v-if="isMobile()">
          <a
            href="/projects"
            class="block py-2 pl-3 p-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-5"
            >Projetos</a
          >
        </template>
        <template v-else>
          <a
            href="/projects"
            class="block py-2 pl-3 p-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-5"
            >Projetos Pessoais</a
          >
        </template>

        <a
          href="/hackathons"
          class="block py-2 pl-3 p-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-5"
          >Hackathons</a
        >

        <a
          href="/about"
          class="block py-2 pl-3 p-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-5"
          >Contato</a
        >
      </div>
    </div>
  </nav>
</template>
