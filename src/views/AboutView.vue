<script>
import HeaderComponent from "../components/shared/Header.vue";
import AboutLinks from "../components/AboutLinks.vue";
import FeedbackPopup from "../components/FeedbackPopup.vue";

export default {
  components: { HeaderComponent, AboutLinks, FeedbackPopup },
};
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <HeaderComponent></HeaderComponent>
    <FeedbackPopup></FeedbackPopup>
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
