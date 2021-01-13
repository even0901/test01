import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import channelManage from '../views/channelManage.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/channelManage',
    name: 'channelManagePage',
    component: channelManage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router