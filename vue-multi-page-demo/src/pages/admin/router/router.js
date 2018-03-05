import Vue from 'vue'
import Router from 'vue-router'
import Adminpage from '@/modules/admin/admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Adminpage',
      component: Adminpage
    }
  ]
})
