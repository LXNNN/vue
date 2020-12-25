// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/store"
import './components/base/index'
// process.env.MOCK && require('@/mock')
console.log('mock->', process.env.MOCK)
// if (process.env.MOCK) {    // 判断是否为mock模式
  // require('../mock/server')
// }

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
