<template>
  <div class="flex">
    <component v-for="(element,index) in formElements"
               :input-type="element.type"
               :value="element.value"
               @input="($event) => updateValue(element, $event.target.value)"
               :placeholder="element.placeholder"
               :key="index"
               v-bind:is="'BaseInput'">
    </component>
     <BaseButton class="small" label="Search" @click="search"/>
  </div>
</template>

<script>

import BaseInput from "@/components/BaseInput";
import BaseButton from "@/components/BaseButton";
import _ from "lodash"
export default {
name: "BaseSearchForm",
  components: {BaseInput, BaseButton},
  data() {
    return {
      formElements: [
        {
          type:'text',
          placeholder:'Search term',
          searchKey: 'q',
          value:''
        },
        {
          type:'text',
          searchKey: 'image_type',
          placeholder:'Image type',
          value:''
        },
        {
          type:'text',
          searchKey: 'category',
          placeholder:'Category',
          value:''
        }
      ]
    }
  },
  computed: {
  searchWithParams: {
    get() {
     return  _.keyBy (
             _.compact (
             _.map ( this.formElements,
              function (object) {
                    return object.value ? _.pick(object, ['searchKey', 'value']) : false
             })
             ),
         'searchKey')
    },
    set() {

    }
  }
  },
  methods: {
  changeNo(){
    return this.searchWithParams
  },
    updateValue(element, value) {
      element.value = value
    },
    debounceSearch(){
      _.debounce( this.search(), 300)
    },
    search() {
      this.$emit('onSearch', this.searchWithParams)
  }
}
}
</script>

<style scoped lang="scss">

</style>
