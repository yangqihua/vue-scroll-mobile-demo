// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store'
import './style/index.less'
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)
require('es6-promise').polyfill()

Vue.use(VueLazyload)
FastClick.attach(document.body)

// 仅仅只是VueScroller需要全局注册
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')

