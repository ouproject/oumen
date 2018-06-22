import Vue from 'vue'
import Router from 'vue-router'


import Age from '@/components/ages/Age'
import Mine from '@/components/mine/Mine'
import Pages from '@/components/pages/Pages'
import Users from '@/components/user/User'

import Order from '@/components/user/Order'
import Collect from '@/components/user/Collect'
import Family from '@/components/user/Family'
import Orderdetail from '@/components/user/Orderdetail'
import Familynum from '@/components/user/Familynum'
import Searchlist from '@/components/list/Searchlist'
import WriteTime from '@/components/listDetail/WriteTime'

import Register from '@/components/register/Register'
import Login from '@/components/register/Login'
import List from '@/components/list/List'
import WirteInfo from '@/components/listDetail/WirteInfo'
import Detail from '@/components/listDetail/Detail'
import PayMoney from '@/components/listDetail/PayMoney'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/pages'
    },
    {
      path:'/pages',
      name:'pages',
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
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/collect',
      component:Collect
    },
    {
      path:'/family',
      component:Family
    },
    {
      path:'/orderdetail',
      component:Orderdetail
    },
    {
      path:'/familynum',
      component:Familynum
    },
    {
      path:'/searchlist',
      name:'searchlist',
      component:Searchlist
    },
    {
      path:'/time',
      component:WriteTime
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/register',
      component:Register
    },
    {
      path:'/list',
      component:List
    },
    {
      path:'/wirteInfo',
      component:WirteInfo
    },
    {
      path:'/detail',
      component:Detail

    },
    {
      path:'/pay',
      component:PayMoney

    }



  ]
})
