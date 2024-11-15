<script setup lang="ts">
import Card from "primevue/card";
import { onMounted, ref } from "vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import FloatLabel from "primevue/floatlabel";


const isClientOnly = ref(false);

onMounted(() => {
  isClientOnly.value = true;
});

defineProps<{
  title: string;
  handler: (email: string, password: string) => Promise<void>;
}>();

const email = ref("");
const password = ref("");

</script>

<template>
  <Card v-if="isClientOnly" class="w-[250px] sm:w-[550px] h-[450px] flex flex-wrap items-center">
    <template #title><h1 class="text-3xl text-center mt-5 text-blue">Caption Craft</h1></template>
    <template #content >
        <div class="flex flex-col items-center  h-[350px] ">
      <FloatLabel class="mt-12">
        <InputText id="over_label" v-model="email" class="h-12 w-full sm:w-[300px] px-3 bg-black text-white"/>
        <label for="over_label">Почта</label>
      </FloatLabel>
      <FloatLabel class="mt-12">
        <InputText
        class="h-12 px-3 w-full sm:w-[300px] bg-black text-white" 
        id="over_label1"
          name="password"
          type="password"
          v-model="password"
        />
        <label for="over_label1">Пароль</label>
    </FloatLabel>
      <Button @click="() => handler(email, password)" type="button" :label=title class="bg-blue text-black text-2xl px-5 py-3 mt-12 hover:bg-black hover:text-blue duration-300 transition-all hover:scale-110"/>
    </div>
    </template>
  </Card>
</template>
