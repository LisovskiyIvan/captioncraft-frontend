<script setup lang="ts">
import { Card } from 'primevue'
import Button from 'primevue/button'
import { ref } from 'vue'
import working from '../assets/working.json'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'
// import Radio from "./Radio.vue";

const toast = useToast()
const video = ref<File | null>(null)
const audio = ref<File | null>(null)
const isLoading = ref(false)
const videoInputRef = ref<HTMLInputElement | null>(null)
const audioInputRef = ref<HTMLInputElement | null>(null)
// const selectedOption = ref('vosk-model-small-ru-0.22');
const onUploadVideo = (event: Event) => {
  const files = (event.target as HTMLInputElement).files
  if (files === null || files.length === 0) {
    return
  }

  const selectedFile = files[0]
  if (selectedFile === null) {
    return
  }

  video.value = selectedFile
}

const onUploadWav = (event: Event) => {
  const files = (event.target as HTMLInputElement).files
  if (files === null || files.length === 0) {
    return
  }

  const selectedFile = files[0]
  if (selectedFile === null) {
    return
  }

  audio.value = selectedFile
}

const openVideoDialog = () => {
  videoInputRef.value?.click()
}

const openAudioDialog = () => {
  audioInputRef.value?.click()
}

const createVideo = async () => {
  if (!video.value || !audio.value) {
    toast.add({
      severity: 'error',
      summary: 'Ошибка',
      detail: 'Пожалуйста, загрузите видео и аудио файлы',
      life: 3000,
    })
    return
  }

  const formData = new FormData()
  formData.append('video', video.value)
  formData.append('audio', audio.value)
  // formData.append("vosk", selectedOption.value);

  const token = localStorage.getItem('token')
  if (!token) {
    toast.add({
      severity: 'error',
      summary: 'Ошибка',
      detail: 'Необходима авторизация',
      life: 3000,
    })
    return
  }

  isLoading.value = true

  try {
    const res = await fetch('http://localhost:8000/generate/videoandaudio', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    })

    if (res.ok) {
      const result = await res.json()

      if (result.video && result.name) {
        const byteCharacters = atob(result.video)
        const byteNumbers = new Array(byteCharacters.length)
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i)
        }
        const byteArray = new Uint8Array(byteNumbers)
        const blob = new Blob([byteArray], { type: 'video/mp4' })

        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', result.name)
        document.body.appendChild(link)
        link.click()
        link.remove()
        toast.add({
          severity: 'success',
          summary: 'Успех',
          detail: 'Видео успешно создано',
          life: 3000,
        })
      }
    } else {
      const error = await res.json()
      toast.add({
        severity: 'error',
        summary: 'Ошибка',
        detail: error.detail || 'Не удалось создать видео',
        life: 3000,
      })
    }
  } catch (error) {
    console.error('Error creating video:', error)
    toast.add({
      severity: 'error',
      summary: 'Ошибка',
      detail: 'Произошла ошибка при создании видео',
      life: 3000,
    })
  } finally {
    isLoading.value = false
    video.value = null
    audio.value = null
  }
}
</script>

<template>
  <Toast />
  <Card
    class="text-center py-8 bg-white text-black md:px-8 shadow-lg"
    :pt="{
      body: 'flex flex-col items-center justify-start w-full h-full',
      root: 'xl:w-[50%] w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] rounded-2xl',
    }"
  >
    <template #title>
      <h1
        class="text-4xl font-bold bg-gradient-to-r from-black to-blue bg-clip-text text-transparent"
      >
        Сгенерировать
      </h1>
    </template>
    <template #content>
      <div class="w-full max-w-xl mx-auto space-y-6">
        <!-- Загрузка видео -->
        <div
          class="mt-12 border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-blue transition-colors duration-300 cursor-pointer relative"
          @dragover.prevent
          @drop.prevent="
            (e) => {
              const file = e.dataTransfer?.files[0]
              if (file && file.type.startsWith('video/')) {
                video = file
              }
            }
          "
          @click="openVideoDialog"
          v-if="!isLoading"
        >
          <div class="flex flex-col items-center justify-center space-y-4">
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <i class="pi pi-video text-2xl text-gray-600"></i>
            </div>
            <div class="text-center">
              <p class="text-lg font-medium text-gray-700">
                {{ video ? 'Изменить видео' : 'Загрузить видео' }}
              </p>
              <p class="text-sm text-gray-500 mt-1">Перетащите файл сюда или нажмите для выбора</p>
            </div>
            <input
              ref="videoInputRef"
              type="file"
              accept="video/*"
              @change="onUploadVideo"
              class="hidden"
            />
          </div>
          <div
            v-if="video"
            class="absolute top-2 right-2 bg-blue text-black px-3 py-1 rounded-full text-sm font-medium"
          >
            {{ video.name }}
          </div>
        </div>

        <!-- Загрузка аудио -->
        <div
          class="border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-blue transition-colors duration-300 cursor-pointer relative"
          @dragover.prevent
          @drop.prevent="
            (e) => {
              const file = e.dataTransfer?.files[0]
              if (file && file.name.endsWith('.wav')) {
                audio = file
              }
            }
          "
          @click="openAudioDialog"
          v-if="!isLoading"
        >
          <div class="flex flex-col items-center justify-center space-y-4">
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <i class="pi pi-volume-up text-2xl text-gray-600"></i>
            </div>
            <div class="text-center">
              <p class="text-lg font-medium text-gray-700">
                {{ audio ? 'Изменить аудио' : 'Загрузить аудио' }}
              </p>
              <p class="text-sm text-gray-500 mt-1">
                Перетащите WAV файл сюда или нажмите для выбора
              </p>
            </div>
            <input
              ref="audioInputRef"
              type="file"
              accept=".wav"
              @change="onUploadWav"
              class="hidden"
            />
          </div>
          <div
            v-if="audio"
            class="absolute top-2 right-2 bg-blue text-black px-3 py-1 rounded-full text-sm font-medium"
          >
            {{ audio.name }}
          </div>
        </div>
        <div class="mt-8 w-full flex justify-center">
        <Vue3Lottie
          :animationData="working"
          v-if="isLoading"
          :height="200"
          :width="200"
        ></Vue3Lottie>
      </div>

        <div class="p-4 bg-gray-50 rounded-lg">
          <div class="flex items-center space-x-2">
            <i class="pi pi-info-circle text-blue"></i>
            <p class="text-sm text-gray-600">Сейчас доступен только английский язык</p>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex flex-col sm:flex-row w-full gap-4 sm:gap-6 mt-8 justify-center items-center">
        <Button
          label="Очистить"
          severity="secondary"
          outlined
          :disabled="(!video && !audio) || isLoading"
          class="w-full sm:w-32 px-3 py-2 hover:scale-105 duration-300 transition-all hover:bg-blue hover:text-black border-2 border-black hover:border-white disabled:opacity-50 disabled:cursor-not-allowed"
          @click="
            () => {
              video = null
              audio = null
            }
          "
        />
        <Button
          label="Создать"
          :loading="isLoading"
          :disabled="!video || !audio"
          class="w-full sm:w-32 px-3 py-2 bg-black text-white hover:scale-105 duration-300 transition-all hover:bg-blue hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
          @click="createVideo"
        />
      </div>

    </template>
  </Card>
</template>

<style scoped>
.pi {
  font-family: 'primeicons';
}
</style>
