import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Estado from '../views/estado/EstadoLista.vue'
import Cidade from '../views/cidade/CidadeLista.vue'

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
    component: Estado
  },
  {
    path: '/cidades',
    name: 'Cidades',
    component: Cidade
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
