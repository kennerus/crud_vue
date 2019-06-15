<template>
  <div class="base-input-wrap" :class="fieldData.classNameWrap">
    <label :for="fieldData.id"
           class="base-label"
           :class="fieldData.classNameLabel"
    >
      {{ fieldData.label }}
    </label>

    <select :id="fieldData.id">
      <option></option>
    </select>
  </div>
</template>

<script>
  import MixinInputMethods from '../../mixins/MixinInputMethods';
  import MixinInputData from '../../mixins/MixinInputData';

  export default {
    name: 'BaseSelect',
    mixins: [MixinInputData, MixinInputMethods],

  };
</script>

<style scoped></style>
