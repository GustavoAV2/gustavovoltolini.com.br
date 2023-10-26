<script>
import HeaderComponent from "../components/shared/Header.vue";
import Profile from "../components/Profile.vue";
export default {
  components: { HeaderComponent, Profile },
};
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <div class="flex justify-center">
    <Profile></Profile>
  </div>
</template>
