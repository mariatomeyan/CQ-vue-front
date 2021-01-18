<template>
    <div>
      <BaseSearchForm class="flex" @onSearch="search"/>
      <pulse-loader :loading="isLoading"  class="flex" />
      <h2 v-if="expiresAt && Object.keys(images).length"> The search cache will expire in {{expiresAt}}</h2>
      <Gallery :with-save="true"  :isFade="isLoading" v-if="Object.keys(images).length && images" :images="images" />
      <h2 v-else> There is no photo that I could find for you, with your search 😞 </h2>
    </div>
</template>
<script>
    import Gallery from "../components/Gallery";
    import BaseSearchForm from "@/components/BaseSearchForm";
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
    import {mapGetters} from 'vuex';

    export default {
        name: "Home",
        components: {Gallery, BaseSearchForm, PulseLoader},
        data() {
          return {
            loading: false
          }
        },
        mounted() {
          this.fetchImagesFromStore()
        },
        computed: {
            ...mapGetters({
                images: 'images/getImages',
                expiresAt: 'images/getExpiresAt'
            }),
          isLoading: {
              get() {
                return this.loading
              },
              set(val) {
                this.loading = val
              }
          }
        },
        methods: {
          search (params) {
            this.loading = true
           return this.fetchImagesFromStore(params)
          },
          async fetchImagesFromStore(params = []) {
             await this.$store.dispatch(
                 'images/fetchImages',
                 {
                   params: params
                 }
             ).then(() => {
               this.loading = false
             });
           },
        }
    };
</script>

<style scoped>
</style>
