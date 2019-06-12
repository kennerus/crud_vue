<template>
  <BaseForm v-model="data"
            :form="form"
            :page-title="pageTitle"
  />
</template>

<script>
  import BaseForm from '../../components/BaseForm';
  import BaseTextarea from "../../components/BasicFormComponents/BaseTextarea";
  import BaseInput from "../../components/BasicFormComponents/BaseInput";
  import BaseInputEmail from "../../components/BasicFormComponents/BaseInputEmail";
  import BaseInputTel from "../../components/BasicFormComponents/BaseInputTel";
  import BaseSelect from "../../components/BasicFormComponents/BaseSelect";
  import BaseRadioButton from "../../components/BasicFormComponents/BaseRadioButton";
  import BaseCheckbox from "../../components/BasicFormComponents/BaseCheckbox";

  export default {
    name: 'FormCreating',
    // eslint-disable-next-line
    components: {BaseForm, BaseTextarea, BaseInput, BaseInputEmail, BaseInputTel, BaseSelect, BaseRadioButton, BaseCheckbox, },
    data() {
      return {
        data: {},
        form: {
          text: {
            id: 'text',
            label: 'Текстовый инпут',
            inputName: 'text',
            fieldName: 'text',
            placeholder: 'Введите текст',
            component: BaseInput
          },
          email: {
            id: 'email',
            label: 'Email инпут',
            inputName: 'email',
            fieldName: 'email',
            component: BaseInputEmail
          },
          radio1: {
            id: 'radio1',
            label: 'Радио кнопка 1',
            inputName: 'radio',
            fieldName: 'radio',
            value: 'Инокентий',
            component: BaseRadioButton
          },
          radio2: {
            id: 'checkbox',
            label: 'Радио кнопка 2',
            inputName: 'checkbox',
            fieldName: 'checkbox',
            value: 'Василий',
            component: BaseRadioButton
          },
          checkbox1: {
            id: 'checkbox1',
            label: 'Чекбокс 1',
            inputName: 'checkbox',
            fieldName: 'checkbox',
            value: 'Василий',
            component: BaseCheckbox
          },
          checkbox2: {
            id: 'checkbox2',
            label: 'Чекбокс 2',
            inputName: 'checkbox',
            fieldName: 'checkbox',
            value: 'Инокентий',
            component: BaseCheckbox
          },
          checkbox3: {
            id: 'checkbox3',
            label: 'Чекбокс 3',
            inputName: 'checkbox',
            fieldName: 'checkbox',
            value: 'Владимир',
            component: BaseCheckbox
          },
          tel: {
            id: 'tel',
            label: 'Телефон',
            inputName: 'tel',
            fieldName: 'tel',
            placeholder: 'Введите телефон',
            component: BaseInputTel
          },
          textarea: {
            id: 'textarea',
            label: 'Текстареа',
            inputName: 'textarea',
            fieldName: 'textarea',
            placeholder: 'Напишите текст',
            component: BaseTextarea
          },
        },
        pageTitle: 'Форма создания'
      }
    }
  };
</script>

<style scoped></style>
