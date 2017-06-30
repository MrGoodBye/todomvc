import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:visibility',
      name: 'Hello',
      component: Hello
    }
  ]
})
