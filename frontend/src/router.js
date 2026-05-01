// frontend/src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Admin from './views/Admin.vue'
import Login from './views/Login.vue' // HAKIKISHA HII IPO

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login }, // HAKIKISHA HII IPO
  { 
    path: '/admin', 
    component: Admin,
    meta: { requiresAuth: true } 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn')
    if (isLoggedIn) {
      next()
    } else {
      next('/login') // Kama hajalogin mpeleke hapa
    }
  } else {
    next()
  }
})

export default router