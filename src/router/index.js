import Vue from 'vue'
import VueRouter from 'vue-router'
import TriviaView from '../views/TriviaView.vue'
import SuggestionsView from '../views/SuggestionsView.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: TriviaView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  },
  {
    path: '/suggestions',
    name: 'suggestions',
    component: SuggestionsView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
