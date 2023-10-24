<script>
export default {
  methods: {
    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<template>
  <div class="block-section flow-root p-2">
    <!-- Start Skills Block -->
    <h2 class="block-title text-xl">Habilidades</h2>

    <template v-if="!isMobile()">
      <div class="flex flex-row justify-between pt-2 pb-4">
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

        <div class="flex flex-row justify-between">
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
