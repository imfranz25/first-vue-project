import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomePage.vue'
import Products from '@/views/ProductsPage.vue'
import Orders from '@/views/OrdersPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
