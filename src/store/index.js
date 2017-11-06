import Vue from 'vue'
import Vuex from 'vuex'
import NProgress from 'NProgress'
import 'NProgress/nprogress.css'
Vue.use(Vuex)

import {
  jsonp as ajax,
  $dom,
  homelist,
  showbox,
} from '../utils/util'

import {
  io_base,
  io_home_list,
} from '../utils/url'

const state = {
  base_data: {list:[]},
}

const mutations = {
  GET_DATA(state, payload) {
    state.base_data = Object.assign({}, state.base_data, payload)
  },
}

const actions = {
  getListBy({ commit, state }, page) {
    ajax(io_home_list, { page: page }).then(res => $dom(res.body)).then($ => {
      let newData = homelist($);
      let hasNewData = false;
      if(newData.length>0){
        hasNewData = true;
      }
      commit('GET_DATA', { list: state.base_data.list.concat(newData),hasNewData:hasNewData})
    })
  },
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
