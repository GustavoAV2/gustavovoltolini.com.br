<script>
export default {
  methods: {
    isMobile() {
      return screen.width <= 760;
    },
  },
  data() {
    return {
      skillsList: [
        {
          skillName: "Git",
          skillIcon: "devicon-git-plain",
        },
        {
          skillName: "C#",
          skillIcon: "devicon-csharp-plain",
        },
        {
          skillName: "Python",
          skillIcon: "devicon-python-plain",
        },
        {
          skillName: "Flask",
          skillIcon: "devicon-flask-original",
        },
        {
          skillName: ".NET",
          skillIcon: "devicon-dotnetcore-plain",
        },
        {
          skillName: "Vue",
          skillIcon: "devicon-vuejs-plain",
        },
        {
          skillName: "SQL",
          skillIcon: "devicon-mysql-plain",
        },
        {
          skillName: "HTML/CSS",
          skillIcon: "devicon-html5-plain",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="block-section flow-root p-2 pb-0">
    <!-- Start Skills Block -->
    <h2 class="block-title text-xl">Habilidades</h2>
    <template v-if="!isMobile()">
      <div class="flex flex-row flex-wrap justify-between pt-2 pb-2">
        <div
          v-for="skill in skillsList"
          :key="skill.skillName"
          class="flex flex-col items-center"
        >
          <i :class="`${skill.skillIcon} colored text-5xl`"></i>
          <span class="skill-tag">{{ skill.skillName }}</span>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="flex flex-col">
        <div>
          <div class="flex flex-row justify-between pb-4">
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
              <i class="devicon-flask-original colored text-5xl"></i>
              <span class="skill-tag">Flask</span>
            </div>
          </div>
        </div>

        <div class="flex flex-row justify-between pb-2">
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

          <div class="flex flex-col text-center">
            <i class="devicon-html5-plain colored text-5xl"></i>
            <span class="skill-tag">HTML/CSS</span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
