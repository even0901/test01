import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    muChannels(state, n) {
      state.list = n
      console.log(n);
    },
    decrement(state, index) {
      state.list.splice(index, 1)
      console.log(state.list);
    },
    increment(state, item) {
      state.list.push(item)
    }
  },
  actions: {
    getChannels(a, n) {
      axios.get('/json/nav.json')
        .then(function (res) {
          n = res.data.result
          a.commit('muChannels', n)
        })
    }
  },

  modules: {}
})