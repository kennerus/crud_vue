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
  import BaseTextarea from "./BasicFormComponents/BaseTextarea";
  import BaseInput from "./BasicFormComponents/BaseInput";
  import BaseInputEmail from "./BasicFormComponents/BaseInputEmail";
  import BaseInputTel from "./BasicFormComponents/BaseInputTel";
  import BaseSelect from "./BasicFormComponents/BaseSelect";
  import BaseRadioButton from "./BasicFormComponents/BaseRadioButton";
  import BaseCheckbox from "./BasicFormComponents/BaseCheckbox";

  export default {
    name: "BaseForm",
    components: {BaseCheckbox, BaseRadioButton, BaseSelect, BaseInputTel, BaseInputEmail, BaseInput, BaseTextarea},
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
    data() {
      return {}
    }
  }
</script>

<style scoped></style>