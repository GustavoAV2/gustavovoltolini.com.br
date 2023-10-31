<script>
import HeaderComponent from "../../components/shared/Header.vue";
import PageInDevelopment from "../../components/shared/PageInDevelopment.vue";

export default {
  components: { HeaderComponent, PageInDevelopment },
};
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <div class="p-5 md:pt-5">
    <div class="flex flex-row justify-center text-center">
      <h1
        class="text-2xl md:text-4xl lg:text-4xl font-bold leading-tight md:leading-[1em] mb-10"
      >
        Hackathon São Carlos
      </h1>
    </div>
  </div>
  <!-- 
  <iframe
    width="100%"
    height="445"
    src="https://www.youtube.com/embed/b3pDpXPjR-A"
  >
  </iframe> -->
  <PageInDevelopment path="hackathons"></PageInDevelopment>
</template>
