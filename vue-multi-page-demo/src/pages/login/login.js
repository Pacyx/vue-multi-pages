// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './Login'
import router from './router/router'
import iView from 'iview';
import VueCookie from 'vue-cookie'
import axios from 'axios'
// import VueAxios from 'vue-axios'

import 'iview/dist/styles/iview.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.use(iView);
Vue.use(VueCookie);
// Vue.use(VueAxios, axios)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  render: h => h(App)
})
