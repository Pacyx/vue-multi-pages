import Vue from 'vue'
import Router from 'vue-router'
import Indexpage from '@/modules/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Indexpage',
      component: Indexpage
    }
  ]
})
