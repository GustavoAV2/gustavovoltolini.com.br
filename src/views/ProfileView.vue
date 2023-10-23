<script>
import HeaderComponent from '../components/shared/Header.vue'
import Profile from '../components/Profile.vue'
export default {
  components: { HeaderComponent, Profile }
}
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <div class="flex-col justify-center w-auto inline-block p-10">
    <Profile></Profile>
  </div>
</template>
