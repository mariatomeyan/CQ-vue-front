<template>
  <input :type="inputType" v-on="$listeners" v-bind="$attrs" :placeholder="placeholder">
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    inputType: {
      type: String,
      required: false,
      default: () => 'text'
    },
    placeholder : {
      type: String,
      required: false,
      default: () => ''
    }
  }
}
</script>

<style scoped lang="scss">
  input {
    padding: 5px;
    margin: 5px;
    outline: none;
    border-radius: 3px;
    border: 1px solid #42b983;
  }
</style>
