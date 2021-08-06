import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import FormsStyle from '../views/FormsStyle.vue';
import CardsStyle from '../views/CardsStyle.vue';
import DialogsStyle from '../views/DialogsStyle.vue';
import TablesStyle from '../views/TablesStyle.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [

  
  {
    path: '/',
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
  path: '/table',  
  name: 'TablesStyle',
  component: TablesStyle,
},
 
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
