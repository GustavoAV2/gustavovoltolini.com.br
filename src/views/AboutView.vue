<script>
import HeaderComponent from '@/components/shared/Header.vue'
import AboutLinks from '@/components/AboutLinks.vue'

export default {
  components: { HeaderComponent, AboutLinks }
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <HeaderComponent></HeaderComponent>
    <AboutLinks></AboutLinks>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
