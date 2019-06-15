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
             :value="fieldData.checkboxValue"
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
    name: 'BaseCheckbox',
    mixins: [MixinInputData, MixinInputMethods],
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      value: {
        type:Array,
        default: () => []
      },
    },
    methods: {
      emitData(event) {
        const isChecked = event.target.checked;
        const newValue = this.value;

        if (isChecked) {
          newValue.push(this.fieldData.value);
        } else {
          newValue.splice(newValue.indexOf(this.fieldData.value), 1);
        }

        this.$emit('change', newValue);
      }
    }
  };
</script>

<style scoped></style>
