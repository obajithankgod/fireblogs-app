import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import ForgotPage from '../views/ForgotPage.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
   
  },
  {
    path:'/blogs',
    name: 'Blogs',
    component:BlogView,
    
  },
  {
    path:'/login',
    name: 'LoginPage',
    component:LoginPage,
    
  },
  {
    path:'/register',
    name: 'Register',
    component:RegisterPage,
   
  },
  {
    path:'/forgot-password',
    name: 'ForgotPassword',
    component:ForgotPage,
   
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title =`${ process.env.VUE_APP_TITLE } - ${to.name}`
  next();
});

export default router
