<template>
  <main>
    <div class="container">
      <h1 class="base-title">
        {{ pageTitle }}
      </h1>

      <form class="base-main-content">
        <component :is="el.component"
                   v-for="(el, index) in form"
                   :key="index"
                   v-model="value[el.fieldName]"
                   :field-data="el"
        />
      </form>
    </div>
  </main>
</template>

<script>
  import FormField from '../models/FormField';

  export default {
    name: "BaseForm",
    props: {
      value: {
        type: Object,
        default: () => {
        }
      },
      form: {
        type: Object,
        default: () => FormField
      },
      pageTitle: {
        type: String,
        default: ''
      }
    },
  }
</script>

<style scoped></style>