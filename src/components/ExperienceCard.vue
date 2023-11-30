<script>
export default {
  props: {
    imgUrl: String,
    position: String,
    company: String,
    period: String,
    startDate: String,
    finalDate: String,
    text: Array,
  }
};
</script>

<template>
  <div class="item-section">
    <div class="w-full space-y-5">
      <div class="font-medium">{{ position }}</div>

      <div class="flex flex-row justify-between">
        <div class="flex flex-col items-center align-middle">
          <div>
            <img
              :src="'/images/' + imgUrl"
              alt=""
              class="rounded-full"
              style="max-width: 44px; max-height: 44px;"
            />
            <span>{{ company }}</span>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="job-item-badge">{{ period }}</div>
          <div class="flex item-header-info">
            <div class="pr-2">
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
            </div>
            <span>{{ startDate }} – {{ finalDate }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
