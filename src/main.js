import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import http from './assets/lib/http'
import store from './store'
Vue.prototype.$http = http
Vue.use(Element)
Vue.filter('playCount', function (val) {
  console.log(val)
  if (val > 10000 && val < 100000000) {
    return val = parseInt(val / 10000) + "万"
  }
  if (val > 100000000 && val) {
    return val = parseInt(val / 100000000) + '亿'
  }
})


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
