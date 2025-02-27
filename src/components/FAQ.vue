<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref<number | null>(null)

const toggleAccordion = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const questions = [
  {
    question: 'Какие форматы видео поддерживаются?',
    answer:
      'Caption Craft поддерживает все популярные форматы видео, включая MP4, AVI, MOV. Максимальный размер файла - 500MB.',
  },
  {
    question: 'Как точно распознается речь?',
    answer:
      'Мы используем современную технологию Vosk для распознавания речи. Точность распознавания зависит от качества звука и четкости речи. Для английского языка точность достигает 95%.',
  },
  {
    question: 'Сколько времени занимает обработка видео?',
    answer:
      'Время обработки зависит от длительности видео. В среднем, для 5-минутного видео процесс занимает около 2-3 минут.',
  },
  {
    question: 'Какие языки поддерживаются?',
    answer:
      'В настоящее время поддерживается английский язык. Мы активно работаем над добавлением поддержки русского и других языков.',
  },
  {
    question: 'Как получить премиум доступ?',
    answer:
      'Премиум доступ можно получить в личном кабинете, перейдя в раздел "Тарифы". Оплата производится банковской картой.',
  },
]
</script>

<template>
  <div class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-16 text-white">
        Часто задаваемые вопросы
      </h2>
      <div class="max-w-3xl mx-auto">
        <div class="space-y-4">
          <div v-for="(qa, index) in questions" :key="index" class="bg-white rounded-xl overflow-hidden">
            <button
              class="w-full p-5 font-semibold text-gray-900 flex justify-between items-center border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 hover:-translate-y-0.5"
              @click="toggleAccordion(index)"
            >
              {{ qa.question }}
              <i
                class="pi transition-transform duration-300"
                :class="[
                  activeIndex === index ? 'pi-chevron-up rotate-180' : 'pi-chevron-down rotate-0'
                ]"
              ></i>
            </button>
            <div
              v-show="activeIndex === index"
              class="transition-all duration-500 ease-in-out"
              :style="{
                maxHeight: activeIndex === index ? '500px' : '0',
                opacity: activeIndex === index ? '1' : '0',
                transform: activeIndex === index ? 'translateY(0)' : 'translateY(-20px)',
                overflow: 'hidden'
              }"
            >
              <p class="text-black leading-relaxed bg-white/10 p-4 rounded-lg m-4">
                {{ qa.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
