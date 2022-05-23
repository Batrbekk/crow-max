import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RocketView from '@/views/RocketView'
import PortView from '@/views/PortView'
import SettingView from '@/views/SettingView'
import RegistrationView from '@/views/RegistrationView'
import CardInfoView from '@/views/CardInfoView'
import InvestCardView from '@/views/InvestCardView'
import HomeModeratorView from '@/views/Moderator/HomeModeratorView'
import RocketModeratorView from '@/views/Moderator/RocketModeratorView'
import IntegrationModeratorView from '@/views/Moderator/IntegrationModeratorView'
import UserModeratorView from '@/views/Moderator/UserModeratorView'
import EditUserModerator from '@/views/Moderator/EditUserModerator'
import SettingModeratorView from '@/views/Moderator/SettingModeratorView'
import EditRocketModerator from '@/views/Moderator/EditRocketModerator'

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
    path: '/card-info',
    name: 'card-info',
    component: CardInfoView
  },
  {
    path: '/invest-card',
    name: 'invest-card',
    component: InvestCardView
  },
  {
    path: '/moderator-home',
    name: 'moderator-home',
    component: HomeModeratorView
  },
  {
    path: '/moderator-rocket',
    name: 'moderator-rocket',
    component: RocketModeratorView
  },
  {
    path: '/moderator-integration',
    name: 'moderator-integration',
    component: IntegrationModeratorView
  },
  {
    path: '/moderator-users',
    name: 'moderator-users',
    component: UserModeratorView
  },
  {
    path: '/moderator-edit-user',
    name: 'moderator-edit-user',
    component: EditUserModerator
  },
  {
    path: '/moderator-setting',
    name: 'moderator-setting',
    component: SettingModeratorView
  },
  {
    path: '/moderator-edit-rocket',
    name: 'moderator-edit-rocket',
    component: EditRocketModerator
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
