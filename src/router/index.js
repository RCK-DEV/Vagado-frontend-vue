import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import QuizSelection from '../views/QuizSelection.vue'
import QuizStart from '../views/QuizStart.vue'
import QuizPlay from '../views/QuizPlay.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/quiz/selection',
    name: 'quiz-select',
    component: QuizSelection
  },
  {
    path: '/quiz/start/:id',
    name: 'quiz-start',
    component: QuizStart
  },
  {
    path: '/quiz/play/:id/:question',
    name: 'quiz-play',
    component: QuizPlay
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
