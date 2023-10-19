<script>
export default {}
</script>

<template>
  <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 text-xl">
    <div class="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl p-4">
      <div
        id="mega-menu-full"
        class="items-center justify-center font-medium hidden w-full md:flex md:w-auto md:order-1"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <a
              href="/profile"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
              >Inicio</a
            >
          </li>

          <!-- <li>
            <a
              href="/projects"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >Projetos</a
            >
          </li> -->

          <li>
            <a
              href="/hackathons"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >Hackathons</a
            >
          </li>
          <li>
            <a
              href="/about"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >Contato</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
