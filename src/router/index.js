//import Vue from 'vue'
//import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//
//Vue.use(Router)
//
//export default new Router({
//  routes: [
//    {
//      path: '/',
//      name: 'HelloWorld',
//      component: HelloWorld
//    }
//  ]
//})


import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sceen1 from '@/components/Sceen1'
import Scene2 from '@/components/Sceen2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sceen1',
      name: 'Sceen1',
      component: Sceen1
    },
    {
      path: '/sceen2',
      name: 'Sceen2',
      component: Scene2
    }  
  ]
})


