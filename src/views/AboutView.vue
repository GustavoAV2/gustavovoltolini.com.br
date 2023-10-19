<script>
import HeaderComponent from '@/components/shared/Header.vue'
import AboutLinks from '@/components/AboutLinks.vue'

export default {
  components: { HeaderComponent, AboutLinks }
}
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <div class="h-full">
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
