<script>
import HeaderComponent from "../../components/shared/Header.vue";
import HackathonInformation from "../../components/shared/HackathonInformation.vue";
import Carrousel from "../../components/shared/Carrousel.vue";

export default {
  data() {
    return {
      name: "Hackathon São Carlos",
      repoUrl: "https://github.com/GustavoAV2/",
      teamMembers: {
        members: [
          { user: "GustavoAV2", name: "Gustavo Antunes Voltolini" },
          { user: "MarcianoPazinatto", name: "Marciano Pazinatto" },
          { user: "dsasseulloa", name: "Daniel Sasse Ulloa" },
          { user: "", name: "Bruno Henrique" },
        ],
      },
      challenge: "Automatizar o processo de analise e aprovação de credito dos novos locatarios da Best Center. Esse processo era feito de forma manual, atráves de e-mails e análises de analistas.",
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
      youtubeUrl="b3pDpXPjR-A"
      position="1"
      date="04/11/2021"
    />

    <div 
      class="flex flex-col pt-[0.7rem] md:p-40 pb-3 md:pt-[0.7rem] text-center text-xl w-full"
    >
      <!-- <dt
        class="opacity-100 font-bold uppercase tracking-widest text-sm md:text-lg mb-1"
      >
        Flow (Solução apresentada)
      </dt>
      <p class="text-left">
        ...
      </p>

      <dt
        class="opacity-100 font-bold uppercase tracking-widest text-xs mb-1 text-left"
      >
        API :
      </dt>
      <p class="text-left">
        API desenvolvida em C# ASP .NET Core 7, que alimenta e consome o banco
        de dados SQL.
      </p>
      <br />

      <dt
        class="opacity-100 font-bold uppercase tracking-widest text-xs mb-1 text-left"
      >
        Interface para o usuário (Frontend):
      </dt>
      <p class="text-left">
        Interface frontend desenvolvida com React e Tailwind.
      </p> -->

      <div class="pt-[2rem] flex justify-center " id="media">
        <h2 class="opacity-100 font-bold uppercase tracking-widest text-sm md:text-lg mb-1">
          Mídias do dia do evento 
        </h2>
      </div>
      
      <Carrousel 
      prefix="SaoCarlos/Memories/"
      images="SaoCarlos-1.jpeg;SaoCarlos-2.png;"
      />

       <div class="flex flex-row text-left mt-2">
        <a href="/hackathons" class="cursor-pointer hover:text-cyan-500">Voltar à pagina anterior...</a>
      </div>
    </div>
  </div>

</template>
