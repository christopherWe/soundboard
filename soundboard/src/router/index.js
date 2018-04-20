import Vue from 'vue'
import Router from 'vue-router'
import view from '@/components/view'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'view',
      component: view
    }
  ]
})
