<script>
import HeaderComponent from "../../components/shared/Header.vue";
import HackathonInformation from "../../components/shared/HackathonInformation.vue";

export default {
  data() {
    return {
      name: "Hackathon Samba Meets Waltz",
      repoUrl: "https://github.com/GustavoAV2/nexus-api",
      teamMembers: {
        members: [
          { user: "GustavoAV2", name: "Gustavo Antunes Voltolini" },
          { user: "jplrhae", name: "Joshua Patrick Loesch Alves" },
          { user: "rafaeldesanta66", name: "Rafael Mendes de Carvalho" },
        ],
      },
      challenge:
        "Empresas austríacas especializadas em microeletrônica e semicondutores buscam talentosos colaboradores brasileiros para integrar suas equipes. Neste desafio hackathon, os participantes precisam criar uma solução tecnológica que auxilie essas empresas austríacas na identificação desses profissionais, aqui no país.",
    };
  },
  components: { HeaderComponent, HackathonInformation },
};
</script>

<template>
  <HeaderComponent></HeaderComponent>

  <div class="p-5 md:p-20 md:pt-5">
    <HackathonInformation
      :name="name"
      :repoUrl="repoUrl"
      :team="JSON.stringify(this.teamMembers)"
      :challenge="challenge"
      youtubeUrl="k4Ry8DG0eR4"
      position="3"
      date="05/09/2023"
    />

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
