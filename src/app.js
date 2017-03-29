import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import App from './views/app.vue'

import WebFont from 'webfontloader'

import 'purecss'
import 'purecss/build/grids-responsive-min.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false
Vue.use(VueResource)

sync(store.store, router)

WebFont.load({
  google: {
    families: ['Gentium Basic', 'Open Sans']
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
