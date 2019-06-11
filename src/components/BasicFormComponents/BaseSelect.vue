<template>
  <div :class="fieldData.classNameWrap">
    <label :for="fieldData.id" :class="fieldData.classNameLabel">{{ fieldData.label }}</label>
    <select :id="fieldData.id">
      <option />
    </select>
  </div>
</template>

<script>
  import MixinInputMethods from '../../mixins/MixinInputMethods';
  import MixinInputData from '../../mixins/MixinInputData';

  export default {
    name: 'BaseSelect',
    mixins: [MixinInputData, MixinInputMethods]
  };
</script>

<style scoped></style>
