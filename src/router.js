import Vue from 'vue';
import Router from 'vue-router';
import FormCreating from './views/Forms/FormCreating';
import FormEditing from './views/Forms/FormEditing';
import ItemsList from './views/ItemsList/ItemsList';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/list'
    },
    {
      path: '/create',
      name: 'create',
      component: FormCreating
    },
    {
      path: '/edit',
      name: 'edit',
      component: FormEditing
    },
    {
      path: '/list',
      name: 'list',
      component: ItemsList
    },
    {
      path: '/single',
      name: 'single',
      component: FormCreating
    }
  ]
});
