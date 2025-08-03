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
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-6-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
            </svg>
            </button>
        </div>
        </div>

        <div class="relative wrap overflow-hidden h-full">
          <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style="left: 50%"></div>
          
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">🎓</h1>
            </div>
            <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 p-6">
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
            <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 p-6">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">Estágio na HBSIS</h3>
              <p class="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">
                Em novembro de 2019, entrei no programa Padawans da HBSIS. Uma experiência crucial para entender conceitos de programação, 
                versionamento, trabalho em equipe e a metodologia Scrum. Desenvolvi meu primeiro projeto prático, um protótipo de banco virtual, 
                usando <span class="tag-tech">Python</span> com <span class="tag-tech">Flask</span>, banco de dados <span class="tag-tech">PostgreSQL</span> e <span class="tag-tech">Vue.js</span> no Frontend.
              </p>
            </div>
          </div>
          
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">🚀</h1>
            </div>
            <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 p-6">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">Primeiro Emprego: Ambev Tech</h3>
              <p class="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">
                Em novembro de 2020, iniciei como <strong>Desenvolvedor Júnior (Nível I)</strong>. Meu foco principal era a idealização e o 
                desenvolvimento de automações e APIs em <span class="tag-tech">Python</span> com <span class="tag-tech">MongoDB</span> e <span class="tag-tech">FastAPI</span> para reduzir chamados de clientes B2B. 
                Essa iniciativa impactou mais de 240 mil clientes e resultou em uma redução significativa no número de chamados.
              </p>
            </div>
          </div>

          <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">📈</h1>
            </div>
            <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 p-6">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">Evolução: Júnior Nível II</h3>
              <p class="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">
                A partir de outubro de 2021, minha atuação se expandiu. Além de continuar com automações em <span class="tag-tech">Python</span>, passei a trabalhar 
                também com <span class="tag-tech">C# .NET 6</span> em microsserviços usando <span class="tag-tech">ServiceBus</span>. Foi um período de grande aprendizado e diversificação de tecnologias.
              </p>
            </div>
          </div>

          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">⭐</h1>
            </div>
            <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 p-6">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">Promoção: Desenvolvedor Pleno</h3>
              <p class="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">
                Desde julho de 2022, atuo como <strong>Desenvolvedor Pleno</strong>. Minhas responsabilidades incluem o desenvolvimento 
                de novas funcionalidades para o ERP e Ecommerce da Ambev em <span class="tag-tech">C# .NET</span> e <span class="tag-tech">SQL Server</span>, utilizando o 
                padrão arquitetural <span class="tag-tech">CQRS</span>. Também participo ativamente da idealização e desenvolvimento de automações end-to-end com microsserviços baseados em eventos e APIs.
              </p>
            </div>
          </div>

          <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">📈</h1>
            </div>
            <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 p-6">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">Promoção: Desenvolvedor Pleno II</h3>
              <p class="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">
                Desde julho de 2025, atuo como <strong>Desenvolvedor Pleno II</strong>              
            </p>
            </div>
          </div>
          
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">🎓</h1>
            </div>
            <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 p-6">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">Futuro: Formação Acadêmica</h3>
              <p class="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">
                Simultaneamente à minha carreira profissional, iniciei o <strong>Bacharelado em Engenharia de Software</strong> na Unicesumar em janeiro de 2022, 
                com previsão de conclusão em dezembro de 2025.
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
</style>