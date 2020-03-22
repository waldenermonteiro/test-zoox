import Vue from 'vue'
import Vuex from 'vuex'
import Estado from '../views/estado/store'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    Estado
  }
})
