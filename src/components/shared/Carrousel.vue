<template>
<link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css"  rel="stylesheet" />
<div id="indicators-carousel" class="relative w-full h-full" data-carousel="">
    <!-- Carousel wrapper -->
    <div class="relative overflow-hidden rounded-lg md:h-96 bg-neutral-800" style="height: 600px;">
        <div class="duration-700 ease-in-out" data-carousel-item="active">
            <template v-if="isVideo(firstImage.url)">
                <video class="absolute block w-60 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" controls>
                    <source :src="'/images/' + firstImage.url" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </template>
            <template v-else>
                <img :src="'/images/' + firstImage.url" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2" alt="...">
            </template>
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item v-for="image in imageList">
            <template v-if="isVideo(image.url)">
                <video :src="'/images/' + image.url" type="video/mp4" controls class="absolute block w-80 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></video>
            </template>
            <template v-else>
                <img :src="'/images/' + image.url" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </template>
         </div>
    </div>

    <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" :aria-label="`Slide ` + firstImage.id" :data-carousel-slide-to="'' + firstImage.id"></button>
        <button v-for="image in imageList" type="button" class="w-3 h-3 rounded-full" aria-current="false" :aria-label="`Slide ` + image.id" :data-carousel-slide-to="'' + image.id"></button>
    </div>

    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>

    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
</template>


<script>
export default {
    props: {
        prefix: String,
        images: String
    },
    methods: {
        isVideo(url) {
            const extension = url.split(".").pop().toLowerCase();
            return extension === "mp4";
        },
    },
    computed: {
        firstImage(){
            let images = this.images.split(";");
            let firstImage = images[0];
            return {id: 0, url: this.prefix + '' + firstImage};
        },
        imageList(){
            let images = this.images.split(";");
            let objectImages = [];
            for (let i=1; i < images.length; i++) {
                if (images[i] != ""){
                    objectImages.push({id: i, url: this.prefix + '' + images[i]})
                }
            }
            console.log(objectImages)
            return objectImages;
        }
    }
}
</script>