<template>
  <BaseForm v-model="data"
            :form="form"
            :page-title="pageTitle"
  />
</template>

<script>
  import BaseForm from '../../components/BaseForm';
  import {mapActions} from 'vuex';
  import MixinCreateEditeData from '../../mixins/MixinCreateEditData';

  export default {
    name: 'FormCreating',
    components: {BaseForm},
    mixins: [MixinCreateEditeData],
    data() {
      return {
        pageTitle: 'Форма создания'
      }
    },
    async created() {
      // const inputsData = await this.GET_FORM_INPUTS_DATA();
      //
      // for (let key in inputsData.data) {
      //   inputsData.data[key].component = this.formElements[inputsData.data[key].component];
      // }
      //
      // this.form = inputsData.data;
    },
    methods: {
      ...mapActions({
        GET_FORM_INPUTS_DATA: 'GET_FORM_INPUTS_DATA'
      }),
    }
  };
</script>

<style scoped></style>
