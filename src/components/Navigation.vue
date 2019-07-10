<template>
  <nav class="navigation container">
    <router-link v-for="link in links"
                 :key="link.url"
                 :to="link.link"
                 class="navigation__link"
    >
      {{ link.name }}
    </router-link>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation',
    props: {
      links: {
        type: Array,
        default: () => [{url: '/', name: 'Home'}]
      }
    }
  }
</script>

<style scoped>
  .navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }
  
  .navigation__link {
    margin-right: 5px;
    padding: 5px;

    color: #695310;
    text-decoration: none;

    background-color: #7388FF;
  }

  .navigation__link:last-child {
    margin-right: 0;
  }

  .navigation__link:hover,
  .navigation__link:active,
  .navigation__link:focus {
    opacity: 0.8;
  }
</style>