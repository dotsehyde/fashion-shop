import { createRouter, createWebHistory } from 'vue-router'
import Home from '../src/pages/Home.vue'
import About from '../src/pages/About.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../src/pages/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
