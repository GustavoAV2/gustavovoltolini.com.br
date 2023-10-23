<template>
  <div class="bg-gray-100 antialiased rounded-lg w-auto inline-block">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
    />
    <div class="main-container">
      <div class="overflow-hidden">
        <!-- Start User Block -->
        <div class="pt-2 pb-2 relative text-center">
          <div class="text-3xl font-semibold mb-1.5">Gustavo Voltolini</div>
          <div class="text-sm text-gray-400 mb-7">Backend Developer</div>
          <div class="flex group justify-center items-center">
            <button class="download-btn">Download CV</button>
            <button class="download-btn-icon">
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="p-7 pt-2 block-section flow-root">
          <!-- Start Skills Block -->
          <h2 class="block-title text-xl mb-5">Habilidades:</h2>

          <div class="flex flex-row justify-between">
            <div class="flex flex-col items-center">
              <i class="devicon-git-plain colored text-5xl"></i>
              <span class="skill-tag">Git</span>
            </div>
            <div class="flex flex-col items-center">
              <div>
                <i class="devicon-csharp-plain colored text-5xl"></i>
              </div>
              <span class="skill-tag">C#</span>
            </div>
            <div class="flex flex-col text-center">
              <i class="devicon-python-plain colored text-5xl"></i>

              <span class="skill-tag">Python</span>
            </div>

            <div class="flex flex-col text-center">
              <i class="devicon-dotnetcore-plain colored text-5xl"></i>
              <span class="skill-tag">.NET</span>
            </div>

            <div class="flex flex-col text-center">
              <i class="devicon-vuejs-plain colored text-5xl"></i>
              <span class="skill-tag">Vue</span>
            </div>

            <div class="flex flex-col text-center">
              <i class="devicon-mysql-plain colored text-5xl"></i>
              <span class="skill-tag">SQL</span>
            </div>

            <div class="flex flex-col">
              <i class="devicon-html5-plain colored text-5xl"></i>
              <span class="skill-tag">HTML/CSS</span>
            </div>
          </div>
        </div>
        <!-- End Skills Block -->
      </div>

      <div class="space-y-5 lg:col-span-2">
        <div class="p-7 pb-0 block-section">
          <!-- Start About Me Block -->
          <h2 class="block-title text-xl">Sobre</h2>
          <p class="text-gray-600 mb-5">
            Desenvolvedor Back-End há mais de três anos, apaixonado por desafios e em busca
            constante de evolução. Especializado em Python e .NET, participei do desenvolvimento de
            projetos que impactaram mais de 240 mil clientes. Atualmente, sou membro da equipe
            responsável pelo ERP Gestor da Ambev, que gerencia o fluxo de pedidos de mais de 170
            franquias em todo o Brasil.
          </p>

          <div class="flex flex-col space-y-4">
            <ul class="flex space-x-5">
              <li>
                <a href="https://www.linkedin.com/in/gustavo-voltolini/" class="social-link-hover">
                  <i class="bx bxl-linkedin text-2xl"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/GustavoAV2" class="social-link-hover">
                  <i class="bx bxl-github text-2xl"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="border-t border-gray-200 my-5"></div>
        </div>
        <!-- End About Me Block -->

        <div class="p-7 pt-2 block-section">
          <!-- Start Experience Block -->
          <h2 class="block-title text-xl mb-5">Experiência</h2>
          <div class="mb-5 item-section">
            <div class="company-logo" style="background-color: #1da1f2">
              <i class="bx bxl-twitter text-3xl"></i>
            </div>

            <div class="w-full space-y-5">
              <div class="font-medium">Desenvolvedor Pleno</div>

              <div class="flex flex-row justify-between">
                <div class="flex flex-col items-center align-middle">
                  <div>
                    <img
                      src="../assets/images/empresas/dwlAmbev.jpeg"
                      alt=""
                      class="rounded-full"
                    />
                    <span>Ambev Tech</span>
                  </div>
                </div>
                <div class="flex flex-col">
                  <div class="job-item-badge">Tempo integral</div>
                  <div class="flex item-header-info">
                    <div class="pr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <span>Julho 2022 – O momento</span>
                  </div>
                </div>
              </div>
            </div>

            <p class="text-gray-600">
              • Desenvolvimento do Megatron, uma solução em C# .NET 6 que automatiza a resolução de
              chamados dos clientes da Ambev. Esse produto coleta, analisa e trata chamados sem
              intervenção humana durante todo o processo. para microsserviços.
            </p>
            <br />
            <p class="text-gray-600">
              • Manutenção do ERP Gestor, uma aplicação web que atende as necessidades de mais de
              170 franquias da Ambev, com mais de 60.000 pontos de vendas atendidos. Também
              trabalhando na migração de funcionalidades legadas para microsserviços.
            </p>

            <div class="border-b border-gray-200 mt-5"></div>
          </div>

          <div class="mb-5 item-section">
            <div class="company-logo" style="background-color: #0061ff">
              <i class="bx bxl-dropbox text-3xl"></i>
            </div>

            <div class="w-full space-y-5">
              <div class="font-medium">Desenvolvedor Junior (Nível II)</div>
              <div class="flex flex-row justify-between">
                <div class="flex flex-col items-center align-middle">
                  <div>
                    <img
                      src="../assets/images/empresas/dwlAmbev.jpeg"
                      alt=""
                      class="rounded-full"
                    />
                    <span>Ambev Tech</span>
                  </div>
                </div>
                <div class="flex flex-col">
                  <div class="job-item-badge">Tempo integral</div>
                  <div class="flex item-header-info">
                    <div class="pr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <span>Outubro 2021 – Julho 2022</span>
                  </div>
                </div>
              </div>
              <p class="text-gray-600">
                • Idealização e desenvolvimento do Marvin 2.0 em Python, MongoDb, FastAPI, DataDog e
                processamento assíncrono. O Marvin 2.0 automatiza análises e resoluções de cenários
                específicos, resultando em mais de 42.000 horas economizadas e mais de 300
                requisições diárias atendidas.
              </p>
              <p class="text-gray-600">
                • Manutenção e aprendizado de C# .NET para o Mesh, plataforma de integração com o
                Bees Care.
              </p>
              <div class="border-b border-gray-200"></div>
            </div>
          </div>

          <div class="item-section">
            <div class="company-logo" style="background-color: #fc4f08">
              <i class="bx bxl-blogger text-3xl"></i>
            </div>

            <div class="w-full space-y-5">
              <div class="font-medium">Desenvolvedor Junior I</div>
              <div class="flex flex-row justify-between">
                <div class="flex flex-col items-center align-middle">
                  <div>
                    <img
                      src="../assets/images/empresas/dwlAmbev.jpeg"
                      alt=""
                      class="rounded-full"
                    />
                    <span>Ambev Tech</span>
                  </div>
                </div>
                <div class="flex flex-col">
                  <div class="job-item-badge">Tempo integral</div>
                  <div class="flex item-header-info">
                    <div class="pr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <span>Novembro 2020 – Outubro 2021</span>
                  </div>
                </div>
              </div>
              <p class="text-gray-600">
                • Desenvolvimento de automações para o time de suporte, reduzindo o volume de
                chamados abertos pelos clientes B2B da Ambev.
              </p>
              <p class="text-gray-600">
                • Projeto Marvin, utilizando Python, MongoDB, FastAPI e DataDog, resultando em uma
                redução significativa no número de chamados e minimizando o impacto em até 240.000
                clientes.
              </p>
            </div>
            <div class="border-b border-gray-200 mt-5 mb-5"></div>
          </div>

          <div class="item-section">
            <div class="company-logo" style="background-color: #fc4f08">
              <i class="bx bxl-blogger text-3xl"></i>
            </div>

            <div class="w-full space-y-5">
              <div class="font-medium">Estágio Desenvolvedor</div>
              <div class="flex flex-row justify-between">
                <div class="flex flex-col items-center align-middle">
                  <div>
                    <img
                      src="../assets/images/empresas/hbsis.jpeg"
                      alt=""
                      class="rounded-full h-11"
                    />
                    <span>HBSIS Soluções em TI Ltda</span>
                  </div>
                </div>
                <div class="flex flex-col">
                  <div class="job-item-badge">Tempo integral</div>
                  <div class="flex item-header-info">
                    <div class="pr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <span>Novembro 2019 – Outubro 2020</span>
                  </div>
                </div>
              </div>
              <p class="text-gray-600">
                • Participação no programa Padawans, aprendendo conceitos de programação,
                versionamento e trabalho em equipe com a metodologia Scrum.
              </p>
              <p class="text-gray-600">
                • Desenvolvimento de um protótipo de banco virtual utilizando Python com Flask,
                banco de dados PostgreSQL e Vue.js no frontend.
              </p>
            </div>
          </div>
        </div>
        <!-- Start Experience Block -->

        <div class="p-7 pt-2 block-section">
          <!-- Start Education Block -->
          <h2 class="block-title text-xl mb-5">Educação</h2>
          <div class="mb-5 item-section">
            <div class="w-full space-y-5">
              <div class="space-y-1.5">
                <div class="font-medium">Curso Técnico Integrado, Informática</div>
                <div class="flex flex-row justify-between">
                  <div class="flex flex-col">
                    <div class="item-header-info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                      </svg>
                      <span>Cedup Hermann Hering</span>
                    </div>
                  </div>
                  <div class="item-header-info">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span>Janeiro de 2018 - Dezembro de 2020</span>
                  </div>
                </div>
              </div>
              <div class="border-b border-gray-200"></div>
            </div>
          </div>

          <div class="item-section">
            <div class="w-full space-y-5">
              <div class="space-y-1.5">
                <div class="font-medium">Curso Técnico Integrado, Informática</div>
                <div class="flex flex-row justify-between">
                  <div class="flex flex-col">
                    <div class="item-header-info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                      </svg>
                      <span>Cedup Hermann Hering</span>
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <div class="item-header-info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <span>Janeiro de 2018 - Dezembro de 2020</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-b border-gray-200"></div>
            </div>
          </div>
        </div>
        <!-- Start Education Block -->
      </div>
    </div>
  </div>
</template>
