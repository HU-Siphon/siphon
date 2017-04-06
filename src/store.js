import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebarMinimized: false,
    content: 'https://pipeline.harding.edu/'
  },
  mutations: {
    updateContent (state, newContent) {
      state.content = newContent
    },
    updateSidebarMinimized (state, value) {
      state.sidebarMinimized = value
    }
  }
})
