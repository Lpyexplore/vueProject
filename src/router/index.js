import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import("../views/home/Home.vue")
const Classifi = () => import('../views/classifi/Classifi.vue')
const Shopcart = () => import('../views/shopcart/Shopcart.vue')
const Personal = () => import('../views/personal/Personal.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classifi',
    component: Classifi
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/personal',
    component: Personal
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
