import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'



Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueClipboard);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
