import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'

import home from '@/components/Home/Home'

import news from '@/components/News/News'
import liaotian from '@/components/News/Liaotian'
import ltset from '@/components/News/Ltset'

import me from '@/components/Me/Me'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Main,
      children:[
        {
          path: '',
          name: 'Main',
          component:home
        },
        {
          path: 'home',
          name: 'home',
          component:home
        },
        {
          path: 'news',
          name: 'news',
          component:news
        },
        {
          path: 'me',
          name: 'me',
          component:me
        }
      ]
    },
    {
        path: '/liaotian',
        name: 'liaotian',
        component: liaotian, 
    },
    {
      path: '/ltset',
      name: 'ltset',
      component: ltset, 
  },
   
  ]
})
