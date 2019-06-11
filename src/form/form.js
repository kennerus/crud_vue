import BaseInput from '../components/BasicFormComponents/BaseInput';
import BaseInputEmail from '../components/BasicFormComponents/BaseInputEmail';
import BaseInputTel from '../components/BasicFormComponents/BaseInputTel';
import BaseTextarea from '../components/BasicFormComponents/BaseTextarea';

export default {
  text: {
    id: 'text',
    label: 'Текстовый инпут',
    name: 'text',
    ref: '',
    classNameWrap: '',
    classNameLabel: '',
    className: '',
    placeholder: 'Введите текст',
    component: BaseInput
  },
  email: {
    id: 'email',
    label: 'Email инпут',
    name: 'email',
    ref: '',
    classNameWrap: '',
    classNameLabel: '',
    className: '',
    placeholder: 'Введите email',
    component: BaseInputEmail
  },
  tel: {
    id: 'tel',
    label: 'Телефон',
    name: 'tel',
    ref: '',
    classNameWrap: '',
    classNameLabel: '',
    className: '',
    placeholder: 'Введите телефон',
    component: BaseInputTel
  },
  textarea: {
    id: 'textarea',
    label: 'Текстареа',
    name: 'textarea',
    ref: '',
    classNameWrap: '',
    classNameLabel: '',
    className: '',
    placeholder: 'Напишите текст',
    component: BaseTextarea
  },
}