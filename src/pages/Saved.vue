<template>
<div>
  <Gallery v-if="Object.keys(images).length && images" :images="images" />
  <h2 v-else> There is no photo that I could find for you, with your search 😞 </h2>
</div>
</template>

<script>
import Gallery from "../components/Gallery";
export default {
name: "Saved",
  components: {Gallery},
  created() {
     this.$store.dispatch('images/fetchSavedPhotos')
  },
  computed: {
    images: function () {
      return this.$store.getters['images/getImages']
    }
  }
}
</script>

<style scoped>

</style>
