<script setup lang="ts">
const testimonials = [
  {
    name: 'Анна С.',
    role: 'Контент-мейкер',
    text: 'Caption Craft значительно ускорил процесс создания контента. Теперь я могу сфокусироваться на создании видео, а не на ручном добавлении субтитров.',
    avatar: '👩',
  },
  {
    name: 'Михаил Д.',
    role: 'YouTube блогер',
    text: 'Отличный сервис! Автоматическое распознавание речи работает очень точно, а субтитры выглядят профессионально.',
    avatar: '👨',
  },
  {
    name: 'Елена В.',
    role: 'Маркетолог',
    text: 'Использую Caption Craft для создания рекламных роликов. Экономит массу времени и делает видео доступными для всех пользователей.',
    avatar: '👩',
  },
]
</script>

<template>
  <div class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-16 text-white">Отзывы пользователей</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div class="text-6xl mb-6 text-center">{{ testimonial.avatar }}</div>
          <p class="text-gray-600 mb-6 italic leading-relaxed">{{ testimonial.text }}</p>
          <div class="border-t pt-4">
            <p class="font-semibold text-lg text-black">{{ testimonial.name }}</p>
            <p class="text-blue">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
