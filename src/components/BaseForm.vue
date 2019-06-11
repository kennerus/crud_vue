<template>
  <main>
    <div class="container">
      <component :is="el.component"
                 v-for="(el, index) in form"
                 :key="index"
                 v-model="value[index]"
      />
    </div>
  </main>
</template>

<script>
  import form from '../form/form';

  export default {
    name: "BaseForm",
    props: {
      value: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        form
      }
    }
  }
</script>

<style scoped></style>