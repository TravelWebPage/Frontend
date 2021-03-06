import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vuetify from 'vuetify'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import axios from 'axios'
import './index.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(Vuetify, {
  iconfont: 'fa'
 })

