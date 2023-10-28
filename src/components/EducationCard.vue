<script>
export default {
  props: {
    course: String,
    university: String,
    startDate: String,
    finalDate: String,
  },
};
</script>

<template>
  <div class="item-section">
    <div class="w-full space-y-5">
      <div class="space-y-1.5">
        <div class="font-medium">{{ course }}</div>
        <div class="flex flex-row justify-between">
          <div class="flex flex-col">
            <div class="item-header-info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-6 6v-7.5l4-2.222"
                ></path>
              </svg>
              <span>{{ university }}</span>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="item-header-info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              <span>{{ startDate }} – {{ finalDate }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
