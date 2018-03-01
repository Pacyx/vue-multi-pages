import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from '@/modules/login/LoginForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginForm',
      component: LoginForm
    }
  ]
})
