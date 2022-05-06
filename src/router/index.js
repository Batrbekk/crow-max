import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RocketView from '@/views/RocketView'
import PortView from '@/views/PortView'
import SettingView from '@/views/SettingView'
import CardView from '@/views/CardView'
import RegistrationView from '@/views/RegistrationView'
import CardInfoView from '@/views/CardInfoView'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/rocket',
    name: 'rocket',
    component: RocketView
  },
  {
    path: '/port',
    name: 'port',
    component: PortView
  },
  {
    path: '/setting',
    name: 'setting',
    component: SettingView
  },
  {
    path: '/card',
    name: 'card',
    component: CardView
  },
  {
    path: '/card-info',
    name: 'card-info',
    component: CardInfoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
