<template>
  <div class="base-input-wrap" :class="fieldData.classNameWrap">
    <label :for="fieldData.id"
           class="base-label"
           :class="fieldData.classNameLabel"
    >
      {{ fieldData.label }}
    </label>

    <select :id="fieldData.id"
            class="base-input base-input_select"
            @change="inputEvents_inputEmit($event.target.value)"
    >
      <option value=""
              selected
              disabled
      >
        {{ fieldData.placeholder }}
      </option>
      <option v-for="option in fieldData.options"
              :key="option.name"
              :value="option.id"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
  import MixinInputMethods from '../../mixins/MixinInputMethods';
  import MixinInputData from '../../mixins/MixinInputData';

  export default {
    name: 'BaseSelect',
    mixins: [MixinInputData, MixinInputMethods],
    props: {

    }
  };
</script>

<style scoped>
  .base-input_select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url('../../assets/down-arrow.svg');
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: calc(100% - 10px) center;
    border: 1px solid #ccc;
  }
</style>
