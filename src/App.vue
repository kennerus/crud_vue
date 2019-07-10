<template>
  <div id="app">
    <Navigation :links="links" />

    <router-view />
  </div>
</template>

<script>
  import Navigation from './components/Navigation';

  export default {
    components: {Navigation},
    data() {
      return {
        links: [
          {
            link: '/create',
            name: 'Создание'
          },
          {
            link: '/edit',
            name: 'Редактирование'
          },
          {
            link: '/list',
            name: 'Список'
          },
        ]
      }
    }
  }
</script>

<style>
  @import "assets/common.css";
</style>
