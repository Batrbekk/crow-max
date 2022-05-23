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
import ClientHomeView from '@/views/Client/ClientHomeView'
import ClientRocketView from '@/views/Client/ClientRocketView'
import ClientDocumentView from '@/views/Client/ClientDocumentView'
import ClientSettingView from '@/views/Client/ClientSettingView'
import CreateRocketClient from '@/views/Client/CreateRocketClient'
import ClientWatchRocket from '@/views/Client/ClientWatchRocket'

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
  },
  {
    path: '/client-home',
    name: 'client-home',
    component: ClientHomeView
  },
  {
    path: '/client-rocket',
    name: 'client-rocket',
    component: ClientRocketView
  },
  {
    path: '/client-document',
    name: 'client-document',
    component: ClientDocumentView
  },
  {
    path: '/client-setting',
    name: 'client-setting',
    component: ClientSettingView
  },
  {
    path: '/client-create-rocket',
    name: 'client-create-rocket',
    component: CreateRocketClient
  },
  {
    path: '/client-watch-rocket',
    name: 'client-watch-rocket',
    component: ClientWatchRocket
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
