import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      props:true,
      component: () => import('../views/aboutMock/index.vue')
    },
    {
      path: '/aboutEcharts',
      name: 'aboutEcharts',
      props:true,
      component: () => import('../views/aboutEcharts/index.vue')
    },
    {
      path: '/aboutMyFinance',
      name: 'aboutMyFinance',
      component: () => import('../views/aboutMyFinance/index.vue')
    },
    {
      path: '/aboutWindow',
      name: 'aboutWindow',
      component: () => import('../views/aboutWindow/index.vue')
    },
    {
      path: '/aboutSignature',
      name: 'aboutSignature',
      component: () => import('../views/aboutSignature/index.vue')
    },
    {
      path: '/aboutNewSignature',
      name: 'aboutNewSignature',
      component: () => import('../views/aboutNewSignatrue/index.vue')
    },
    {
      path: '/aboutpdf',
      name: 'aboutpdf',
      component: () => import('../views/aboutpdf/index.vue')
    },
    {
      path: '/aboutdistpdf',
      name: 'aboutdistpdf',
      component: () => import('../views/aboutdistpdf/index.vue')
    },
    {
      path: '/pdf',
      name: 'pdf',
      component: () => import('../components/pdf/index.vue'),
    },
    {
      path: '/aboutComputedWatch',
      name: 'aboutComputedWatch',
      component: () => import('../views/aboutComputedWatch/index.vue'),
    },
    {
      path: '/aboutTable',
      name: 'aboutTable',
      component: () => import('../views/aboutTable/index.vue'),
    }
  ]
})
