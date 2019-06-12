<template>
  <div class="base-input-wrap" :class="fieldData.classNameWrap">
    <label :for="fieldData.id"
           class="base-label"
           :class="fieldData.classNameLabel"
    >
      {{ fieldData.label }}
    </label>

    <input :id="fieldData.id"
           :ref="fieldData.ref"
           type="tel"
           :placeholder="fieldData.placeholder"
           :name="fieldData.inputName"
           class="base-input"
           :class="fieldData.className"
           :value="value"
           @input="inputEvents_inputEmit($event.target.value)"
    >
  </div>
</template>

<script>
  import MixinInputData from '../../mixins/MixinInputData';
  import MixinInputMethods from '../../mixins/MixinInputMethods';

  export default {
    name: 'BaseInputTel',
    mixins: [MixinInputData, MixinInputMethods]
  };
</script>

<style scoped></style>