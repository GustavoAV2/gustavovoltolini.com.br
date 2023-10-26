<script>
export default {
  props: { path: String },
};
</script>
<template>
  <div class="flex flex-col text-center mt-4 items-center">
    <h1 class="text-xl font-bold leading-tight md:leading-[1em] w-full">
      Está pagina está em desenvolvimento, obrigado pelo interesse.
    </h1>

    <img src="/images/InDevelopment2.gif" alt="" class="w-56" />

    <a
      class="pt-5 font-medium hover:text-blue-600 hover:underline"
      :href="'/' + path"
      >Voltar a pagina anterior</a
    >
  </div>
</template>
