import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import 'animate.css';
import PlushiesView from '../views/PlushiesView.vue'
import PrintsView from '../views/PrintsView.vue'
import StationeryView from '../views/StationeryView.vue'
import PhotocardsView from '../views/PhotocardsView.vue'
import ProductView from '../views/ProductView.vue'
import AllProductView from '../views/AllProductView.vue'

const routes = [
  {
    path: '/cart',
    name: 'Cart',
    component: CartView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  },
  {
    path: '/plushies',
    name: 'plushies',
    component: PlushiesView
  },
  {
    path: '/prints',
    name: 'prints',
    component: PrintsView
  },
  {
    path: '/stationery',
    name: 'stationery',
    component: StationeryView
  },
  {
    path: '/photocards',
    name: 'photocards',
    component: PhotocardsView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView
  },
  {
    path: '/allproducts',
    name: 'allproducts',
    component: AllProductView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
