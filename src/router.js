import Vue from 'vue'
import Router from 'vue-router'

import Content from './views/contentframe.vue'
import Dashboard from './views/dashboard.vue'
import Settings from './views/settings.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/content',
      component: Content
    },
    {
      path: '/settings',
      component: Settings
    }
  ]
})
