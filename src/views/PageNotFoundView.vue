<script>
import HeaderComponent from "../components/shared/Header.vue";
export default {
  components: { HeaderComponent },
};
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <div class="flex flex-col text-center mt-10">
    <div class="flex flex-row justify-center align-middle items-center">
      <h1
        class="text-2xl pl-4 md:text-6xl lg:text-6xl font-bold leading-tight md:leading-[1em] mb-10 undefined"
      >
        Pagina não encontrada!
      </h1>
      <img src="/images/404.gif" alt="" style="height: 85px" />
    </div>

    <a class="pt-5 font-medium hover:text-blue-600 hover:underline" href="/"
      >Voltar a pagina inicial</a
    >
  </div>
</template>
