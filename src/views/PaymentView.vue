<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Nav from '../components/Nav.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Проверка авторизации
onMounted(() => {
  const token = localStorage.getItem('token')
  if (!token) {
    router.push('/login')
  }
})

// Выбор тарифа
const selectedTariff = ref('premium-monthly')
const tariffs = [
  { name: 'Базовый', value: 'basic', price: '299 ₽/мес', features: ['Доступ к основным функциям', 'Обработка до 10 видео в месяц', 'Стандартное качество'] },
  { name: 'Премиум', value: 'premium-monthly', price: '499 ₽/мес', features: ['Все функции базового тарифа', 'Неограниченное количество видео', 'Высокое качество', 'Приоритетная поддержка'] },
  { name: 'Корпоративный', value: 'corporate', price: '4 999 ₽/мес', features: ['Все функции премиум тарифа', 'До 10 пользователей', 'API доступ', 'Выделенный менеджер'] },

]

</script>

<template>
  <div class="min-h-screen bg-black">
    <Nav />
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-5xl mx-auto">
        <!-- Заголовок -->
        <div class="text-center mb-12">
          <h1 class="text-3xl sm:text-4xl font-bold text-white mb-4">
            Выберите тариф
          </h1>
          <p class="text-slate-300 max-w-2xl mx-auto">
            Выберите подходящий тариф и введите данные карты для оплаты. Ваша подписка будет активирована сразу
            после успешной оплаты.
          </p>
        </div>

        <!-- Выбор тарифа -->
        <div class="mb-12">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="tariff in tariffs"
              :key="tariff.value"
              class="bg-slate-800/80 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 cursor-pointer"
              :class="selectedTariff === tariff.value ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-slate-700 hover:border-slate-500'"
              @click="selectedTariff = tariff.value"
            >
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-semibold text-white">{{ tariff.name }}</h3>
                <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                  :class="selectedTariff === tariff.value ? 'border-blue-500 bg-blue-500/20' : 'border-slate-500'"
                >
                  <div v-if="selectedTariff === tariff.value" class="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
              </div>
              <div class="text-2xl font-bold text-white mb-4">{{ tariff.price }}</div>
              <ul class="space-y-2">
                <li v-for="(feature, index) in tariff.features" :key="index" class="flex items-start">
                  <i class="pi pi-check text-green-500 mr-2 mt-1"></i>
                  <span class="text-slate-300 text-sm">{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        </div>
    </div>
  </div>
</template>
