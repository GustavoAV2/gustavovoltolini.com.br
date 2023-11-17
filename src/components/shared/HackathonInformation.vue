<script>
export default {
  props: {
    name: String,
    repoUrl: String,
    youtubeUrl: String,
    challenge: String,
    position: String,
    date: String,
    team: String,
  },
  data() {
    return {
      members: [],
      classPosition: "",
      isPositioned: true,
    };
  },
  created() {
    this.members = JSON.parse(this.team).members;
    if (this.position == "1") {
      this.classPosition = "first-position";
    } else if (this.position == "2") {
      this.classPosition = "second-position";
    } else if (this.position == "3") {
      this.classPosition = "third-position";
    } else {
      this.isPositioned = false;
    }
  },
};
</script>

<template>
  <div>
    <div class="flex flex-col justify-center text-center mb-10">
      <h1
        class="text-2xl md:text-4xl lg:text-4xl font-bold leading-tight md:leading-[1em]"
      >
        {{ name }}
      </h1>
      <template v-if="isPositioned">
        <h1
          class="opacity-100 font-bold uppercase tracking-widest text-xs pt-[0.7rem]"
        >
          Colocação:
          <position :class="classPosition">{{ position }}º Lugar</position>
        </h1>
      </template>

      <template v-else>
        <h1
          class="opacity-100 font-bold uppercase tracking-widest text-xs pt-[0.7rem]"
        >
          Colocação:
          <position>Não posicionado</position>
        </h1>
      </template>

      <h1
        class="opacity-100 font-bold uppercase tracking-widest text-xs pt-[0.7rem]"
      >
        Data: {{ date }}
      </h1>
    </div>

    <div
      class="flex flex-col md:flex-row md:pt-[0.7rem] md:p-40 md:pb-[0.7rem]"
    >
      <div class="mr-4">
        <div class="w-max pt-[0.7rem]">
          <a
            :href="'https://www.youtube.com/watch?v=' + youtubeUrl"
            target="_blank"
            rel="noreferrer"
            class="flex items-center gap-2 rounded-2xl p-4 m-0 pt-0 pb-0 border border-[#181717] text-[#181717] hover:bg-[#181717] hover:text-[#F6F8FA]"
          >
            Video apresentação
            <img src="/images/youtube.svg" height="16" width="16" alt="" />
          </a>
        </div>

        <div class="w-max pt-[0.7rem]">
          <a
            :href="'' + repoUrl"
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
              <li class="flex items-center space-x-2" v-for="member in members">
                <div
                  class="w-7 h-7 flex-shrink-0 bg-gray-100 rounded-full overflow-hidden"
                >
                  <img
                    class="object-cover"
                    :src="'https://github.com/' + member.user + '.png'"
                    :alt="'' + member.name"
                  />
                </div>
                <a
                  class="hover:underline"
                  target="_blank"
                  :href="'//github.com/' + member.user"
                  >{{ member.name }}</a
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
          {{ challenge }}
        </p>
      </div>
    </div>
  </div>
</template>
