import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import NotifyMessage from './mixins/notify-messagen.mixin'
import Vuelidate from 'vuelidate'
import VueLoading from 'vuejs-loading-plugin'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueLoading)
Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.mixin({
  mixins: [NotifyMessage],
  data () {
    return {
      atributosCarregamento: {
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel
      },
      carregamento: this.$loading
    }
  },
  methods: {
    async skeleton (params) {
      if (!params.noLoading) {
        this.$loading(true)
      }
      try {
        await store.dispatch(params.urlDispatch, params.params)
        if (params.messages) this.$setNotifySuccess(params.messages)
        if (params.callback) params.callback()
      } catch (errors) {
        this.$setNotifyDanger(errors)
      } finally {
        this.$loading(false)
      }
    },
    async $list (params) {
      await this.skeleton(params)
    },
    async $listFilter (params) {
      await this.skeleton(params)
    },
    async $createOrUpdate (params) {
      await this.skeleton(params)
    },
    async $remove (params) {
      await this.skeleton(params)
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
