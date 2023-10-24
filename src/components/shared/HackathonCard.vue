<script>
export default {
  props: {
    name: String,
    projectName: String,
    description: String,
    position: String,
    srcImage: String,
    date: String,
  },
  data() {
    return {
      srcPath: "/src/assets/images/",
      classPosition: "",
      numberPosition: "",
    };
  },
  methods: {},
  created() {
    this.srcPath = this.srcPath + this.srcImage;
    if (this.position == "first") {
      this.numberPosition = "1º";
      this.classPosition = "first-position";
    } else if (this.position == "second") {
      this.numberPosition = "2º";
      this.classPosition = "second-position";
    } else if (this.position == "third") {
      this.numberPosition = "3º";
      this.classPosition = "third-position";
    } else {
      this.numberPosition = "Não posicionado";
    }
  },
};
</script>

<template>
  <div
    class="overflow-hidden rounded-3xl shadow-2xl shadow-black/30 max-w-lg md:w-96 m-4"
    style="
      will-change: transform;
      transition: all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s;
      transform: perspective(1000px) rotateX(0deg) rotateY(0deg)
        scale3d(1, 1, 1);
    "
  >
    <div class="flex h-full flex-col bg-neutral-100">
      <div class="h-56 w-full">
        <img
          alt="Project image"
          loading="lazy"
          width="2700"
          height="2025"
          decoding="async"
          data-nimg="1"
          class="h-full w-full object-cover object-top"
          :src="srcPath"
          style="color: transparent"
        />
      </div>
      <div class="flex flex-1 flex-col p-5">
        <div>
          <div
            class="mb-10 flex flex-col items-center gap-5 text-2xl md:mb-4 md:flex-row"
          >
            <div class="flex flex-col">
              <h2 class="font-bold">{{ name }}</h2>
              <p class="text-justify text-sm md:text-left">{{ date }}</p>
            </div>
            <span class="hidden md:inline"
              ><svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
              </svg>
            </span>
            <span class="flex items-center gap-3">
              <span :class="classPosition">{{ numberPosition }} Lugar</span>
            </span>
          </div>

          <p class="text-justify md:text-left">
            <strong>
              {{ projectName }}
            </strong>
          </p>
          <p class="text-justify md:text-left">
            {{ description }}
          </p>
        </div>

        <div class="mt-9 flex flex-1 items-end justify-center gap-6">
          <a
            href="https://github.com/GustavoAV2/"
            target="_blank"
            rel="noreferrer"
            class="flex items-center gap-2 rounded-2xl border border-[#181717] p-4 text-[#181717] hover:bg-[#181717] hover:text-[#F6F8FA]"
            >Ver mais
          </a>
        </div>
      </div>
    </div>
    <div
      class="glare-wrapper"
      style="
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 1.5rem;
        -webkit-mask-image: -webkit-radial-gradient(center, white, black);
        pointer-events: none;
      "
    >
      <div
        class="glare"
        style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: 0% 0%;
          pointer-events: none;
          width: 753.055px;
          height: 753.055px;
          transform: rotate(-180deg) translate(-50%, -50%);
          opacity: 0;
          background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0) 0%,
            rgb(255, 255, 255) 100%
          );
          transition: opacity 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s;
        "
      ></div>
    </div>
  </div>
</template>
