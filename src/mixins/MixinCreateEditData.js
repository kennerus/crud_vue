import BaseTextarea from "../components/BasicFormComponents/BaseTextarea";
import BaseInput from "../components/BasicFormComponents/BaseInput";
import BaseInputEmail from "../components/BasicFormComponents/BaseInputEmail";
import BaseInputTel from "../components/BasicFormComponents/BaseInputTel";
import BaseSelect from "../components/BasicFormComponents/BaseSelectSingle";
import BaseRadioButton from "../components/BasicFormComponents/BaseRadioButton";
import BaseCheckbox from "../components/BasicFormComponents/BaseCheckbox";
import BaseCheckboxBoolean from "../components/BasicFormComponents/BaseCheckboxBoolean";
import BaseSelectSingle from "../components/BasicFormComponents/BaseSelectSingle";

export default {
  // eslint-disable-next-line
  components: {BaseTextarea, BaseInput, BaseInputEmail, BaseInputTel, BaseSelect, BaseRadioButton, BaseCheckbox, BaseCheckboxBoolean},
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
          radioValue: 'Инокентий',
          component: BaseRadioButton
        },
        radio2: {
          id: 'radio2',
          label: 'Радио кнопка 2',
          inputName: 'radio',
          fieldName: 'radio',
          radioValue: 'Василий',
          component: BaseRadioButton
        },
        checkbox1: {
          id: 'checkbox1',
          label: 'Чекбокс 1',
          inputName: 'checkbox',
          fieldName: 'checkbox',
          checkboxValue: 'Василий',
          component: BaseCheckbox
        },
        checkbox2: {
          id: 'checkbox2',
          label: 'Чекбокс 2',
          inputName: 'checkbox',
          fieldName: 'checkbox',
          checkboxValue: 'Инокентий',
          component: BaseCheckbox
        },
        checkbox3: {
          id: 'checkbox3',
          label: 'Чекбокс 3',
          inputName: 'checkbox',
          fieldName: 'checkbox',
          checkboxValue: 'Владимир',
          component: BaseCheckbox
        },
        checkboxBoolean: {
          id: 'checkboxBoolean',
          label: 'Чекбокс булев',
          inputName: 'checkboxBoolean',
          fieldName: 'checkboxBoolean',
          component: BaseCheckboxBoolean
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
        select: {
          id: 'select',
          label: 'Селект',
          inputName: 'select',
          fieldName: 'select',
          options: [
            {
              name: 'select 1',
              id: 1,
            },
            {
              name: 'select 2',
              id: 2
            },
          ],
          placeholder: 'Сделайте выбор',
          component: BaseSelectSingle
        },
      },
      formElements: {BaseTextarea, BaseInput, BaseInputEmail, BaseInputTel, BaseSelect, BaseRadioButton, BaseCheckbox, BaseCheckboxBoolean, BaseSelectSingle},
    }
  }
}