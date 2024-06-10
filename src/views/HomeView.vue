<script>
import HeaderComponent from "../components/shared/Header.vue";

export default {
  components: { HeaderComponent },
  data() {
    return {
      count: 0,
      text: "Gustavo Voltolini,",
      subtext: "",
      character: "|",
      description: "Backend Developer",
    };
  },
  created() {
    let subtext = this.description;
    this.subtext = "";
    let index = 0;

    var test1 = setInterval(() => {
      if (this.subtext.length != subtext.length) {
        this.subtext += subtext[index];
        index++;
      }
      else{
        clearInterval(test1);
        clearInterval(test2);
        this.character = "";
      }
    }, 100);

    var test2 = setInterval(() => {
      this.character = this.character.length > 0 ? "" : "|";
    }, 320);
  },
  beforeUnmount() {
    clearInterval();
  },
};
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <div
    class="flex w-full h-full md:flex md:w-auto justify-center align-middle mt-48"
  >
    <div class="flex flex-col align-middle h-full">
      <h1
        class="w-min text-4xl font-bold text-neutral-800 md:w-max md:text-6xl"
      >
        {{ text }}
      </h1>

      <div class="flex flex-row mt-1">
        <h2 class="text-2xl ml-1 text-neutral-400 md:text-4xl">
          {{ subtext }}
        </h2>
        <h2 class="text-2xl ml-1 text-neutral-400 md:text-4xl">
          {{ character }}
        </h2>
      </div>
    </div>
  </div>
</template>
