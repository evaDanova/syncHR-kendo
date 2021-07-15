import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import ButtonsStyle from '../views/ButtonsStyle.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'ButtonsStyle',
    component: ButtonsStyle,
  },
  {
    path: '/dropdowns',
    name: 'DropdownsStyle',
    // route level code-splitting
    // this generates a separate chunk (Dropdowns.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Dropdowns" */ '../views/DropdownsStyle.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;