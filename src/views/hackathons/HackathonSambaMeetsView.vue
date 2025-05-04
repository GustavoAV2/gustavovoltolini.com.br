<script>
import HeaderComponent from "../../components/shared/Header.vue";
import HackathonInformation from "../../components/shared/HackathonInformation.vue";
import Carrousel from "../../components/shared/Carrousel.vue";

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
  components: { HeaderComponent, HackathonInformation, Carrousel },
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
      class="flex flex-col pt-[0.7rem] md:p-40 pb-3 md:pt-[0.7rem] text-center text-xl w-full"
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
          class="md:w-11/12 shadow-md"
        />

        <dt
          class="opacity-100 font-bold uppercase tracking-widest text-xs mt-1 mb-1 text-left"
        >
          Habilidades:
        </dt>

        <img
          src="/images/SambaMeets/7FindProject.png"
          alt="Buscar projetos"
          class="md:w-11/12 shadow-md"
        />

        <dt
          class="opacity-100 font-bold uppercase tracking-widest text-xs mt-1 mb-1 text-left"
        >
          Projetos:
        </dt>
        <img
          src="/images/SambaMeets/8FindTalent.png"
          alt="Buscar talentos"
          class="md:w-11/12 shadow-md"
        />

        <dt
          class="opacity-100 font-bold uppercase tracking-widest text-xs mt-1 mb-1 text-left"
        > 
          Talentos:
        </dt>

        <img
          src="/images/SambaMeets/9FindTalent.png"
          alt="Buscar talentos"
          class="md:w-11/12 shadow-md"
        />
      </div>
      
      <div class="pt-[2rem] flex justify-center " id="media">
        <h2 class="opacity-100 font-bold uppercase tracking-widest text-sm md:text-lg mb-1">
          Mídias do dia do evento 
        </h2>
      </div>
      
      <Carrousel 
      prefix="SambaMeets/Memories/"
      images="SambaMeets-Hacka-Grupo.png;IMG_6123.MP4;"
      />

      <div class="flex flex-row text-left mt-2">
        <a href="/hackathons" class="cursor-pointer hover:text-cyan-500">Voltar à pagina anterior...</a>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes tonext {
  75% {
    left: 0;
  }
  95% {
    left: 100%;
  }
  98% {
    left: 100%;
  }
  99% {
    left: 0;
  }
}

@keyframes tostart {
  75% {
    left: 0;
  }
  95% {
    left: -300%;
  }
  98% {
    left: -300%;
  }
  99% {
    left: 0;
  }
}

@keyframes snap {
  96% {
    scroll-snap-align: center;
  }
  97% {
    scroll-snap-align: none;
  }
  99% {
    scroll-snap-align: none;
  }
  100% {
    scroll-snap-align: center;
  }
}

ol, li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.carousel {
  position: relative;
  padding-top: 75%;
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;
}

.carousel__viewport {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  counter-reset: item;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.carousel__slide {
  position: relative;
  flex: 0 0 100%;
  width: 100%;
  background-color: #f99;
  counter-increment: item;
}

.carousel__slide:nth-child(even) {
  background-color: #99f;
}

.carousel__slide:before {
  content: counter(item);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-40%,70px);
  color: #fff;
  font-size: 2em;
}

.carousel__snapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
}

@media (hover: hover) {
  .carousel__snapper {
    animation-name: tonext, snap;
    animation-timing-function: ease;
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }

  .carousel__slide:last-child .carousel__snapper {
    animation-name: tostart, snap;
  }
}

@media (prefers-reduced-motion: reduce) {
  .carousel__snapper {
    animation-name: none;
  }
}

.carousel:hover .carousel__snapper,
.carousel:focus-within .carousel__snapper {
  animation-name: none;
}

.carousel__navigation {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
}

.carousel__navigation-list,
.carousel__navigation-item {
  display: inline-block;
}

.carousel__navigation-button {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #333;
  background-clip: content-box;
  border: 0.25rem solid transparent;
  border-radius: 50%;
  font-size: 0;
  transition: transform 0.1s;
}

.carousel::before,
.carousel::after,
.carousel__prev,
.carousel__next {
  position: absolute;
  top: 0;
  margin-top: 37.5%;
  width: 4rem;
  height: 4rem;
  transform: translateY(-50%);
  border-radius: 50%;
  font-size: 0;
  outline: 0;
}

.carousel::before,
.carousel__prev {
  left: -1rem;
}

.carousel::after,
.carousel__next {
  right: -1rem;
}

.carousel::before,
.carousel::after {
  content: '';
  z-index: 1;
  background-color: #333;
  background-size: 1.5rem 1.5rem;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff;
  font-size: 2.5rem;
  line-height: 4rem;
  text-align: center;
  pointer-events: none;
}

.carousel::before {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='0,50 80,100 80,0' fill='%23fff'/%3E%3C/svg%3E");
}

.carousel::after {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='100,50 20,100 20,0' fill='%23fff'/%3E%3C/svg%3E");
}
</style>