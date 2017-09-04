/*jshint esversion: 6 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueSession from 'vue-session';
import Css from './main.css';
import App from './App';
import theme from './theme';
import router from './services/router';
import store from './services/store';
import http from './services/rest';

Vue.config.productionTip = false;
Vue.use(VueSession);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
