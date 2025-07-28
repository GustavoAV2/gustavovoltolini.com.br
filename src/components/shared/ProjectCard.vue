<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
    <img class="w-full h-48 object-cover" :src="`/images/projects/${srcImage}`" :alt="name" />
    
    <div class="p-4">
      <div class="font-bold text-xl mb-2">{{ name }}</div>
      <p class="text-gray-700 text-base mb-4">
        {{ description }}
      </p>
      <div class="px-6 pt-4 pb-2">
        <span v-for="tech in technologies" :key="tech" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{{ tech }}
        </span>
      </div>
      <div class="px-6 pt-4 pb-2 flex justify-between items-center">
        <span class="text-gray-600 text-sm">Data: {{ date }}</span>
        <a v-if="link && link !== '#'" :href="link" target="_blank" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ver Projeto
        </a>
        <span v-else class="text-gray-500 text-sm italic">Link Indisponível (Interno/Privado)</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    srcImage: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    technologies: {
      type: Array,
      default: () => [],
    },
    link: {
      type: String,
      default: '#',
    }
  },
};
</script>

