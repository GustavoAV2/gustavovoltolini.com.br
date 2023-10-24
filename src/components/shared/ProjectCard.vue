<script>
export default {
  props: {
    name: String,
    description: String,
    rawTags: String,
  },
  data() {
    return {
      tags: [],
    };
  },
  methods: {},
  created() {
    this.tags = this.rawTags.split(",");
    console.log(this.tags);
  },
};
</script>

<template>
  <div
    class="overflow-hidden rounded-3xl shadow-2xl shadow-black/30"
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
          srcset="
            /_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Fmateusfg7%2Fqrcode-generator%2Fmain%2F.github%2Fthumbnail.png&amp;w=3840&amp;q=75 1x
          "
          src="/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Fmateusfg7%2Fqrcode-generator%2Fmain%2F.github%2Fthumbnail.png&amp;w=3840&amp;q=75"
          style="color: transparent"
        />
      </div>
      <div class="flex flex-1 flex-col p-5">
        <div>
          <div
            class="mb-10 flex flex-col items-center gap-5 text-2xl md:mb-4 md:flex-row"
          >
            <h2 class="font-bold">{{ name }}</h2>
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
                <path
                  d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                ></path></svg></span
            ><span class="flex items-center gap-3"
              ><span class="text-xl hover:cursor-pointer"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  class="hover:text-[#4FC08D]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Vue.js</title>
                  <title></title>
                  <path
                    d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"
                  ></path></svg></span
              ><span class="text-xl hover:cursor-pointer"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  class="hover:text-[#358EF1]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Typescript</title>
                  <title></title>
                  <path
                    d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
                  ></path></svg></span
              ><span class="text-xl hover:cursor-pointer"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  class="hover:text-[#FFC119]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Vite</title>
                  <title></title>
                  <path
                    d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z"
                  ></path></svg></span
              ><span class="text-xl hover:cursor-pointer"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  class="hover:text-[#38BDF8]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Tailwind CSS</title>
                  <title></title>
                  <path
                    d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
                  ></path></svg></span
            ></span>
          </div>
          <p class="text-justify md:text-left">
            {{ description }}
          </p>
          <div class="mt-4 hidden flex-wrap items-center gap-2 md:flex">
            <div v-for="projectTag in tags">
              <span
                class="rounded-xl bg-neutral-700/10 px-2 py-1 text-sm text-neutral-700"
              >
                {{ projectTag }}
              </span>
            </div>
          </div>
        </div>

        <div class="mt-9 flex flex-1 items-end justify-center gap-6">
          <a
            href="https://github.com/mateusfg7/qrcode-generator"
            target="_blank"
            rel="noreferrer"
            class="flex items-center gap-2 rounded-2xl border border-[#181717] p-4 text-[#181717] hover:bg-[#181717] hover:text-[#F6F8FA]"
            >Repository
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
              ></path></svg></a
          ><a
            href="https://qrcode.mateusf.com"
            target="_blank"
            rel="noreferrer"
            class="flex items-center gap-2 rounded-2xl border border-blue-700 bg-blue-700/10 p-4 text-blue-700 hover:bg-blue-700 hover:text-neutral-50"
            >Website
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
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path
                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
              ></path></svg
          ></a>
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
