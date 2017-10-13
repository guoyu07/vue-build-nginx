import Vue from 'vue'
import Router from 'vue-router'
import Top250 from '@/pages/Top250'
import UpComing from '@/pages/UpComing'
import Moving from '@/pages/Moving'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'moving',
      component: Moving
    },
    {
      path: '/top250',
      name: 'top250',
      component: Top250
    },
    {
      path: '/upComing',
      name: 'upComing',
      component: UpComing
    }
  ]
})
