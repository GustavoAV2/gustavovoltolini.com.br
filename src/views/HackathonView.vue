<script>
import HeaderComponent from "../components/shared/Header.vue";
import HackathonCard from "../components/shared/HackathonCard.vue";

export default {
  components: { HeaderComponent, HackathonCard },
  data() {
    return {
      tooltipView: false,
      filterIsByDate: false,
      filterIsByRank: false,
      filterView: false,
      hackathons: [
        {
          name: "Hackathon Samba Meets Waltz",
          projectName: "Nexus",
          url: "sambameets",
          description:
            "Nexus conecta talentos no campo de microeletrônica e semicondutores a empresas em busca de seus talentos, enquanto também oferece uma comunidade ao redor deles. O usuário que procura conhecimento no campo, exposição a empresas ou contribuir para a comunidade pode acessar o aplicativo por meio de qualquer navegador.",
          position: "3",
          srcImage: "nexus.png",
          date: "05/09/2023",
        },
        {
          name: "HackaConnection Citi",
          projectName: "Processador de arquivos CNAB",
          url: "citi",
          description:
            "Processamento de REMESSA CNAB 750 e criação de cobranças e QRCode",
          position: "2",
          srcImage: "easyb2b-citi.png",
          date: "18/06/2023",
        },
        {
          name: "Hackathon Banco Digio",
          url: "digio",
          projectName: "Previsão de dados financeiros",
          description: "Protótipo de script com Machine Learning",
          position: "3",
          srcImage: "digio-data&analitycs.png",
          date: "11/11/2022",
        },
        {
          name: "Hackathon São Carlos",
          url: "saocarlos",
          projectName: "Aplicação faseada de RPA para Simplificação de tarefas",
          description:
            "Aplicação faseada para simplificar os processos internos da BestCenter, a empresa patrocinadora do Hackathon.",
          position: "1",
          srcImage: "saocarlos.png",
          date: "04/11/2021",
        },
        {
          name: "Nasa Apps Challenges",
          projectName: "Open Science Discovery",
          url: "nasachallenges",
          description:
            "Este projeto visa criar uma plataforma online que conecta instituições públicas e seus projetos sociais com colaboradores em potencial.",
          position: "NA",
          srcImage: "nasachallenge.png",
          date: "09/10/2023",
        },
      ],
    };
  },
  methods: {
    tooltipVisible() {
      let tooltip = document.getElementById("tooltip");
      if (this.tooltipView) {
        this.tooltipView = false;
        tooltip.classList.add("invisible");
        return;
      }
      tooltip.classList.remove("invisible");
      this.tooltipView = true;
    },
    compareDates(firstHacka, secondHacka) {
      const dateA = this.parseDate(firstHacka.date);
      const dateB = this.parseDate(secondHacka.date);

      if (dateA > dateB) return -1;
      if (dateA < dateB) return 1;
      return 0;
    },
    parseDate(dateString) {
      const [day, month, year] = dateString.split("/");
      return new Date(`${year}-${month}-${day}`);
    },
    compareRanks(firstHacka, secondHacka) {
      const rankA = this.parseRank(firstHacka.position);
      const rankB = this.parseRank(secondHacka.position);

      if (rankA > rankB) return 1;
      if (rankA < rankB) return -1;

      return 0;
    },
    parseRank(rankString) {
      try {
        if (rankString == "NA") {
          return 4;
        }
        return parseInt(rankString, 10);
      } catch {
        return 0;
      }
    },
    filterByDate() {
      this.hackathons = this.hackathons.sort(this.compareDates);
      this.filterView = false;
      this.filterIsByDate = true;
      this.filterIsByRank = false;
    },
    filterByRank() {
      this.hackathons = this.hackathons.sort(this.compareRanks);
      this.filterView = false;
      this.filterIsByRank = true;
      this.filterIsByDate = false;
    },
    checkIsMobile() {
      return window.innerWidth < 768;
    }
  },
};
</script>

<template>
  <HeaderComponent></HeaderComponent>

  <div class="flex md:flex-row flex-col justify-between ml-5 mr-5 md:ml-40 md:mr-40">
    <div class="flex flex-row">

      <template v-if="!checkIsMobile()">
           O que é um Hackathon
           <img
             @mouseenter="tooltipVisible()"
             @mouseleave="tooltipVisible()"
             src="/question.png"
             class="w-6 h-6 ml-1 cursor-pointer"
             data-tooltip-target="tooltip-default" 
             alt="?"
           />
           <div
             id="tooltip"
             class="absolute invisible z-10 ml-32 mt-7 p-2 text-base font-medium text-gray-600 transition-opacity duration-300 rounded-lg shadow-sm opacity-1 dark:bg-gray-700" style="background-color: #f3f4f6;"
           >
           Hackathon é um evento que reúne profissionais <br>
           da área de desenvolvimento de software em uma<br>
           maratona de programação, com o objetivo de criar<br>
           uma solução para um fim específico em poucos dias.
           </div>
       </template>
       <template v-else>
         <div class="block md:hidden text-sm font-medium text-gray-600 rounded-lg shadow-sm p-2" style="background-color: #f3f4f6;">
           <h1 class="text-base">O que é um Hackathon?</h1>
           Hackathon é um evento que reúne profissionais da área de desenvolvimento de software em uma maratona de programação, com o objetivo de criar uma solução para um fim específico em poucos dias.
         </div>
       </template>
    </div>
    
    <div class="flex flex-row" >
      <div class="relative inline-block text-left md:mt-0 mt-2">
        <div>
          <button
            @click="filterView = !filterView"
            type="button"
            class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
            id="menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            Filtrar
            <svg
              class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <template v-if="filterView">
          <div
            class="absolute md:right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1" role="none">
              <a
                @click="filterByDate()"
                href="#"
                class="text-gray-500 block px-4 py-2  text-sm"
                :class="{ 'text-gray-900 font-medium' : filterIsByDate}"
                role="menuitem"
                tabindex="-1"
                id="menu-data-filter"
                >Data</a
              >
              <a
                @click="filterByRank()"
                href="#"
                class="text-gray-500 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                :class="{ 'text-gray-900 font-medium' : filterIsByRank}"
                id="menu-rank-filter"
                >Colocação</a
              >
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>

  <div
    class="flex flex-wrap justify-center items-center align-middle w-full pt-2"
  >
    <HackathonCard
      v-for="hacka in hackathons"
      :name="hacka.name"
      :projectName="hacka.projectName"
      :url="hacka.url"
      :description="hacka.description"
      :position="hacka.position"
      :srcImage="hacka.srcImage"
      :date="hacka.date"
    ></HackathonCard>
  </div>
</template>

<style>
.selected {
  color: #000;
}
</style>