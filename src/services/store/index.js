/*jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';
import http from '../rest';

Vue.use(Vuex);

const moduleRestApi = {
  namespaced: true,
  actions: {
    getUsers(state) { return http.get('users'); },
    getUserById(state, id) { return http.get('users/' + id); },
    getUserByLoginPassword(state, params) {
      return http.get('users/login/' + params.login + "/password/" + params.password);
    },
  },
};

export default new Vuex.Store({
  modules: {
    restApi: moduleRestApi
  }
});
