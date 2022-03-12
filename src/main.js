import Vue from 'vue'
import App from './App.vue'
import router from './router'
import trivia from './mock-data.js'

Vue.config.productionTip = false

let data = {
  trivia: trivia,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
