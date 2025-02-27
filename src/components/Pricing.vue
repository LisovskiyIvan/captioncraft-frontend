<script setup lang="ts">
import Button from 'primevue/button'
import { useRouter } from 'vue-router'

const router = useRouter()

const plans = [
  {
    name: 'Базовый',
    price: 'Бесплатно',
    features: [
      'До 5 видео в месяц',
      'Базовое распознавание речи',
      'Стандартные стили субтитров',
      'Поддержка по email',
    ],
    buttonLabel: 'Начать бесплатно',
    buttonAction: () => router.push('/register'),
  },
  {
    name: 'Премиум',
    price: '999 ₽/мес',
    features: [
      'Неограниченное количество видео',
      'Улучшенное распознавание речи',
      'Расширенные стили субтитров',
      'Приоритетная поддержка',
      'Доступ к новым функциям',
    ],
    highlighted: true,
    buttonLabel: 'Выбрать план',
    buttonAction: () => router.push('/payment'),
  },
]
</script>

<template>
  <div class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-16 text-white">Тарифы</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          :class="[
            'p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1',
            plan.highlighted
              ? 'bg-gradient-to-br from-indigo-900 via-purple-900 to-blue text-white shadow-xl'
              : 'bg-black border-2 border-gray-200',
          ]"
        >
          <h3 class="text-2xl font-bold mb-4">{{ plan.name }}</h3>
          <p class="text-3xl font-bold mb-8">{{ plan.price }}</p>
          <ul class="space-y-4 mb-8">
            <li
              v-for="(feature, featureIndex) in plan.features"
              :key="featureIndex"
              class="flex items-center"
            >
              <i class="pi pi-check mr-2"></i>
              {{ feature }}
            </li>
          </ul>
          <Button
            :label="plan.buttonLabel"
            :class="[
              'w-full p-3 transition-all duration-300 transform hover:scale-105',
              plan.highlighted
                ? 'bg-white text-black hover:bg-blue hover:text-white'
                : 'bg-black text-white hover:bg-blue',
            ]"
            @click="plan.buttonAction"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pi {
  font-family: 'primeicons';
}
</style>
