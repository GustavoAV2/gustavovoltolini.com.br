<script>
import HeaderComponent from "../../components/shared/Header.vue";
import HackathonInformation from "../../components/shared/HackathonInformation.vue";

export default {
  data() {
    return {
      name: "Nasa Apps Challenge",
      repoUrl:
        "https://github.com/GustavoAV2/nasa-hackathon-open-science-discovery",
      teamMembers: {
        members: [
          { user: "GustavoAV2", name: "Gustavo Antunes Voltolini" },
          { user: "felipetomelin", name: "Felipe Tomelin" },
          { user: "gustavobruder", name: "Gustavo Baroni Bruder" },
          { user: "ViniciusNitzke", name: "Vinicius Emmanuel Nitzke" },
        ],
      },
      challenge:
        "Um mercado para projetos de ciência aberta. Existem muitos projetos e ferramentas diferentes de ciência aberta e de código aberto, mas nenhuma maneira eficiente de combinar os criadores do projeto com colaboradores interessados ​​que possuam as habilidades necessárias para contribuir. Seu desafio é criar uma solução que ajude as pessoas que procuram projetos de código aberto para trabalhar e os criadores de projetos que precisam de colaboradores qualificados a se encontrarem e se comunicarem.",
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
      youtubeUrl="IITf_3itfJ8"
      position=""
      date="09/10/2023"
    />

    <div
      class="flex flex-col pt-[0.7rem] md:p-40 md:pt-[0.7rem] text-center text-xl w-full"
    >
      <dt class="opacity-100 font-bold uppercase tracking-widest text-xs mb-1">
        Open Source Discovery (Solução apresentada)
      </dt>

      <p class="text-left">
        Plataforma de Colaboração entre profissionais e projetos sociais. Este
        projeto visa criar uma plataforma online que conecta instituições
        públicas e seus projetos sociais com colaboradores em potencial.
      </p>

      <strong>Funcionalidades Principais</strong>
      <ul>
        <li>
          Exploração, Filtragem e Pesquisa de Projetos Sociais: Nossos usuários
          podem facilmente explorar, filtrar e buscar projetos sociais,
          personalizando sua busca com tags que correspondam aos seus
          interesses.
        </li>
      </ul>
      <div class="flex justify-center">
        <img src="/images/NasaAppsChallenge/feed.png" alt="" class="md:w-4/5" />
      </div>
      <ul>
        <li>
          Cadastro de Colaboradores [Em desenvolvimento]: Os colaboradores podem
          criar perfis pessoais, onde e possivel listar suas habilidades e
          interesses. Isso possibilita a correspondência precisa de projetos com
          as preferências de cada colaborador.
        </li>
      </ul>
      <div class="flex justify-center">
        <img
          src="/images/NasaAppsChallenge/interests.png"
          alt=""
          class="md:w-4/5"
        />
      </div>
    </div>
  </div>
</template>
