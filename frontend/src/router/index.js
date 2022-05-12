import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/AuthView.vue'
import LoginView from '../views/LoginView.vue'
import UsersList from '../views/UsersListView.vue'
import PublicationsView from '../views/PublicationsView'
import CreatePostView from '../views/CreatePostView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login-View',
    component: LoginView

  },
  {
    path: '/users',
    name: 'Users-List',
    component: UsersList

  },
  {
    path: '/publications',
    name: 'Publications-View',
    component: PublicationsView

  },
  {
    path: '/publications/new',
    name: 'newPost',
    component: CreatePostView

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
