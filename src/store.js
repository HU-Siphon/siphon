import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebarMinimized: false,
    content: 'https://login.harding.edu/login?service=https%3A%2F%2Fpipeline.harding.edu%2Fstart-session&renew=false'
  },
  mutations: {
    updateContent (state, newContent) {
      state.content = newContent
    }
  }
})
