import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Q1',
      name: 'Q1',
      component: () => import('../views/Q1View.vue')
    },
    {
      path: '/Q2',
      name: 'Q2',
      component: () => import('../views/Q2View.vue')
    },
    {
      path: '/Q3',
      name: 'Q3',
      component: () => import('../views/Q3View.vue')
    },
    {
      path: '/Q4',
      name: 'Q4',
      component: () => import('../views/Q4View.vue')
    },
    {
      path: '/Q5',
      name: 'Q5',
      component: () => import('../views/Q5View.vue')
    },
    {
      path: '/Q6',
      name: 'Q6',
      component: () => import('../views/Q6View.vue')
    },
    {
      path: '/Q7',
      name: 'Q7',
      component: () => import('../views/Q7View.vue')
    },
    {
      path: '/Q8',
      name: 'Q8',
      component: () => import('../views/Q8View.vue')
    },
    {
      path: '/Q9',
      name: 'Q9',
      component: () => import('../views/Q9View.vue')
    },
    {
      path: '/Q20100000/:id',
      name: 'Q10',
      component: () => import('../views/Q10View.vue')
    },
    {
      path: '/Q11',
      name: 'Q11',
      component: () => import('../views/Q11LayoutView.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Q11View.vue')
        }
      ]
    },
    {
      path: '/Q12',
      name: 'Q12',
      component: () => import('../views/Q12View.vue')
    },
    {
      path: '/Q13',
      name: 'Q13',
      component: () => import('../views/Q13View.vue')
    }
  ]
});

router.beforeEach(async (to, from) => {
  // 檢查cookie是否有token
  const isAuthenticated = document.cookie.includes('token=');

  if (!isAuthenticated && to.name == 'Q12') {
    console.log('驗證未通過');
    return { name: 'Q1' };
  }
});

export default router;
