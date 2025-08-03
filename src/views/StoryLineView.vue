<script>
import HeaderComponent from "../components/shared/Header.vue";
import StoryLine from "../components/StoryLine.vue";

export default {
  components: { HeaderComponent, StoryLine }
};
</script>


<template>
  <HeaderComponent></HeaderComponent>
  <div class="bg-gray-100 ">
    <StoryLine></StoryLine>
  </div>
</template>
