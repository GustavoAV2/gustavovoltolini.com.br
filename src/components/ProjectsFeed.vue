<script>
import ProjectCard from './shared/ProjectCard.vue'
export default {
  components: { ProjectCard }
}
</script>

<template>
  <div class="content-vertical-spaces">
    <div class="content-container m-auto space-y-8">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ProjectCard
          name="QR Code Generator"
          description="QR Code generator with automated forms to generate Plain Text, Wifi or vCard. Project
            developed with the main objective of studying the Vue.js library."
          rawTags="vue,typescript,vite,tailwindcss"
        ></ProjectCard>
      </div>
    </div>
  </div>
</template>
