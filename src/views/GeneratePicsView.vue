<script setup lang="ts">
import Nav from "../components/Nav.vue";
import PicsForm from "../components/PicsForm.vue";
</script>

<template>
    <div class="h-[100vh] w-[100%] bg-black flex flex-col" >
        <Nav></Nav>
        <div class="flex-grow flex justify-center items-center">
            <PicsForm></PicsForm>
        </div>
    </div>
</template>
