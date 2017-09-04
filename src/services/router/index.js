/*jshint esversion: 6 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home.vue'
import TodoList from '@/components/todolist/todolist.vue'

Vue.use(Router);

// Router
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/todo',
      name: 'todolist',
      component: TodoList
    }
  ]
});
