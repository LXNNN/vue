import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WatchTest from '@/components/WatchTest'
import KeepAliveDemo from '@/components/KeepAliveDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/watch',
      name: 'WatchTest',
      component: WatchTest
    },
    {
      path: '/alive',
      name: 'KeepAliveDemo',
      component: KeepAliveDemo
    }
  ]
})
