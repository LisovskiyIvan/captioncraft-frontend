<script setup lang="ts">
const steps = [
  {
    icon: 'pi pi-upload',
    title: 'Загрузите видео',
    description: 'Загрузите ваше видео или добавьте отдельно видео и аудио файлы',
  },
  {
    icon: 'pi pi-cog',
    title: 'Автоматическое распознавание',
    description: 'Наша система автоматически распознает речь и создаст субтитры',
  },
  {
    icon: 'pi pi-check-circle',
    title: 'Готовое видео',
    description: 'Получите видео с профессионально оформленными субтитрами',
  },
]
</script>

<template>
  <div class=" py-20">
    <div class="max-w-6xl mx-auto px-6">
      <h2
        class="text-4xl font-bold text-center mb-16 text-white"
      >
        Как это работает
      </h2>

      <!-- Десктопная версия -->
      <div class="hidden md:flex justify-between items-center mb-12 gap-8">
        <div v-for="(step, index) in steps" :key="index" class="flex-1 relative border-2 border-gray-200 py-5 rounded-xl hover:scale-105 duration-300 transition-all hover:border-blue">


          <!-- Шаг -->
          <div class="flex flex-col items-center text-center px-4">
            <div
              class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6 relative z-10"
            >
              <i :class="[step.icon, 'text-3xl text-white']"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-white">{{ step.title }}</h3>
            <p class="text-gray-300">{{ step.description }}</p>
          </div>
        </div>
      </div>

      <!-- Мобильная версия -->
      <div class="md:hidden space-y-12">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="flex flex-col items-center text-center px-4"
        >
          <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6">
            <i :class="[step.icon, 'text-3xl text-white']"></i>
          </div>
          <h3 class="text-xl font-semibold mb-4 text-white">{{ step.title }}</h3>
          <p class="text-gray-300">{{ step.description }}</p>

        </div>
      </div>
    </div>
  </div>
</template>
