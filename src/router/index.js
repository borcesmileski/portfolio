import Vue from 'vue'
import VueRouter from 'vue-router'
import Portfolio from '../views/Portfolio'

Vue.use(VueRouter)

const routes = [
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
