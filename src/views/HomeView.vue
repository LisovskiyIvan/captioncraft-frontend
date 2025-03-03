<script setup lang="ts">
import Header from '../components/Header.vue'
import money from '../assets/money.json'
import { useWindowSize } from '@vueuse/core'
import HowItWorks from '../components/HowItWorks.vue'
import Testimonials from '../components/Testimonials.vue'
import Pricing from '../components/Pricing.vue'
import FAQ from '../components/FAQ.vue'
import CTA from '../components/CTA.vue'
import { onMounted } from 'vue'

const { width } = useWindowSize()
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-black to-gray-900">
    <section class="min-h-screen flex flex-col sm:flex-row items-center justify-center fade-in">
      <Header />
      <div class="w-[50%] mt-[5vh]">
        <Vue3Lottie :animationData="money" class="max-h-[650px] max-w-[650px]" v-if="width > 640" />
      </div>
    </section>

    <HowItWorks />

    <Testimonials />

    <Pricing />

    <FAQ />

    <CTA />
  </div>
</template>

<style scoped></style>
