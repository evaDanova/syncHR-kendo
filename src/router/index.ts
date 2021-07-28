import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import ButtonsStyle from '../views/ButtonsStyle.vue';
import PanelStyle from '../views/PanelStyle.vue';
import FormsStyle from '../views/FormsStyle.vue';
import CardsStyle from '../views/CardsStyle.vue';
import DialogsStyle from '../views/DialogsStyle.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  // {
  //   path: '/',
  //   name: 'PanelStyle',
  //   component: PanelStyle,
  // },
  {
    path: '/',
    name: 'ButtonsStyle',
    component: ButtonsStyle,
  },
  {
    path: '/forms',
    name: 'FormsStyle',
    component: FormsStyle,
  },
  {
    path: '/card',
    name: 'CardsStyle',
    component: CardsStyle,
  },
  {
    path: '/dialog',  
    name: 'DialogsStyle',
    component: DialogsStyle,
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
