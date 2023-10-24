<script>
export default {
  data() {
    return {
      copied: false,
    };
  },
  methods: {
    copyToClipboard() {
      this.copied = true;
      navigator.clipboard.writeText("gustavoant.voltolini@gmail.com");
      setTimeout(() => {
        this.copied = false;
      }, 1000);
    },
  },
};
</script>

<template>
  <div
    class="flex-1 flex-col items-center align-middle justify-center text-xl pt-10"
  >
    <div class="flex flex-col text-center align-middle items-center pt-10">
      <div class="flex justify-center">
        <span class="rounded bg-opacity-10 p-1"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M224,56l-96,88L32,56Z" opacity="0.2"></path>
            <path
              d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"
            ></path></svg></span
        ><span>Email</span>
      </div>

      <div class="flex">
        <span>gustavoant.voltolini@gmail.com</span>
        <template v-if="!copied">
          <img
            src="../assets/images/icons/copy.png"
            alt=""
            id="copyImage"
            class="ml-2 h-7 w-7 cursor-pointer transition-opacity duration-150 eas opacity-50 hover:opacity-100"
            @click="copyToClipboard()"
          />
        </template>
        <template v-else>
          <img
            src="../assets/images/icons/check.png"
            alt=""
            id="checkedImage"
            class="ml-2 w-7 cursor-pointer transition-opacity duration-150"
            @click="copyToClipboard()"
          />
        </template>
      </div>
    </div>

    <div class="flex flex-col text-center align-middle items-center pt-10">
      <div class="flex">
        <span class="rounded bg-opacity-10 p-1"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path
              d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z"
              opacity="0.2"
            ></path>
            <path
              d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"
            ></path>
          </svg>
        </span>
        <span>Github</span>
      </div>
      <div class="contact-line">
        <a
          class="inline-flex items-end gap-px hover:underline"
          href="https://github.com/GustavoAV2"
          target="_blank"
          rel="external"
          ><span class="leading-none">Open profile</span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 256 256"
            class="text-sm"
          >
            <path
              d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"
            ></path></svg
        ></a>
      </div>
    </div>

    <div class="text-[#0A66C2] flex flex-col text-center items-center pt-10">
      <div class="flex">
        <span class="rounded bg-opacity-10 p-1"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path
              d="M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z"
              opacity="0.2"
            ></path>
            <path
              d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"
            ></path></svg></span
        ><span>Linkedin</span>
      </div>

      <div class="contact-line">
        <a
          class="inline-flex items-end gap-px hover:underline"
          href="https://www.linkedin.com/in/gustavo-voltolini/"
          target="_blank"
          rel="external"
          ><span class="leading-none">Open profile</span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 256 256"
            class="text-sm"
          >
            <path
              d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"
            ></path></svg
        ></a>
      </div>
    </div>

    <div class="text-[#E4405F] flex flex-col text-center items-center pt-10">
      <div class="flex">
        <span class="rounded bg-opacity-10 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path
              d="M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
              opacity="0.2"
            ></path>
            <path
              d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm64-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
            ></path>
          </svg>
        </span>
        <span>Instagram</span>
      </div>

      <div class="contact-line">
        <a
          class="inline-flex items-end gap-px hover:underline"
          href="https://www.instagram.com/gustavo_volt/"
          target="_blank"
          rel="external"
          ><span class="leading-none">Open profile</span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 256 256"
            class="text-sm"
          >
            <path
              d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"
            ></path></svg
        ></a>
      </div>
    </div>
  </div>
</template>
