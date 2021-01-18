<template>
    <div class="card">
        <img v-bind:src="image.path" alt="">
        <div class="flex flex-column">
            <div class="pill-badge-wrapper flex flex-column">
                <div class="pill-badge">#{{image.id}}</div>
                <BaseButton v-show="isSave" :label="'Save'" @click="saveImage(image.id)"/>
            </div>
        </div>
    </div>
</template>
<script>
import BaseButton from "@/components/BaseButton";
    export default {
        name: "Card",
        components: { BaseButton },
        props: {
            image: {
                type: Object,
                default: () => {}
            },
            isSave : {
              type: Boolean,
              required: false,
              default: () => false
            }
        },
        methods: {
          saveImage(id) {
            this.$emit('onSave', id)
          }
        }
    }
</script>

<style scoped lang="scss">

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: #FFF;
  border-radius: 0.25rem;
  margin: 0;
  list-style: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .pill-badge-wrapper {
    flex: 1 1 0%;
    text-align: right;
  }

  .pill-badge {
    display: inline-block;;
    padding: 0.6rem 1rem;
    background: #f1f5f8;
    border-radius: 5rem;
    font-weight: bold;
  }

  img {
    border-radius: 0.25rem 0.25rem 0 0;
    width: 100%;
    height: auto;
  }

  .author {
    flex-grow: 1;
    font-size: 1.3rem;
    overflow: hidden;
    text-align: left;

      div {
        overflow: hidden;
        padding-right: 1rem;
        box-sizing: border-box;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
  }
}
</style>
