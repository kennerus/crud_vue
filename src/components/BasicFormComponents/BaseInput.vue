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
           type="text"
           class="base-input"
           :placeholder="fieldData.placeholder"
           :name="fieldData.inputName"
           :class="fieldData.className"
           :value="value"
           @input="inputEvents_inputEmit($event.target.value)"
    >
  </div>
</template>

<script>
  import MixinInputMethods from '../../mixins/MixinInputMethods';
  import MixinInputData from '../../mixins/MixinInputData';

  export default {
    name: 'BaseInput',
    mixins: [MixinInputData, MixinInputMethods],
  };
</script>

<style scoped></style>
