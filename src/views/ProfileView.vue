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
      // If you don't know the name or want to use
      // the webserver default set name = ''
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
                Desenvolvedor Back-End há mais de três anos, apaixonado por
                desafios e em busca constante de evolução. Especializado em
                Python e .NET, participei do desenvolvimento de projetos que
                impactaram mais de 240 mil clientes. Atualmente, sou membro da
                equipe responsável pelo ERP Gestor da Ambev, que gerencia o
                fluxo de pedidos de mais de 170 franquias em todo o Brasil.
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
              period="Tempo integral"
              startDate="Julho 2022"
              finalDate="O momento"
            />
            <p class="text-gray-600">
              • Desenvolvimento do Megatron, uma solução em C# .NET 6 que
              automatiza a resolução de chamados dos clientes da Ambev. Esse
              produto coleta, analisa e trata chamados sem intervenção humana
              durante todo o processo. para microsserviços.
            </p>
            <p class="text-gray-600">
              • Manutenção do ERP Gestor, uma aplicação web que atende as
              necessidades de mais de 170 franquias da Ambev, com mais de 60.000
              pontos de vendas atendidos. Também trabalhando na migração de
              funcionalidades legadas para microsserviços.
            </p>

            <div class="border-b border-gray-200 mt-2 mb-2"></div>

            <Experience
              position="Desenvolvedor Junior (Nível II)"
              company="Ambev Tech"
              period="Tempo integral"
              startDate="Outubro 2021"
              finalDate="Julho 2022"
            />
            <p class="text-gray-600">
              • Idealização e desenvolvimento do Marvin 2.0 em Python, MongoDb,
              FastAPI, DataDog e processamento assíncrono. O Marvin 2.0
              automatiza análises e resoluções de cenários específicos,
              resultando em mais de 42.000 horas economizadas e mais de 300
              requisições diárias atendidas.
            </p>
            <p class="text-gray-600">
              • Manutenção e aprendizado de C# .NET para o Mesh, plataforma de
              integração com o Bees Care.
            </p>

            <div class="border-b border-gray-200 mt-2 mb-2"></div>

            <Experience
              position="Desenvolvedor Junior (Nível I)"
              company="Ambev Tech"
              period="Tempo integral"
              startDate="Novembro 2020"
              finalDate="Outubro 2021"
            />
            <p class="text-gray-600">
              • Desenvolvimento de automações para o time de suporte, reduzindo
              o volume de chamados abertos pelos clientes B2B da Ambev.
            </p>
            <p class="text-gray-600">
              • Projeto Marvin, utilizando Python, MongoDB, FastAPI e DataDog,
              resultando em uma redução significativa no número de chamados e
              minimizando o impacto em até 240.000 clientes.
            </p>

            <div class="border-b border-gray-200 mt-2 mb-2"></div>

            <Experience
              position="Estágio Desenvolvedor"
              company="HBSIS Soluções em TI Ltda"
              period="Meio periodo"
              startDate="Novembro 2019"
              finalDate="Outubro 2020"
            />
            <p class="text-gray-600">
              • Participação no programa Padawans, aprendendo conceitos de
              programação, versionamento e trabalho em equipe com a metodologia
              Scrum.
            </p>
            <p class="text-gray-600">
              • Desenvolvimento de um protótipo de banco virtual utilizando
              Python com Flask, banco de dados PostgreSQL e Vue.js no frontend.
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
