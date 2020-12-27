import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WatchTest from '@/components/WatchTest'
import KeepAliveDemo from '@/components/KeepAliveDemo'
import RouterDemo from '@/components/RouterDemo/index'
import Children1 from '@/components/RouterDemo/Children1'
import Children2 from '@/components/RouterDemo/Children2'
import NotFind from '@/components/NotFind'

Vue.use(Router)

export default new Router({
  linkActiveClass: '_active',  //匹配高亮
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
    },
    {
      path: '/router/:id',
      name: 'RouterDemo',
      component: RouterDemo,
      children: [
        {
          path: 'children1',
          component: Children1
        },
        {
          path: 'children2',
          component: Children2
        }
      ]
    },
    {
      path: '*',
      name: 'NotFind',
      component: NotFind
    }
  ]
})
