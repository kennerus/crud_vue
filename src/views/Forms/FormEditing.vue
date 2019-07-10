<template>
  <BaseForm v-model="data"
            :form="form"
            :page-title="pageTitle"
  />
</template>

<script>
  import BaseForm from '../../components/BaseForm';
  import MixinCreateEditData from '../../mixins/MixinCreateEditData';

  export default {
    name: 'FormEditing',
    components: {BaseForm},
    mixins: [MixinCreateEditData],
    data() {
      return {
        pageTitle: 'Форма редактирования'
      }
    },
  }
</script>

<style scoped>

</style>