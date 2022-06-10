import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import RecipesHome from '@/views/RecipesHome.vue'
import RecipesPost from '@/views/RecipesPost.vue'

// Insert the param as a prop
const props = true
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: RecipesHome
  },
  {
    path: '/recipes/:id',
    name: 'Recipes Post',
    component: RecipesPost,
    props
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
