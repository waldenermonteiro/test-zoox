import Vue from 'vue'
import Vuex from 'vuex'
import State from '../views/state/store'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    State
  }
})
