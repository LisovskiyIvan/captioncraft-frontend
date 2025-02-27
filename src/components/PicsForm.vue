<script setup lang="ts">
import { ref } from "vue";
import { Card } from "primevue";
import Button from "primevue/button";
import working from "../assets/working.json";

const pic = ref<File | null>(null);
const isLoading = ref(false);

function onUploadPic(event: Event) {
  const files = (event.target as HTMLInputElement).files;
  pic.value = files?.[0] || null;
}

function createPic() {
  console.log("createPic");
}
</script>

<template>
  <Card
    class="text-center py-4 bg-white text-black md:px-4"
    :pt="{
      body: 'flex flex-col items-center justify-start w-full h-full',
      root: 'xl:w-[50%] w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%]'
    }"
  >
    <template #title>
      <h1 class="text-3xl font-bold">Сгенерировать</h1>
    </template>
    <template #content>
      <div class="flex justify-center gap-10 mt-20">
        <div>
        <label
          for="file-upload"
          class="file-upload-label w-full bg-black text-white  px-4 py-2 rounded-lg text-sm sm:text-xl hover:bg-blue hover:text-black transition-transform transform hover:scale-105 cursor-pointer"
        >
          Выбрать видео
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          @change="onUploadPic"
          class="hidden"
        />
      </div>
    </div>
      <!-- <Radio v-model="selectedOption"
      :options="[
        { label: 'Русский язык', value: 'vosk-model-small-ru-0.22' },
        { label: 'Английский язык', value: 'vosk-model-small-en-us-0.15' },
      ]"></Radio> -->
    </template>
    <template #footer>
      <div class="flex w-full gap-10 mt-12 justify-center">
        <Button
          label="Очистить"
          severity="secondary"
          outlined
          class="w-32 px-3 py-2 hover:scale-105 duration-300 transition-all hover:bg-blue hover:text-black border-2 border-black hover:border-white"
          @click="() => (pic = null)"
        />
        <Button
          label="Создать"
          class="px-3 py-2 bg-black text-white w-32 hover:scale-105 duration-300 transition-all hover:bg-blue hover:text-black"
          @click="createPic"
        />
      </div>
      <Vue3Lottie
        :animationData="working"
        v-if="isLoading"
        :height="300"
      ></Vue3Lottie>
    </template>
  </Card>
</template>
