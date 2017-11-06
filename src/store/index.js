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
  works_data: [],
  articles_data: {}
}

const mutations = {
  GET_DATA(state, payload) {
    state.base_data = Object.assign({}, state.base_data, payload)
  },
  GET_WORKS(state, payload) {
    state.works_data = state.works_data.concat(payload)
  },
  GET_ARTICLES(state, payload) {
    state.articles_data = payload
  }
}

const actions = {
  getData({ commit }) {
    ajax(io_base).then(res => $dom(res.body)).then($ => {
      commit('GET_DATA', {
        list: homelist($),
        showbox: showbox($)
      })
      hideloadin()
    })
  },
  getListBy({ commit, state }, page) {
    ajax(io_home_list, { page: page }).then(res => $dom(res.body)).then($ => {
      commit('GET_DATA', { list: state.base_data.list.concat(homelist($))})
    })
  },
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
