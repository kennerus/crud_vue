<template>
  <div class="base-input-wrap" :class="fieldData.classNameWrap">
    <label :for="fieldData.id"
           class="base-label"
           :class="fieldData.classNameLabel"
    >
      {{ fieldData.label }}
    </label>

    <textarea :id="fieldData.id"
              :ref="fieldData.ref"
              class="base-input"
              :placeholder="fieldData.placeholder"
              :name="fieldData.inputName"
              :class="fieldData.className"
              :rows="fieldData.rows"
              :value="value"
              @input="inputEvents_inputEmit($event.target.value)"
    ></textarea>
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
