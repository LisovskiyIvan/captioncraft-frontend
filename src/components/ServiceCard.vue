<script setup lang="ts">
import Button from 'primevue/button'


defineProps<{
    title: string,
    description: string,
    link: string,
    lottie: object
}>();

</script>


<template>
    <div class="bg-blue text-black h-[650px] flex flex-col items-center rounded-lg justify-between" >
       <h2 class="text-3xl mt-10 font-bold text-center">{{ title }}</h2>
       <Vue3Lottie :animationData="lottie" :height=300 class="my-5"></Vue3Lottie>
       <p class="text-2xl my-10 text-center px-4">{{ description }}</p>
       <Button label="Опробовать" as="router-link" :to="link" raised class="bg-black text-blue text-2xl px-5 py-3 my-5 hover:bg-white hover:text-black duration-300 transition-all hover:scale-110 " ></Button>
    </div>
</template>