<script setup lang="ts">
import Form from "../components/Form.vue";
import type { LoginResponse } from "../model.ts";
import router from "../router";
import { Button } from "primevue";

async function handleClick(email: string, password: string) {
  const res = await fetch("http://localhost:8000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  if (res.ok) {
    const data = (await res.json()) as LoginResponse;
    localStorage.setItem("token", data.token);
    router.push("/services");
  }
}
</script>

<template>
  <div

    class="h-[100vh] w-[100%] bg-black flex flex-col items-center justify-center"
  >
    <h1 class="text-5xl mb-12">Войти</h1>
    <Form :handler="handleClick" title="Войти"> </Form>
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
