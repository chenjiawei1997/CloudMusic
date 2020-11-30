// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

import '@/assets/js/vant.js'
import '@/assets/js/axios.js'
import '@/assets/js/vuex.js'

import api from "@/api";
Vue.prototype.$api = api;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


