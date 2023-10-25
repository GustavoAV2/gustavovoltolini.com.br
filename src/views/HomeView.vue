<script>
import HeaderComponent from "../components/shared/Header.vue";

export default {
  components: { HeaderComponent },
  data() {
    return {
      count: 0,
      text: "Gustavo Voltolini,",
      subtext: "",
      caracter: "|",
      descriptions: ["Backend Developer", "Full Stack Developer"],
    };
  },
  created() {
    let descIndex = 0;
    let subtext = this.descriptions[descIndex];
    this.subtext = "";
    let index = 0;

    setInterval(() => {
      if (this.subtext.length == subtext.length) {
        index = index - 1;
        subtext = subtext.substring(0, index);
        this.subtext = subtext;
      } else {
        this.subtext += subtext[index];
        index++;
      }
      if (subtext.length == 0) {
        descIndex = descIndex == 0 ? 1 : 0;
        subtext = this.descriptions[descIndex];
      }
    }, 180);

    setInterval(() => {
      this.caracter = this.caracter.length > 0 ? "" : "|";
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
    class="flex w-full h-full md:flex md:w-auto justify-center align-middle mt-56"
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
          {{ caracter }}
        </h2>
      </div>
    </div>
  </div>
</template>
