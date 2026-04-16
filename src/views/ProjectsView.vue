<script>
import HeaderComponent from "../components/shared/Header.vue";
import ProjectCard from "../components/shared/ProjectCard.vue";

export default {
  components: { HeaderComponent, ProjectCard },
  data() {
    return {
      tooltipView: false,
      filterIsByDate: false,
      filterView: false,
      projects: [
        {
          name: "App Financeiro Pessoal",
          projectName: "Nivelo",
          url: "nivelo",
          description:
            "Um aplicativo mobile desenvolvido para auxiliar usuários no controle financeiro pessoal, com funcionalidades de categorização de despesas, orçamentos e relatórios. Lançado em produção com base de usuários ativa.",
          srcImage: "nivelo/nivelo-logo.png",
          date: "15/05/2025",
          technologies: ["Next.JS", "Supabase", "PostgreSQL", "Vercel"],
          link: "https://www.nivelo.app.br",
        },
        {
          name: "Sistema Completo de Criação de Vídeos Automatizado",
          projectName: "Video Creator AI",
          url: "video-creator-ai",
          description:
            "Sistema end-to-end que cria automaticamente vídeos verticais (1080x1920) para Redes Sociais, usando: CrewAI Agents, Web Search, Edge-TTS/ElevenLabs para narração, e MoviePy para montagem do video.",
          srcImage: "mark/mark-vii.png",
          date: "15/04/2026",
          technologies: ["CrewAI", "ElevenLabs", "MoviePy", "Python"],
          link: "https://tony-dashboard-sandy.vercel.app/",
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
    compareDates(firstProject, secondProject) {
      const dateA = this.parseDate(firstProject.date);
      const dateB = this.parseDate(secondProject.date);

      if (dateA > dateB) return -1;
      if (dateA < dateB) return 1;
      return 0;
    },
    parseDate(dateString) {
      const [day, month, year] = dateString.split("/");
      return new Date(`${year}-${month}-${day}`);
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
        O que são estes projetos pessoais?
        <img
          @mouseenter="tooltipVisible()"
          @mouseleave="tooltipVisible()"
          src="/images/icons/question.png"
          class="w-6 h-6 ml-1 cursor-pointer"
          data-tooltip-target="tooltip-default"
          alt="?"
        />
        <div
          id="tooltip"
          class="absolute invisible z-10 ml-32 mt-7 p-2 text-base font-medium text-gray-600 transition-opacity duration-300 rounded-lg shadow-sm opacity-1 dark:bg-gray-700" style="background-color: #f3f4f6;"> 
           Iniciativas independentes desenvolvidas por conta própria, <br>
           movidos por paixão e curiosidade. Desde criações pessoais <br>
           lançadas publicamente até soluções inovadoras concebidas e lideradas <br>
           fora das responsabilidades de trabalho regulares, com o objetivo de <br>
           explorar novas tecnologias, resolver desafios e gerar impacto.
           </div>
       </template>
       <template v-else>
         <div class="block md:hidden text-sm font-medium text-gray-600 rounded-lg shadow-sm p-2" style="background-color: #f3f4f6;">
           <h1 class="text-base">O que são estes projetos pessoais?</h1>
           Iniciativas independentes desenvolvidas por conta própria, movidos por paixão e curiosidade. Desde criações pessoais lançadas publicamente até soluções inovadoras concebidas e lideradas fora das responsabilidades de trabalho regulares, com o objetivo de explorar novas tecnologias, resolver desafios e gerar impacto.
         </div>
       </template>
    </div>
  </div>

  <div
    class="flex flex-wrap justify-center items-center align-middle w-full pt-2"
  >
    <ProjectCard
      v-for="project in projects"
      :key="project.url"
      :name="project.name"
      :projectName="project.projectName"
      :url="project.url"
      :description="project.description"
      :srcImage="project.srcImage"
      :date="project.date"
      :technologies="project.technologies"
      :link="project.link"
    ></ProjectCard>
  </div>
</template>
