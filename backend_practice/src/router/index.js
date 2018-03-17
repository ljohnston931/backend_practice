import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import WhichDay from '@/components/WhichDay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/which_day',
      name: 'WhichDay',
      component: WhichDay
    }
  ]
})
