// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import Total from './mixin/total'
import App from './App'
import router from './router'
import store from './store'
import './style/index.less'
require('es6-promise').polyfill()

Vue.use(VueLazyload)
Vue.use(Total)
FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')

store.dispatch('getData')
