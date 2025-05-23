<script>
import HeaderComponent from "../components/shared/Header.vue";
import Skills from "../components/Skills.vue";
import Experience from "../components/ExperienceCard.vue";
import Education from "../components/EducationCard.vue";

export default {
  components: { HeaderComponent, Skills, Experience, Education },
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
  <HeaderComponent></HeaderComponent>
  <div class="flex justify-center">
    <div
      class="p-3 pt-0 bg-gray-100 antialiased rounded-lg w-full md:w-3/5 md:p-8 md:pt-0 md:mb-8"
    >
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <div class="main-container">
        <div class="overflow-hidden">
          <!-- Start User Block -->
          <div class="relative text-center">
            <div class="pt-5 pb-2">
              <div class="text-3xl font-semibold mb-1.5">
                Gustavo Antunes Voltolini
              </div>
              <div class="text-sm text-gray-400 mb-4">Backend Developer</div>
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
          </div>

          <div class="space-y-5 lg:col-span-2 p-2">
            <div class="block-section">
              <!-- Start About Me Block -->
              <h2 class="block-title text-xl">Sobre</h2>
              <p class="text-gray-600">
                Desenvolvedor Back-End com mais de quatro anos de experiência, apaixonado por desafios
                e em busca constante de evolução. Ampla experiência em .NET e Python, no desenvolvimento de APIs, microsserviços e monolitos. 
                Trabalhei no desenvolvimento e manutenção dos principais ERP da AmbevTech, além de implementar automações que
                impactaram mais de 240 mil clientes.
              </p>

              <div class="flex flex-col space-y-4">
                <ul class="flex space-x-5">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/gustavo-voltolini/"
                      class="social-link-hover"
                    >
                      <i class="bx bxl-linkedin text-2xl"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/GustavoAV2"
                      class="social-link-hover"
                    >
                      <i class="bx bxl-github text-2xl"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- End About Me Block -->
          </div>

          <div class="pl-2 pr-2 pb-5">
            <div class="border-t border-gray-200"></div>
          </div>

          <!-- Start Skills Block -->
          <Skills></Skills>
          <!-- End Skills Block -->

          <div class="pl-2 pr-2 pb-5">
            <div class="border-t border-gray-200"></div>
          </div>

          <div class="block-section p-2">
            <!-- Start Experience Block -->
            <h2 class="block-title text-xl">Experiência</h2>

            <Experience
              position="Desenvolvedor Pleno"
              company="Ambev Tech"
              imgUrl="dwlAmbev.jpeg"
              period="Tempo integral"
              startDate="Julho 2022"
              finalDate="O momento"
            />
            <p class="text-gray-600">
              • Desenvolvimento de novas funcionalidades do sistema ERP das revendas
                Ambev, em C# .NET com SqlServer, utilizando CQRS como padrão
                arquitetural.
            </p>
            <p class="text-gray-600">
              • Participação na idealização e desenvolvimento de automações end-to-end, utilizando arquitetura de microsserviços baseada em eventos e API's,
                em C# .NET, com ServiceBus e MongoDb.
            </p>
            <p class="text-gray-600">
              • Manutenção do sistema ERP das franquias Ambev, atuando em cima de
                microsserviços, jobs, monolitos e código legado em C# .NET e Angular.
            </p>
            <p class="text-gray-600">
              • Descomissionamento de funcionalidades legadas do ERP das franquias
                Ambev para microsserviços
            </p>
            <div class="border-b border-gray-200 mt-2 mb-2"></div>

            <Experience
              position="Desenvolvedor Junior (Nível II)"
              company="Ambev Tech"
              imgUrl="dwlAmbev.jpeg"
              period="Tempo integral"
              startDate="Outubro 2021"
              finalDate="Julho 2022"
            />
            <p class="text-gray-600">
              • Idealização e desenvolvimento de automações em Python com MongoDb
                e FastAPI, utilizando DataDog para controle de logs.
            </p>
            <p class="text-gray-600">
              • Manutenção de automações em C# .NET 6 baseado em microsserviços
                usando ServiceBus.
            </p>

            <div class="border-b border-gray-200 mt-2 mb-2"></div>

            <Experience
              position="Desenvolvedor Junior (Nível I)"
              company="Ambev Tech"
              imgUrl="dwlAmbev.jpeg"
              period="Tempo integral"
              startDate="Novembro 2020"
              finalDate="Outubro 2021"
            />
            <p class="text-gray-600">
              • Idealização e desenvolvimento de automações e API's em Python com o
                objetivo de reduzir o volume de chamados dos clientes B2B da Ambev.
                Utilizei tecnologias como MongoDB, FastAPI e DataDog. Com essa ação
                minimizamos o impacto de aproximadamente 240 mil clientes B2B, o que
                resultou em uma redução significativa no número de chamados abertos.
            </p>

            <div class="border-b border-gray-200 mt-2 mb-2"></div>

            <Experience
              position="Estágio Desenvolvedor"
              company="HBSIS Soluções em TI Ltda"
              imgUrl="hbsis.jpeg"
              period="Meio periodo"
              startDate="Novembro 2019"
              finalDate="Outubro 2020"
            />
            <p class="text-gray-600">
              • Participação no programa Padawans, conceitos de programação,
                versionamento e trabalho em equipe, com metodologia Scrum.
            </p>
            <p class="text-gray-600">
              • Desenvolvimento de projeto de avalição, um protótipo de banco virtual,
                utilizando Python com Flask, banco de dados PostgreSQL e Vue.js no
                Frontend.
            </p>
          </div>
          <!-- Start Experience Block -->

          <div class="pl-2 pr-2 pb-5">
            <div class="border-t border-gray-200"></div>
          </div>

          <div class="block-section p-2">
            <!-- Start Education Block -->
            <h2 class="block-title text-xl mb-1">Educação</h2>

            <Education
              course="Bacharelado Engenharia de Software"
              university="Unicesumar"
              startDate="Janeiro de 2022"
              finalDate="Dezembro de 2025"
            />

            <div class="border-b border-gray-200 mt-2 mb-2"></div>

            <Education
              course="Curso Técnico Integrado, Informática"
              university="Cedup Hermann Hering"
              startDate="Janeiro de 2018"
              finalDate="Dezembro de 2020"
            />
          </div>
          <!-- Start Education Block -->
        </div>
      </div>
    </div>
  </div>
</template>
