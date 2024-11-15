<script setup lang="ts">
import Nav from "../components/Nav.vue";
import ServiceCard from "../components/ServiceCard.vue";
import phone from "../assets/phone.json"
import chart from "../assets/chart.json"
</script>


<template>
    <div class="h-[100vh] w-[100%] bg-black flex flex-col" >
        <Nav></Nav>
        <div class="flex flex-wrap gap-[5%] xl:gap-20 justify-center items-center flex-grow w-full">
          <ServiceCard title="Сборка видео" description=".mp4 + wav = готовое видео с субтитрами" link="/generate/build" :lottie="phone" class="w-[90%] sm:w-[300px] md:w-1/4"></ServiceCard>
          <ServiceCard title="Добавление субтитров" description="Генерация субтитров для вашего видео" link="/generate/add" :lottie="chart" class="w-[90%] sm:w-[300px] md:w-1/4"></ServiceCard>
          <!-- <ServiceCard title="Монтаж видео" description="Добавьте несколько изображений и аудиодорожку и получите видео" link="/generate/pics" :lottie="phone" class="w-[90%] sm:w-[300px] md:w-1/4"></ServiceCard>  -->
        </div>
    </div>
</template>
