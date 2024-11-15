import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import Register from '../views/RegisterView.vue'
import Services from '../views/ServicesView.vue'
import Contact from '../views/ContactView.vue'
import GenerateBuild from '../views/GenerateBuildView.vue'
import GenerateAdd from '../views/GenerateAddView.vue'
import Payment from '../views/PaymentView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/register',
      component: Register,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () => ({ path: '/' }),
    },
    {
      path: '/services',
      component: Services,
    },
    {
      path: '/contact',
      component: Contact,
    },
    {
      path: '/generate/build',
      component: GenerateBuild,
    },
    {
      path: '/generate/add',
      component: GenerateAdd,
    },
    {
      path: '/payment',
      component: Payment,
    },
  ],
})

export default router
