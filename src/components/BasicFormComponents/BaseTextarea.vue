<template>
  <div :class="fieldData.classNameWrap">
    <label :for="fieldData.id" :class="fieldData.classNameLabel">{{ fieldData.label }}</label>
    <textarea :id="fieldData.id"
              :ref="fieldData.ref"
              class="base-input"
              :placeholder="fieldData.placeholder"
              :name="fieldData.name"
              :class="fieldData.className"
              :rows="fieldData.rows"
              :value="value"
              @input="InputEvents_inputEmit($event.target.value)"
    />
  </div>
</template>

<script>
  import MixinInputData from '../../mixins/MixinInputData';
  import MixinInputMethods from '../../mixins/MixinInputMethods';

  export default {
    name: 'BaseTextarea',
    mixins: [MixinInputData, MixinInputMethods]
  };
</script>

<style scoped></style>
