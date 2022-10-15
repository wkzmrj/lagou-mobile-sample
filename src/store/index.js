import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(window.localStorage.getItem('lagouedu-mobile-user') || null)
  },
  getters: {
  },
  mutations: {
    setUser (state, payload) {
      state.user = JSON.parse(payload)
      window.localStorage.setItem('lagouedu-mobile-user', payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
