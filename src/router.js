import Vue from 'vue';
import Router from 'vue-router';
import FormCreating from './views/Forms/FormCreating';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: FormCreating
    }
  ]
});
