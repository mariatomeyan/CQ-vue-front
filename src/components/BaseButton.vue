<template>
  <button v-on="$listeners" v-bind="$attrs" >{{label}}</button>
</template>

<script>
export default {
name: "BaseButton",
  props: {
  label: {
    type: String,
    required: false,
    default: () => ''
  }
  }
}
</script>

<style scoped>
button {
  background: #42b983;
  border: none;
  border-radius: 3px;
  padding: 8px 25px;
  margin: 8px;
  color: white;
  width: 100%;
  cursor: pointer;
  outline: none;
}
</style>
