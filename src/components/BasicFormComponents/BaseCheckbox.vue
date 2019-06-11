<template>
  <div :class="fieldData.classNameWrap">
    <label :for="fieldData.id" :class="fieldData.classNameLabel">{{ fieldData.label }}</label>
    <input type="checkbox">
  </div>
</template>

<script>
  import MixinInputData from '../../mixins/MixinInputData';
  import MixinInputMethods from '../../mixins/MixinInputMethods';

  export default {
    name: 'BaseCheckbox',
    mixins: [MixinInputData, MixinInputMethods]
  };
</script>

<style scoped></style>
