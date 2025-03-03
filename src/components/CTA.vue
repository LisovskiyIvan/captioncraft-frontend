<script setup lang="ts">
import Button from 'primevue/button'
import { useRouter } from 'vue-router'

const router = useRouter()

</script>

<template>
  <div class="py-20">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-8">
          Готовы сделать ваши видео доступнее?
        </h2>
        <p class="text-xl text-gray-300 mb-12 leading-relaxed">
          Присоединяйтесь к тысячам создателей контента, которые уже используют Caption Craft для
          автоматического создания субтитров
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            label="Начать"
            class="px-8 py-3 text-lg bg-blue text-black hover:scale-105 transition-all duration-300"
            @click="() => router.push('/register')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:root {
  --blue: #40a9ff;
}
</style>
