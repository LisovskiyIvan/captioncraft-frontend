<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Nav from '../components/Nav.vue'
import { Card } from 'primevue'
import Button from 'primevue/button'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'
const router = useRouter()
const toast = useToast()

interface UserProfile {
  email: string
  videos_count: number
  is_premium: boolean
}

const profile = ref<UserProfile | null>(null)
const isLoading = ref(true)

onMounted(async () => {
  const token = localStorage.getItem('token')
  if (!token) {
    router.push('/login')
    return
  }

  try {
    const response = await fetch('/api/profile', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })

    if (response.ok) {
      profile.value = await response.json()
    } else {
      toast.add({
        severity: 'error',
        summary: 'Ошибка',
        detail: 'Не удалось загрузить профиль',
        life: 3000,
      })
    }
  } catch (error) {
    console.error('Ошибка при загрузке профиля:', error)
    toast.add({
      severity: 'error',
      summary: 'Ошибка',
      detail: 'Произошла ошибка при загрузке профиля',
      life: 3000,
    })
  } finally {
    isLoading.value = false
  }
})

const logout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<template>
  <div class="min-h-screen bg-black">
    <Nav />
    <div class="container mx-auto px-4 py-8">
      <Toast />
      <div v-if="isLoading" class="flex justify-center items-center min-h-[60vh]">
        <i class="pi pi-spin pi-spinner text-4xl text-white"></i>
      </div>
      <div v-else-if="profile" class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Основная информация -->
        <Card class="bg-white shadow-lg rounded-2xl">
          <template #title>
            <h2
              class="text-2xl font-bold bg-gradient-to-r from-black to-blue bg-clip-text text-transparent mb-4"
            >
              Профиль
            </h2>
          </template>
          <template #content>
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <i class="pi pi-user text-3xl text-gray-600"></i>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-800">{{ profile.email }}</h3>
                </div>
              </div>
              <div class="border-t border-gray-200 pt-4">
                <div class="grid grid-cols-2 gap-4">
                  <div class="text-center p-4 bg-gray-50 rounded-lg">
                    <p class="text-2xl font-bold text-gray-800">{{ profile.videos_count }}</p>
                    <p class="text-sm text-gray-600">Видео создано</p>
                  </div>
                  <div class="text-center p-4 bg-gray-50 rounded-lg">
                    <p class="text-2xl font-bold">
                      <i
                        :class="[
                          'pi',
                          profile.is_premium ? 'pi-check text-green-500' : 'pi-times text-red-500',
                        ]"
                      ></i>
                    </p>
                    <p class="text-sm text-gray-600">Премиум статус</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template #footer>
            <div class="flex justify-end">
              <Button
                label="Выйти"
                severity="danger"
                outlined
                class="px-6 py-2 hover:scale-105 duration-300 transition-all"
                @click="logout"
              />
            </div>
          </template>
        </Card>

        <!-- Статистика и настройки -->
        <Card class="bg-white shadow-lg rounded-2xl">
          <template #title>
            <h2
              class="text-2xl font-bold bg-gradient-to-r from-black to-blue bg-clip-text text-transparent mb-4"
            >
              Настройки
            </h2>
          </template>
          <template #content>
            <div class="space-y-6">
              <div class="p-4 bg-gray-50 rounded-lg">
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Язык распознавания</h3>
                <p class="text-sm text-gray-600">
                  Сейчас доступен только английский язык. Скоро появятся новые языки!
                </p>
              </div>
              <div class="p-4 bg-gray-50 rounded-lg">
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Премиум возможности</h3>
                <ul class="text-sm text-gray-600 space-y-2">
                  <li class="flex items-center">
                    <i class="pi pi-check text-green-500 mr-2"></i>
                    Неограниченное количество видео
                  </li>
                  <li class="flex items-center">
                    <i class="pi pi-check text-green-500 mr-2"></i>
                    Приоритетная обработка
                  </li>
                  <li class="flex items-center">
                    <i class="pi pi-check text-green-500 mr-2"></i>
                    Расширенные настройки субтитров
                  </li>
                </ul>
              </div>
            </div>
          </template>
          <template #footer>
            <router-link to="/payment" class="flex justify-end">
              <Button
                v-if="!profile.is_premium"
                label="Получить премиум"
                class="px-6 py-2 bg-black text-white hover:scale-105 duration-300 transition-all hover:bg-blue hover:text-black"
              />
            </router-link>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pi {
  font-family: 'primeicons';
}
</style>
