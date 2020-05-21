import Vue from 'vue'
import VueRouter from 'vue-router'
import Clothes from '../views/Clothes.vue'
import Loading from '../views/Loading.vue'
import Checkout from "../views/Checkout";
import ClotnesInfo from '../components/ClothesInfo.vue'
import Caps from '../components/Caps.vue'
import T_shirts from '../components/T-shirts.vue'
import Sweatshirts from '../components/Sweatshirts.vue'
import OutOfService from '../components/OutOfService.vue'
import PurchaseCompleted from '../components/PurchaseCompleted.vue'
import CartSection from "../components/CartSection"
import AdminSection from  '../components/AdminSection'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Loading',
    component: Loading
  },
  {
    path: '/clothes',
    name: 'clothes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Clothes.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import(/* webpackChunkName: "about" */ '../views/Checkout.vue')
  },
    { path: '/cart', component: CartSection},
    { path: '/clothes/:name', name:'clothes-info', component: ClotnesInfo},
    { path: '/caps', component: Caps},
    { path: '/t-shirts', component: T_shirts},
    { path: '/sweatshirts', component: Sweatshirts},
    { path: '/outOfService', component: OutOfService},
    { path: '/purchaseCompleted', component: PurchaseCompleted},
    { path: '/admin', component: AdminSection},




  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
