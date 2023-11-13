<script>
import HeaderComponent from "../components/shared/Header.vue";
import HackathonCard from "../components/shared/HackathonCard.vue";

export default {
  components: { HeaderComponent, HackathonCard },
  data() {
    return {
      hackathons: [
        {
          name: "Hackathon Samba Meets Waltz",
          projectName: "Nexus",
          url: "sambameets",
          description:
            "Nexus conecta talentos no campo de microeletrônica e semicondutores a empresas em busca de seus talentos, enquanto também oferece uma comunidade ao redor deles. O usuário que procura conhecimento no campo, exposição a empresas ou contribuir para a comunidade pode acessar o aplicativo por meio de qualquer navegador.",
          position: "third",
          srcImage: "nexus.png",
          date: "05/09/2023",
        },
        {
          name: "HackaConnection Citi",
          projectName: "Processador de arquivos CNAB",
          url: "citi",
          description:
            "Processamento de REMESSA CNAB 750 e criação de cobranças e QRCode",
          position: "second",
          srcImage: "easyb2b-citi.png",
          date: "18/06/2023",
        },
        {
          name: "Hackathon Banco Digio",
          url: "digio",
          projectName: "Aplicação faseada de RPA para Simplificação de tarefas",
          description: "Protótipo de script com Machine Learning",
          position: "third",
          srcImage: "digio-data&analitycs.png",
          date: "11/11/2022",
        },
        {
          name: "Hackathon São Carlos",
          url: "saocarlos",
          projectName: "Aplicação faseada de RPA para Simplificação de tarefas",
          description:
            "Aplicação faseada para simplificar os processos internos da BestCenter, a empresa patrocinadora do Hackathon.",
          position: "first",
          srcImage: "saocarlos.png",
          date: "04/11/2021",
        },
      ],
    };
  },
  methods: {
    compareDates(firstHacka, secondHacka) {
      const dateA = this.parseDate(firstHacka.date);
      const dateB = this.parseDate(secondHacka.date);

      return dateB < dateA;
    },
    parseDate(dateString) {
      const [month, day, year] = dateString.split("/");
      return new Date(`${year}-${month}-${day}`);
    },
    compareRanks(firstHacka, secondHacka){
      const rankA = this.parseRank(firstHacka.rank);
      const rankB = this.parseRank(secondHacka.rank);

      return rankB > rankA;
    },
    parseRank(rankString){
      try {
        return parseInt(rankString, 10);
      }
      catch {
        return 0;
      }
    },
    filterByDate() {
      let newHackas = this.hackathons
      this.hackathons = newHackas.sort(this.compareDates);
      
      console.log(newHackas)
    },
    filterByRank() {
      let newHackas = this.hackathons
      this.hackathons = newHackas.sort(this.compareRanks);
      console.log(this.hackathons)
      console.log(newHackas)
    },
  },
};
</script>

<template>
  <HeaderComponent></HeaderComponent>

  <div class="flex justify-center">
    Filtrar por:
    <a @click="filterByDate" class="no-underline hover:underline text-cyan-600 dark:text-cyan-400 cursor-pointer ml-2">Data</a>
    <a @click="filterByRank" class="no-underline hover:underline text-cyan-600 dark:text-cyan-400 cursor-pointer ml-2">Colocação</a>
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
