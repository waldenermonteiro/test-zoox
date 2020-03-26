import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import State from '../views/state/StateList.vue'
import City from '../views/city/CityList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/estados',
    name: 'Estados',
    component: State
  },
  {
    path: '/cidades',
    name: 'Cidades',
    component: City
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
