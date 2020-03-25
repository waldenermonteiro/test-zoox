import Vue from 'vue'
import Vuex from 'vuex'
import State from '../views/state/store'
import Cidade from '../views/cidade/store'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    State,
    Cidade
  }
})
