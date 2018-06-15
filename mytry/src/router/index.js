import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Age from '@/components/ages/Age'
import Mine from '@/components/mine/Mine'
import Pages from '@/components/pages/Pages'
import Users from '@/components/user/User'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/pages'
      // name: 'HelloWorld',
      // component: HelloWorld
    },
    {
      path:'/pages',
      component:Pages
    },
    {
      path:'/ages',
      component:Age
    },
    {
      path:'/mine',
      component:Mine
    },
    {
      path:'/user',
      component:Users
    }
  ]
})
