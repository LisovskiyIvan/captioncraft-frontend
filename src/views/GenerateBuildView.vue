<script setup lang="ts">
import Nav from "../components/Nav.vue";
import BuildForm from "../components/BuildForm.vue"
</script>


<template>
    <div class="h-[100vh] w-[100%] bg-black flex flex-col" >
        <Nav></Nav>
        <div class="flex justify-center items-center flex-grow">
          <BuildForm></BuildForm>
        </div>

    </div>
</template>
