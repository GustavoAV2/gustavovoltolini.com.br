<template>
  <div class="bg-white p-6 max-w-sm ">
    <img :src="imgUrl" :alt="title" class="h-24 mx-auto mb-4" />
    <h3 class="text-xl font-semibold text-center mb-2">{{ title }}</h3>
    <p class="text-gray-600 text-sm text-center">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String,
    title: String,
    description: String
  }
};
</script>
