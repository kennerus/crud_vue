<template>
  <BaseForm v-model="data" />
</template>

<script>
  import BaseForm from '../../components/BaseForm';

  export default {
    name: 'FormCreating',
    components: {BaseForm},
    data() {
      return {
        data: {
          text: '',
          email: '',
          tel: '',
          textarea: '',
        }
      }
    }
  };
</script>

<style scoped></style>
