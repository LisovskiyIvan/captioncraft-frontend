import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ServicesView from '../views/ServicesView.vue'
import AddView from '../views/GenerateAddView.vue'
import BuildView from '../views/GenerateBuildView.vue'
import PicsView from '../views/GeneratePicsView.vue'
import ProfileView from '../views/ProfileView.vue'
import ContactView from '../views/ContactView.vue'
import PaymentView from '../views/PaymentView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
    },
    {
      path: '/generate/add',
      name: 'add',
      component: AddView,
    },
    {
      path: '/generate/build',
      name: 'build',
      component: BuildView,
    },
    {
      path: '/generate/pics',
      name: 'pics',
      component: PicsView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/contact',
      component: ContactView,
    },
    {
      path: '/payment',
      component: PaymentView,
    },
  ],
})

export default router
