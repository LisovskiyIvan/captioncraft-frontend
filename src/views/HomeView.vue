<script setup lang="ts">
import Header from "../components/Header.vue";
import money from "../assets/money.json"
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();



</script>


<template>
  <div class="min-h-[100vh] w-[100%] bg-black relative flex flex-col items-center sm:flex-row" >
    <Header></Header>
    <div class=" w-[50%] mt-[5vh] ">
        <Vue3Lottie :animationData="money" class="max-h-[650px] max-w-[650px]" v-if="width > 640"/>
    </div>
  </div>
</template>

