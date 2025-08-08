<script>
import Skills from "../components/Skills.vue";
import Experience from "../components/ExperienceCard.vue";
import Education from "../components/EducationCard.vue";

export default {
  components: { Skills, Experience, Education },
  methods: {
    downloadCV() {
      let name = "GustavoVoltolini.pdf";
      let uri = "/docs/GustavoVoltolini.pdf";
      var link = document.createElement("a");
      link.setAttribute("download", name);
      link.href = uri;
      document.body.appendChild(link);
      link.click();
      link.remove();
    },
  },
};
</script>

<template>
  <div class="flex justify-center min-h-screen">
    <div class="p-3 pt-0 w-full md:w-3/5 md:p-8 md:pt-0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      <div class="main-container">

        <div class="text-center py-10">
          <h1 class="text-4xl font-bold text-gray-800 mb-2">Minha Jornada</h1>
          <p class="text-lg text-gray-500 mb-2">
            Desenvolvedor Back-End com mais de 5 anos de experiência, com sólida vivência em desafios de grande escala e
            experiência completa no ciclo de desenvolvimento de software, desde o levantamento de requisitos até a entrega
            de soluções escaláveis e sustentáveis.
          </p>
          <div class="flex group justify-center items-center">
            <button class="download-btn" @click="downloadCV()" tar>
              Download CV
            </button>

            <button class="download-btn-icon" @click="downloadCV()">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-6-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="relative wrap h-full">
          <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style="left: 50%"></div>
          
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">🎓</h1>
            </div>
            <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 p-6 timeline-card">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">Início de Tudo: Curso Técnico</h3>
              <p class="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">
                Começando a jornada na tecnologia com o <strong>Curso Técnico Integrado em Informática</strong> no Cedup Hermann Hering, de 2018 a 2020. 
                Foi a base de tudo, onde aprendi os fundamentos da programação.
              </p>
            </div>
          </div>

          <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">🌱</h1>
            </div>
            <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 p-6 timeline-card">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">Estagiário Desenvolvedor na HBSIS</h3>
              <p class="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">
                De novembro de 2019 a novembro de 2020. Participei do Programa Padawans e desenvolvi um protótipo de banco virtual utilizando <span class="tag-tech">Python</span> com <span class="tag-tech">Flask</span>, banco de dados <span class="tag-tech">PostgreSQL</span> e <span class="tag-tech">Vue.js</span>.
              </p>
            </div>
          </div>
          
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">🚀</h1>
            </div>
            <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 p-6 timeline-card">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">Desenvolvedor Júnior I na Ambev Tech</h3>
              <p class="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">
                De novembro de 2020 a outubro de 2021. Fui desenvolvedor Back-End no time de sustentação Bees B2B. Participei da concepção e desenvolvimento do <strong>Projeto Marvin</strong>, um MVP com automações em <span class="tag-tech">Python</span>, <span class="tag-tech">MongoDB</span>, <span class="tag-tech">FastAPI</span> e <span class="tag-tech">DataDog</span> para reduzir o volume de chamados de clientes B2B.
              </p>
            </div>
          </div>
          
          <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">🏆</h1>
            </div>
            <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 p-6 timeline-card">
              <h3 class="mb-3 font-bold text-gray-800 text-xl"><strong class="first-position">1º</strong> Lugar no Hackathon São Carlos</h3>
              <p class="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">
                Em 04/11/2021. Venci com a <strong>"Aplicação faseada de RPA para Simplificação de tarefas"</strong> para simplificar processos internos.
              </p>
            </div>
          </div>

          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">📈</h1>
            </div>
            <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 p-6 timeline-card">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">Desenvolvedor Júnior II na Ambev Tech</h3>
              <p class="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">
                De outubro de 2021 a julho de 2022. Desenvolvi e mantive sistemas automatizados em <span class="tag-tech">Python</span> com <span class="tag-tech">MongoDB</span> e <span class="tag-tech">DataDog</span>. As automações economizaram mais de 
                <strong>42.000 horas</strong> de análise humana. Também trabalhei com manutenção de microsserviços em <span class="tag-tech">C# .NET</span> com <span class="tag-tech">ServiceBus</span> e <span class="tag-tech">MongoDB</span>.
              </p>
            </div>
          </div>

          <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">🏆</h1>
            </div>
            <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 p-6 timeline-card">
              <h3 class="mb-3 font-bold text-gray-800 text-xl"><strong class="third-position">3º</strong> Lugar no Hackathon Banco Digio</h3>
              <p class="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">
                Em 11/11/2022. Conquistei o 3º lugar com um protótipo de script de <strong>Previsão de dados financeiros</strong> usando <span class="tag-tech">Machine Learning</span>.
              </p>
            </div>
          </div>
          
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">⭐</h1>
            </div>
            <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 p-6 timeline-card">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">Desenvolvedor Pleno I na Ambev Tech</h3>
              <p class="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">
                De julho de 2022 a agosto de 2025. Desenvolvi funcionalidades para o ERP das revendas em <span class="tag-tech">C# .NET</span> com <span class="tag-tech">SQL Server</span> e padrão <span class="tag-tech">CQRS</span>. Trabalhei no descomissionamento de funcionalidades legadas do ERP das franquias para microsserviços em <span class="tag-tech">C# .NET 8</span>. Participei da idealização do <strong>Megatron</strong>, um produto de automação de chamados usando microsserviços em <span class="tag-tech">C# .NET</span> com <span class="tag-tech">ServiceBus</span> e <span class="tag-tech">MongoDB</span>.
              </p>
            </div>
          </div>
          
          <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">🏆</h1>
            </div>
            <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 p-6 timeline-card">
              <h3 class="mb-3 font-bold text-gray-800 text-xl"><strong class="second-position">2º</strong> Lugar no HackaConnection Citi</h3>
              <p class="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">
                Em 18/06/2023. Conquistei o 2º lugar com o projeto de <strong>Processador de arquivos CNAB</strong>.
              </p>
            </div>
          </div>
          
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">🏆</h1>
            </div>
            <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 p-6 timeline-card">
              <h3 class="mb-3 font-bold text-gray-800 text-xl"><strong class="third-position">3º</strong> Lugar no Hackathon Samba Meets Waltz</h3>
              <p class="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">
                Em 05/09/2023. Conquistei o 3º lugar com o projeto <strong>Nexus</strong>, uma plataforma para conectar talentos em microeletrônica.
              </p>
            </div>
          </div>
          
          <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">🎓</h1>
            </div>
            <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 p-6 timeline-card">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">Formação Acadêmica</h3>
              <p class="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">
                Iniciei o <strong>Bacharelado em Engenharia de Software</strong> na Unicesumar em janeiro de 2022, com previsão de conclusão em dezembro de 2025.
              </p>
            </div>
          </div>

          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">📈</h1>
            </div>
            <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 p-6 timeline-card">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">Desenvolvedor Pleno II na Ambev Tech</h3>
              <p class="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">
                Desde julho de 2025, atuo como <strong>Desenvolvedor Pleno II</strong>.
              </p>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.tag-tech {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700;
}

.timeline-card {
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  /* cursor: pointer; */
}

.timeline-card:hover {
  transform: scale(1.05);
  z-index: 20;
}
.first-position {
    color: #FFD700;
}

.second-position {
    color: #C0C0C0;
}

.third-position {
    color: #CD7F32;
}
</style>