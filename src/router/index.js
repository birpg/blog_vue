import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import(/* webpackChunkName: "index" */ '../views/Index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
