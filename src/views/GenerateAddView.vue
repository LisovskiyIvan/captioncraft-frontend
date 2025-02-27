<script setup lang="ts">
import { ref, onMounted } from "vue";
import Nav from "../components/Nav.vue";
import AddForm from "../components/AddForm.vue";

const isClientOnly = ref(false);
onMounted(() => {
  isClientOnly.value = true;
});
</script>


<template>
    <div class="h-[100vh] w-[100%] bg-black flex flex-col" v-if="isClientOnly">
        <Nav></Nav>
        <div class="flex justify-center items-center flex-grow">
          <AddForm></AddForm>
        </div>
    </div>
</template>