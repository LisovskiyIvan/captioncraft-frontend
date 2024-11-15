<script setup lang="ts">
import { Card } from "primevue";
import Button from "primevue/button";
import { ref } from "vue";
import working from "../assets/working.json";
// import Radio from "./Radio.vue";


const video = ref<File | null>(null);
const audio = ref<File | null>(null);
const isLoading = ref(false);
// const selectedOption = ref('vosk-model-small-ru-0.22');
const onUploadVideo = (event: any) => {
  const files = event.target.files;
  if (files === null || files.length === 0) {
    return;
  }

  const selectedFile = files[0];
  if (selectedFile === null) {
    return;
  }

  video.value = selectedFile;
};

const onUploadWav = (event: any) => {
  const files = event.target.files;
  if (files === null || files.length === 0) {
    return;
  }

  const selectedFile = files[0];
  if (selectedFile === null) {
    return;
  }

  audio.value = selectedFile;
};



const createVideo = async () => {
  if (!video.value || !audio.value) {
    console.log("Please upload both files");
    return;
  }

  const formData = new FormData();
  formData.append("video", video.value);
  formData.append("audio", audio.value);
  // formData.append("vosk", selectedOption.value);

  const token = localStorage.getItem("token");
  if (!token) return;

  isLoading.value = true;

  try {
    const res = await fetch("http://localhost:8000/generate/videoandaudio", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });

    if (res.ok) {
      const result = await res.json();

      if (result.video && result.name) {
        const byteCharacters = atob(result.video);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: "video/mp4" });

        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", result.name); // Use the name from the server response
        document.body.appendChild(link);
        link.click();
        link.remove();
      } else {
        console.error("Video data not found in the response");
      }
    } else {
      console.error("Failed to create video:", res.statusText);
    }
  } catch (error) {
    console.error("Error creating video:", error);
  } finally {
    isLoading.value = false;
    video.value = null;
    audio.value = null;
  }
};
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
          accept="video/*"
          @change="onUploadVideo"
          class="hidden"
        />
        <div v-if="video" class="mt-6">{{ video.name }}</div>
      </div>
      <div>
        <label
          for="wav-upload"
          class="wav-upload-label w-full bg-black text-white  px-4 py-2 rounded-lg text-sm sm:text-xl hover:bg-blue hover:text-black transition-transform transform hover:scale-105 cursor-pointer"
        >
          Выбрать Звук
        </label>
        <input
          id="wav-upload"
          type="file"
          accept=".wav"
          @change="onUploadWav"
          class="hidden"
        />
        <div v-if="audio" class="mt-6">{{ audio?.name }}</div>
      </div>
    </div>
    <div class="text-lg mt-10">
      Сейчас доступен только английский язык
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
          @click="() => ((video = null), (audio = null))"
        />
        <Button
          label="Создать"
          class="px-3 py-2 bg-black text-white w-32 hover:scale-105 duration-300 transition-all hover:bg-blue hover:text-black"
          @click="createVideo"
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
