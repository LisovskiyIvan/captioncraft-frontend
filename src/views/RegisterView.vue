<script setup lang="ts">
import Form from '../components/Form.vue'
import type { RegisterResponse } from '../model.ts'
import router from '../router/index.ts'
import { Button } from 'primevue'

async function handleClick(email: string, password: string, username?: string) {
  const res = await fetch('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
      username: username,
    }),
  })
  if (res.ok) {
    const data = (await res.json()) as RegisterResponse
    localStorage.setItem('token', data.token)
    router.push('/services')
  }
}
</script>

<template>
  <div

    class="h-[100vh] w-[100%] bg-black flex flex-col items-center justify-center"
  >
    <h1 class="text-5xl mb-12">Регистрация</h1>
    <Form :handler="handleClick" title="Регистрация"> </Form>
    <router-link to="/" class="absolute top-[5%] left-[5%]"
      ><Button
        variant="text"
        raised
        class="bg-blue text-black px-2 py-1 text-xl hover:scale-105 duration-300 transition-all"
        >Обратно</Button
      ></router-link
    >
  </div>
</template>
