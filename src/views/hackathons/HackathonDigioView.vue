<script>
import HeaderComponent from "../../components/shared/Header.vue";
import HackathonInformation from "../../components/shared/HackathonInformation.vue";
import Carrousel from "../../components/shared/Carrousel.vue"

export default {
  data() {
    return {
      name: "Hackathon Banco Digio",
      repoUrl: "https://github.com/GustavoAV2/",
      teamMembers: {
        members: [
          { user: "GustavoAV2", name: "Gustavo Antunes Voltolini" },
          { user: "jplrhae", name: "Joshua Patrick Loesch Alves" }
        ],
      },
      challenge: "Através de analise de dados, desenvolver uma solução para previsão de dados financeiros do Banco Digio.",
    };
  },
  components: { HeaderComponent, HackathonInformation, Carrousel },
};
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <div class="p-5 md:p-20 md:pt-5">
    <HackathonInformation
      :name="name"
      :repoUrl="repoUrl"
      :team="JSON.stringify(this.teamMembers)"
      :challenge="challenge"
      youtubeUrl="GkrJGM60m-A"
      position="3"
      date="04/11/2021"
    />

    
    <div 
      class="flex flex-col pt-[0.7rem] md:p-40 pb-3 md:pt-[0.7rem] text-center text-xl w-full"
    >
          
    <div id="media" class="pt-[2rem]">
      <h2 class="opacity-100 font-bold uppercase tracking-widest text-sm md:text-lg mb-1">
        Mídias do dia do evento 
      </h2>
      <Carrousel 
      prefix="Digio/Memories/"
      images="Digio-1.jpeg;Digio-2.png;"
      />
    </div>    

    <div class="flex flex-row text-left mt-2">
      <a href="/hackathons" class="cursor-pointer hover:text-cyan-500">Voltar à pagina anterior...</a>
    </div>
  </div>
</div>
</template>
