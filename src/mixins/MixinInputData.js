import InputField from '../models/InputField';

export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    fieldData: {
      type: Object,
      default: () => InputField
    }
  },
  data() {
    return {

    }
  }
}