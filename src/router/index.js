import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components'
// TODO 使用路由
// 此项目只是监听路由参数的变化来切换数据,并没有切换组件
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
