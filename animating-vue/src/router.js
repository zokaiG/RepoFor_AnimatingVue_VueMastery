import Vue from 'vue'
import Router from 'vue-router'
import Modal from './views/Modal.vue'
import List from './views/List.vue'
import Drawer from './views/Drawer.vue'
import Cards from './views/Cards.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'modal',
      component: Modal
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/drawer',
      name: 'drawer',
      component: Drawer
    },
    {
      path: '/cards',
      name: 'cards',
      component: Cards
    }
  ]
})
