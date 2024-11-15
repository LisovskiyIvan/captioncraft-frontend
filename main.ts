import './style.scss'
import PrimeVue from 'primevue/config';
import { MotionPlugin } from '@vueuse/motion'
import Vue3Lottie from 'vue3-lottie'
import Aura from '@primevue/themes/aura';
import { createApp } from 'vue';
import App from './src/App.vue';
import router from './src/router';

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
      preset: Aura,
      options: {
          cssLayer: {
              name: 'primevue',
              order: 'tailwind-base, primevue, tailwind-utilities'
          }
      }
  }
});
app.use(router)
app.use(MotionPlugin)
app.use(Vue3Lottie)
app.mount('#app'); 