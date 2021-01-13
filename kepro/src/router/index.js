import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BlogList from '../views/BlogList.vue'
import BlogContent from '../views/BlogContent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/:id',
    name: 'BlogListPage',
    component: BlogList
  },
  {
    path: '/category/:id/:bid',
    name: 'BlogContentPage',
    component: BlogContent
  }
]

const router = new VueRouter({
  routes
})

export default router
