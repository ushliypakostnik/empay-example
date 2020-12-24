import Vue from 'vue';
import Router from 'vue-router';

import CardPage from '@/components/Views/CardPage/CardPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Card Page',
      component: CardPage,
    },
    {
      path: '*',
      name: 'NotFound',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "NotFound" */ '@/components/Views/NotFound'),
    },
  ],
});
