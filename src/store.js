import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    content: 'https://login.harding.edu/login?service=https%3A%2F%2Fpipeline.harding.edu%2Fstart-session&renew=true'
  },
  mutations: {
    updateContent (state, newContent) {
      state.content = newContent
    }
  }
})
