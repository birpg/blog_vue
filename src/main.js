import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/api'
import antd from './plugin/antd'

Vue.config.productionTip = false

Vue.prototype.$api = api

Vue.use(antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
