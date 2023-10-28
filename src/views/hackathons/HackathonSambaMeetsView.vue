<script>
import HeaderComponent from "../../components/shared/Header.vue";

export default {
  components: { HeaderComponent },
};
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <div class="p-5 md:p-20 md:pt-5">
    <div class="flex flex-row justify-center text-center">
      <h1
        class="text-2xl md:text-4xl lg:text-4xl font-bold leading-tight md:leading-[1em] mb-10"
      >
        Hackathon Samba Meets Waltz
      </h1>
    </div>

    <div
      class="flex flex-col md:flex-row md:pt-[0.7rem] md:p-40 md:pb-[0.7rem]"
    >
      <div class="mr-4">
        <div class="w-max mb-2">
          <a
            href="https://github.com/GustavoAV2/nexus-api"
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

        <dl class="col-span-6 lg:col-span-4 pt-[0.7rem] w-max">
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
      </div>

      <div class="pb-8 leading-relaxed text-2xl pt-[0.7rem]">
        <dt
          class="opacity-100 font-bold uppercase tracking-widest text-xs md:text-lg"
        >
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
    </div>

    <div
      class="flex flex-col pt-[0.7rem] md:p-40 md:pt-[0.7rem] text-center text-xl w-full"
    >
      <dt
        class="opacity-100 font-bold uppercase tracking-widest text-sm md:text-lg mb-1"
      >
        Nexus (Solução apresentada)
      </dt>
      <p class="text-left">
        Nexus conecta talentos no campo de microeletrônica e semicondutores a
        empresas em busca de seus talentos, enquanto também oferece uma
        comunidade ao redor deles. O usuário que procura conhecimento no campo,
        exposição a empresas ou contribuir para a comunidade pode acessar o
        aplicativo por meio de qualquer navegador.
      </p>
      <br />
      <p class="text-left">
        O usuário pode visualizar e criar novos projetos, adicionar novas
        etiquetas de habilidades, seguir outros usuários, ver seus seguidores e
        quem eles seguem, além de acessar seus perfis. Os projetos podem ser
        acessados pela comunidade se forem públicos, seja acessando o perfil de
        um usuário ou pesquisando por um projeto específico por meio do link
        "Encontrar Projetos" na barra de aplicativos. A comunidade é fortalecida
        à medida que os usuários criam projetos.
      </p>
      <br />
      <p class="text-left">
        Como uma empresa em busca de talentos, elas podem procurar por projetos
        da comunidade que tenham etiquetas de habilidades ou através da página
        "Encontrar Talentos". Esta página possibilita a busca por usuários
        através de etiquetas de habilidades, permitindo às empresas identificar
        usuários que têm as habilidades que estão procurando.
      </p>

      <div class="flex items-center justify-center">
        <img
          src="/images/SambaMeets/NexusMap.jpg"
          alt=""
          class="md:w-11/12 mt-2"
          width="100%"
        />
      </div>
      <br />

      <dt
        class="opacity-100 font-bold uppercase tracking-widest text-xs mb-1 text-left"
      >
        API Nexus:
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
      </p>

      <div class="flex flex-col items-center justify-center">
        <dt
          class="opacity-100 font-bold uppercase tracking-widest text-xs mt-1 mb-1 text-left"
        >
          Perfil:
        </dt>

        <img
          src="/images/SambaMeets/2Profile.png"
          alt="Perfil"
          class="md:md:w-11/12"
        />

        <dt
          class="opacity-100 font-bold uppercase tracking-widest text-xs mt-1 mb-1 text-left"
        >
          Habilidades:
        </dt>

        <img
          src="/images/SambaMeets/7FindProject.png"
          alt="Buscar projetos"
          class="md:md:w-11/12"
        />

        <dt
          class="opacity-100 font-bold uppercase tracking-widest text-xs mt-1 mb-1 text-left"
        >
          Projetos:
        </dt>
        <img
          src="/images/SambaMeets/8FindTalent.png"
          alt="Buscar talentos"
          class="md:md:w-11/12"
        />

        <dt
          class="opacity-100 font-bold uppercase tracking-widest text-xs mt-1 mb-1 text-left"
        >
          Talentos:
        </dt>

        <img
          src="/images/SambaMeets/9FindTalent.png"
          alt="Buscar talentos"
          class="md:md:w-11/12"
        />
      </div>
    </div>
  </div>
</template>
