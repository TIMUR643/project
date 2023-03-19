import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import PlayView from '../views/PlayView.vue'
import TestView from '../views/TestView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'home',
    redirect: '/play'
  },
  {
    path: '/play',
    name:'play',
    component: PlayView,
  },
  {
    path: '/test',
    name:'test',
    component: TestView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
