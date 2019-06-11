export default {
  methods: {
    InputEvents_inputEmit(value) {
      this.$emit('input', value);
    },
    InputEvents_changeEmit(value) {
      this.$emit('change', value);
    },
    InputEvents_focusEmit(value) {
      this.$emit('focus', value);
    },
    InputEvents_blurEmit(value) {
      this.$emit('blur', value);
    }
  }
};
