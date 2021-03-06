import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'login',
    component: () => import('./views/Login.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('./views/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./views/About.vue'),
  },
  ],
});
