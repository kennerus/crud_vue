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
             :value="fieldData.value"
             @input="inputEvents_inputEmit($event.target.value)"
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
    props: {
      value: Array
    }
  };
</script>

<style scoped></style>
