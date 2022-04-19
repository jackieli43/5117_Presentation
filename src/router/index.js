import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ExampleView from '../views/ExampleView.vue'
import ExampleIdView from '../views/ExampleIdView.vue'
import SpecialTopics from '../views/SpecialTopics.vue'

import {auth} from "@/firebaseConfig.js"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/example',
    name: 'example',
    component: ExampleView
  },
  {
    path: '/example/:id',
    name: 'example',
    component: ExampleIdView,
    props:true
  },
  {
    path: '/special-topics',
    name: 'special-topics',
    component: SpecialTopics
  },
  {
    path: '/about',
    name: 'about',
    meta: { // connects with the function later in this file.
      requiresAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/')
    // could also just fire off a redirect login here, or redirect based on a meta property!
  } else {
    next()
  }
})

export default router
