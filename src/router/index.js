import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewCard from '../components/NewCard.vue'

import CoffeeShop1_1 from '../components/CoffeeShop1.vue';
import CoffeeShop2_2 from '../components/CoffeeShop2.vue';
import CoffeeShop3_3 from '../components/CoffeeShop3.vue';
import CoffeeShop4_4 from '../components/CoffeeShop4.vue';
import CoffeeShop5_5 from '../components/CoffeeShop5.vue';
import CoffeeShop6_6 from '../components/CoffeeShop6.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/news',
      name: 'allnews',
      component: NewCard
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    
    },
    {
      path: '/review',
      name: 'review',
      component: () => import('../views/Review.vue')
    },
    {
      path: '/CoffeeShopp',
      name: 'CoffeeShopp',
      component: () => import('../views/CoffeeShopp.vue')
    },
    {
      path: '/CoffeeShop/1',
      name: 'CoffeeShop1',
      component: CoffeeShop1_1,
      props: true
    },
    {
      path: '/CoffeeShop/2',
      name: 'CoffeeShop2',
      component: CoffeeShop2_2,
      props: true
    },
    {
      path: '/CoffeeShop/3',
      name: 'CoffeeShop3',
      component: CoffeeShop3_3,
      props: true
    },
    {
      path: '/CoffeeShop/4',
      name: 'CoffeeShop4',
      component: CoffeeShop4_4,
      props: true
    },
    {
      path: '/CoffeeShop/5',
      name: 'CoffeeShop5',
      component: CoffeeShop5_5,
      props: true
    },
    {
      path: '/CoffeeShop/6',
      name: 'CoffeeShop6',
      component: CoffeeShop6_6,
      props: true
    }


  ]

})

export default router