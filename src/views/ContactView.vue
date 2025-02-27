<script setup lang="ts">
import Nav from '../components/Nav.vue';

</script>

<template>
    <div class="h-[100vh] w-[100%] bg-black">
        <Nav />
        <div class="flex flex-col items-center justify-center gap-10 h-[80vh]">
            <h1 class="text-white text-4xl font-bold">Контакт</h1>
            <div class="flex flex-col items-center justify-center gap-2">
                <h2 class="text-white text-2xl font-bold">Email</h2>
                <p class="text-white text-lg">daymedead.dev@gmail.com</p>
            </div>
        </div>
    </div>
</template>