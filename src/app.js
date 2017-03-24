import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import App from './views/app.vue'

/* eslint-disable no-unused-vars */
import purecss from 'purecss'
import grid from 'purecss/build/grids-responsive-min.css'
import fontawesome from 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
