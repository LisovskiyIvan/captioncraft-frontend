<script setup lang="ts">
import {  Button } from "primevue";
import { ref } from "vue";
import router from "../router";



const items = ref([
    {
        label: 'Главная',
        icon: 'pi pi-home',
        path: '/'
    },
    {
        label: 'Сервисы',
        icon: 'pi pi-wrench',
        path: '/services'
    },
    {
        label: 'Контакт',
        icon: 'pi pi-envelope',
        path: '/contact'
    }
]);
function logout() {
    localStorage.removeItem('token');
    router.push('/')
}


</script>

<template>
     <div class="flex justify-between  rounded-lg px-2 sm:px-10 py-5 sm:py-10">
        <div class="flex ">
            <Button v-for="item in items" :key="item.label" :label="item.label" :icon="item.icon" as="router-link" :to="item.path" class="text-[12px] bg-black  sm:text-lg lg:text-xl 2xl:text-2xl  sm:ml-6 2xl:ml-8 relative hover:scale-110 duration-300 after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer transition-all"></Button>
        </div>
        <div class="flex items-center gap-5">
            <router-link to="/payment" class="h-10 bg-white text-black border-2 border-blue-600 py-2 px-5 rounded-lg hover:bg-blue-50 duration-300 transition-all font-medium flex items-center justify-center">Оплата</router-link>
            <router-link to="/profile" class="text-white h-10 bg-transparent border-2 border-green-500 py-2 px-2 sm:px-5 text-[12px] flex items-center justify-center rounded-lg sm:text-lg hover:bg-green-500/20 duration-300 transition-all font-medium">Профиль</router-link>
            <Button label="Выйти" class="text-white h-10 bg-gradient-to-r from-red-700 to-red-500 py-2 px-2 sm:px-5 text-[12px] sm:text-lg rounded-lg shadow-md hover:shadow-red-400/50 hover:translate-y-[-2px] duration-300 transition-all font-medium" @click="logout"></Button>
        </div>
    </div>
</template>
