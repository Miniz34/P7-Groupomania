import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/AuthView.vue'
import LoginView from '../views/LoginView.vue'
import UsersList from '../views/UsersListView.vue'
import PublicationsView from '../views/PublicationsView'
import CreatePostView from '../views/CreatePostView.vue'
import PublicationSingle from '../views/PublicationSingleView.vue'
import UserSingleView from '../views/UserSingleView.vue'
import ModifyPost from '../views/ModifyPost'
import ModifyUser from '../views/ModifyUser.vue'
import ModifyComment from '../views/CommentView.vue'



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
  {
    path: '/publications/:id',
    name: 'SinglePost',
    component: PublicationSingle

  },
  {
    path: '/users/:id',
    name: 'SingleUser',
    component: UserSingleView
  },
  {
    path: '/publications/modify/:id',
    name: 'Modify',
    component: ModifyPost
  },
  {
    path: '/users/modify/:id',
    name: 'ModifyUser',
    component: ModifyUser
  },
  {
    path: '/comments/modify/:id',
    name: "ModifyComment",
    component: ModifyComment
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
