import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Vux from '../pages/details/Vux'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/vux',
      name: 'Vux',
      component: Vux
    },


    {
      path: '*',
      component: Home
    }
  ]
})
