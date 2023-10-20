import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Warning',
    component: () => import('../views/Warning.vue')
  },
  {
    path: '/Path',
    name: 'Path',
    component: () => import('../views/Path.vue')
  },
  {
    path:'/Home',
    name:'Home',
    component:() =>import('../views/front/Home.vue'),    
    children:[
      {
        path:'',
        name:'Index',
        component:() =>import('../views/front/Index.vue')
      },
      {
      path:'Shop',
      name:'Shop',
      component:() =>import('../views/front/Shop.vue')
      },
    ]
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },

})

export default router




