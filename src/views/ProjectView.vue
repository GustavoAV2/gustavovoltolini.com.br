<script>
import HeaderComponent from '../components/shared/Header.vue'
import ProjectsFeed from '../components/ProjectsFeed.vue'
export default {
  components: { HeaderComponent, ProjectsFeed }
}
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <div class="flex flex-col p-14">
    <ProjectsFeed></ProjectsFeed>
  </div>
</template>
