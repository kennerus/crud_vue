<template>
  <article class="card">
    <header class="card__header">
      <h3 class="card__title">
        {{ value.title }}
      </h3>
    </header>

    <div class="card__body">
      <p class="card__description">
        {{ value.description }}
      </p>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'ItemsListItem',
    props: {
      value: {
        type: Object,
        default: () => ({
          title: '',
          description: '',
          views: 0,
        })
      },

    }
  }
</script>

<style scoped>
  .card {
    padding: 20px 10px;
    box-shadow: 0 0 5px 1px rgba(0,0,0, 0.05);
  }

  .card__title {
    margin: 0;
  }
</style>