<script>
import HeaderComponent from "../../components/shared/Header.vue";

export default {
  components: { HeaderComponent },
};
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <div class="p-2 w-full">
    <div class="p-5 flex flex-row justify-between">
      <a
        class="hidden md:flex font-medium hover:text-blue-600 hover:underline"
        href="/hackathons"
        >Voltar</a
      >
      <h1
        class="text-2xl md:text-4xl lg:text-4xl font-bold leading-tight md:leading-[1em] mb-10 undefined"
      >
        Hackathon Samba Meets Waltz
      </h1>
      <a
        href=""
        target="_blank"
        rel="noreferrer"
        class="flex items-center gap-2 rounded-2xl p-4 m-0 pt-0 pb-0 border border-[#181717] text-[#181717] hover:bg-[#181717] hover:text-[#F6F8FA]"
      >
        Repositorio
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          ></path>
        </svg>
      </a>
    </div>

    <div class="flex p-10 pt-2 pb-2">
      <div
        class="project_heading-description__eD8e9 pb-8 leading-relaxed max-w-[50rem] text-2xl"
      >
        <dt class="opacity-100 font-bold uppercase tracking-widest text-xs">
          Desafio proposto:
        </dt>
        <p>
          Empresas austríacas especializadas em microeletrônica e semicondutores
          buscam talentosos colaboradores brasileiros para integrar suas
          equipes. Neste desafio hackathon, os participantes precisam criar uma
          solução tecnológica que auxilie essas empresas austríacas na
          identificação desses profissionais, aqui no país.
        </p>
      </div>
      <div>
        <div class="col-span-6 lg:col-span-4">
          <dl class="">
            <dt class="opacity-100 font-bold uppercase tracking-widest text-xs">
              O que nossa solução faz:
            </dt>
            <dd class="text-xl pt-[0.7rem]">
              Facilitating remote collaboration by unifying workflows
            </dd>
          </dl>
        </div>
        <!-- <dl class="space-y-2 col-span-6 lg:col-span-4 mt-4">
          <dt class="opacity-100 font-bold uppercase tracking-widest text-xs">
            Stage
          </dt>
          <div class="mt-4">
            <div
              class="inline-block rounded-md px-3 py-2 uppercase tracking-widest text-xs font-semibold"
              style="
                background: rgba(45, 164, 78, 0.2);
                color: rgb(45, 164, 78);
              "
            >
              Napkin sketch
            </div>
          </div>
        </dl> -->
        <dl class="space-y-4 col-span-6 lg:col-span-4 mt-4">
          <dt class="opacity-100 font-bold uppercase tracking-widest text-xs">
            Quem participou deste projeto?
          </dt>
          <dd class="text-xl">
            <ul class="my-2 space-y-4">
              <li class="flex items-center space-x-2">
                <div
                  class="w-7 h-7 flex-shrink-0 bg-gray-100 rounded-full overflow-hidden"
                >
                  <img
                    class="object-cover"
                    src="https://github.com/GustavoAV2.png"
                    alt="Idan Gazit"
                  />
                </div>
                <a
                  class="hover:underline"
                  target="_blank"
                  href="//github.com/GustavoAV2"
                  >Gustavo Antunes Voltolini</a
                >
              </li>
              <li class="flex items-center space-x-2">
                <div
                  class="w-7 h-7 flex-shrink-0 bg-gray-100 rounded-full overflow-hidden"
                >
                  <img
                    class="object-cover"
                    src="https://github.com/jplrhae.png"
                    alt="Amelia Wattenberger"
                  />
                </div>
                <a
                  class="hover:underline"
                  target="_blank"
                  href="//github.com/jplrhae"
                  >Joshua Patrick Loesch Alves</a
                >
              </li>
              <li class="flex items-center space-x-2">
                <div
                  class="w-7 h-7 flex-shrink-0 bg-gray-100 rounded-full overflow-hidden"
                >
                  <img
                    class="object-cover"
                    src="https://github.com/rafaeldesanta66.png"
                    alt="Rafael Mendes"
                  />
                </div>
                <a
                  class="hover:underline"
                  target="_blank"
                  href="//github.com/rafaeldesanta66"
                  >Rafael Mendes de Carvalho</a
                >
              </li>
            </ul>
          </dd>
        </dl>
        <div class="lg:hidden">
          <dl class="space-y-2">
            <dt class="opacity-100 font-bold uppercase tracking-widest text-xs">
              Share
            </dt>
            <dd class="text-xl">
              <ul class="flex items-center space-x-4">
                <li>
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https://next.github.com/projects/workspaces/"
                    target="_blank"
                    aria-label="Share on Facebook"
                    ><svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                      ></path></svg
                  ></a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/intent/tweet?url=https://next.github.com/projects/workspaces/"
                    target="_blank"
                    aria-label="Share on Twitter"
                    ><svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      ></path></svg
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://next.github.com/projects/workspaces/"
                    target="_blank"
                    aria-label="Share on LinkedIn"
                    ><svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      ></path></svg
                  ></a>
                </li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </div>

    <div class="flex flex-col pt-6 md:pt-6 md:p-40 text-center text-xl">
      <dt class="opacity-100 font-bold uppercase tracking-widest text-xs mb-1">
        Nexus (Solução apresentada)
      </dt>
      <p class="text-left">
        Nexus conecta talentos no campo de microeletrônica e semicondutores a
        empresas em busca de seus talentos, enquanto também oferece uma
        comunidade ao redor deles. O usuário que procura conhecimento no campo,
        exposição a empresas ou contribuir para a comunidade pode acessar o
        aplicativo por meio de qualquer navegador.
      </p>
      <br>
      <p class="text-left">
        O usuário pode visualizar e criar novos projetos, adicionar novas
        etiquetas de habilidades, seguir outros usuários, ver seus seguidores e
        quem eles seguem, além de acessar seus perfis. Os projetos podem ser
        acessados pela comunidade se forem públicos, seja acessando o perfil de
        um usuário ou pesquisando por um projeto específico por meio do link
        "Encontrar Projetos" na barra de aplicativos. A comunidade é fortalecida
        à medida que os usuários criam projetos.
      </p>
      <br>
      <p class="text-left">
        Como uma empresa em busca de talentos, elas podem procurar por projetos
        da comunidade que tenham etiquetas de habilidades ou através da página
        "Encontrar Talentos". Esta página possibilita a busca por usuários
        através de etiquetas de habilidades, permitindo às empresas identificar
        usuários que têm as habilidades que estão procurando.
      </p>
    </div>
  </div>
</template>
