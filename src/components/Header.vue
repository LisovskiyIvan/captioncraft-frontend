<script setup lang="ts">
import { onMounted, ref } from "vue";
import video from '../assets/video.json'
import Button from 'primevue/button';
import { useWindowSize } from '@vueuse/core';

const isUser = ref(false);
const { width } = useWindowSize();

onMounted(() => {
    const token = localStorage.getItem("token");
    if (token) {
        isUser.value = true
    }

})
</script>

<template>
    <div class="flex flex-col items-center w-[95%] sm:w-[50%]">
        <div class="">
            <Vue3Lottie :animationData="video" :height="width > 768 ? 400 : 300" :width="width > 768 ? 400 : 300"  />
        </div>
        <h1 class="text-5xl sm:mt-[5vh]">Caption Craft</h1> 
        <p class="text-2xl mt-[5vh]  text-center w-full px-3 sm:px-0 sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]" >Caption Craft – ваше удобное решение для добавления субтитров к видео! Автоматизируйте процесс добавления субтитров с помощью нашего интеллектуального сервиса.</p>
        <div class="flex mt-[7vh]">
        <router-link :to="isUser ? '/services' : '/register'" class="mr-6"><Button :label="isUser ? 'Добавить субтитры' : 'Опробовать'" class="bg-blue text-black px-5 py-3  text-xl sm:text-3xl hover:scale-105 duration-300 transition-all"></Button></router-link>
        <router-link v-show="!isUser" to="/login" class="ml-6"><Button label="Войти" raised class=" px-5 py-3 text-xl sm:text-3xl hover:scale-105 duration-300 transition-all" ></Button></router-link>
        </div>
    </div>
</template>