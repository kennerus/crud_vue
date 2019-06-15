<template>
  <div class="base-input-wrap" :class="fieldData.classNameWrap">
    <label :for="fieldData.id"
           class="base-label"
           :class="fieldData.classNameLabel"
    >
      {{ fieldData.label }}
      <input :id="fieldData.id"
             :ref="fieldData.ref"
             type="checkbox"
             class="base-input_radio"
             :placeholder="fieldData.placeholder"
             :name="fieldData.inputName"
             :class="fieldData.className"
             :ckecked="value"
             :value="value"
             @change="emitData"
      >

      <font-awesome-icon :icon="['far', 'square']" class="base-input_unchecked" />
      <font-awesome-icon :icon="['far', 'check-square']" class="base-input_checked" />
    </label>
  </div>
</template>

<script>
  import MixinInputData from '../../mixins/MixinInputData';
  import MixinInputMethods from '../../mixins/MixinInputMethods';

  export default {
    name: 'BaseCheckboxBoolean',
    mixins: [MixinInputData, MixinInputMethods],
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      trueValue: {
        type: Boolean,
        default: true
      },
      falseValue: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      emitData(event) {
        const isChecked = event.target.checked;
        this.$emit('change', isChecked ? this.trueValue : this.falseValue)
      }
    }
  }
</script>

<style scoped>

</style>