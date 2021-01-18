<template>
    <div>
        <div class="image-list-wrapper">
            <Card
                v-for="(image, key) in images"
                v-bind:key="key"
                :image="image"
                @onSave="save(image)"
                :is-save="withSave"
            />
        </div>
    </div>
</template>

<script>
    import Card from "./Card";
    export default {
        name: "Gallery",
        components: {Card},
        props: {
            images: {
                type: Array,
                default: () => []
            },
            withSave: {
              type: Boolean,
              required: false,
              default: () => false
            }
        },
        data() {
            return {
                showModal: false,
                selectedImage: {}
            };
        },
      methods: {
          save (image) {
            console.log('image', image)
            this.$store.dispatch('images/saveImage', {image})
          }
      }

    }
</script>
<style scoped lang="scss">
    .image-list-wrapper {
        display: grid;
        grid-template-columns: repeat(3, minmax(150px, 367px));
        grid-auto-rows: minmax(100px, auto);
        column-gap: 30px;
        row-gap: 30px;
        justify-content: center;
      @media (max-width: 800px) {
        grid-template-columns: repeat(2, minmax(150px, 367px));
      }
      @media (max-width: 400px) {
        grid-template-columns: repeat(1, minmax(150px, 367px));
      }
    }
</style>
