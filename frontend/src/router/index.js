import { createRouter, createWebHistory } from 'vue-router'


import HomeView from '../views/AuthView.vue'
import Login from '../views/Login.vue'

import Posts from '../views/Posts'
import PostCreate from '../views/PostCreate.vue'
import PostSingle from '../views/PostSingle.vue'
import PostModify from '../views/PostModify'
import ModifyComment from '../views/CommentView.vue'


import UsersList from '../views/UsersList.vue'
import UserSingle from '../views/UserSingle.vue'
import UserModify from '../views/UserModify.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login-View',
    component: Login

  },
  {
    path: '/users',
    name: 'Users-List',
    component: UsersList

  },
  {
    path: '/publications',
    name: 'Publications-View',
    component: Posts

  },
  {
    path: '/publications/new',
    name: 'newPost',
    component: PostCreate

  },
  {
    path: '/publications/:id',
    name: 'SinglePost',
    component: PostSingle

  },
  {
    path: '/users/:id',
    name: 'SingleUser',
    component: UserSingle
  },
  {
    path: '/publications/modify/:id',
    name: 'Modify',
    component: PostModify
  },
  {
    path: '/users/modify/:id',
    name: 'ModifyUser',
    component: UserModify
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
