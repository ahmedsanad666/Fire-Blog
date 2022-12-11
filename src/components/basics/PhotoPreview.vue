<template>
  <teloport to="body">
    <div class="layout" @click="tryClose" v-if="show">
      <div class="photo-preview">
        <img :src="url" alt="preview" />
      </div>
    </div>
  </teloport>
</template>

<script>
export default {
  emits: ["close"],
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    url() {
      return this.$store.getters["post/postData"].blogPhotoFileUrl;
    },
  },
  methods: {
    tryClose() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.layout {
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba($color: #000000, $alpha: 0.6);
  z-index: 3;
  @include flex-box;
  padding: 0 1rem;
  .photo-preview {
    width: 700px;
    height: 600px;
    padding: 0.5rem;
    box-shadow: 0px 0px 4px 5px rgba($color: #000000, $alpha: 0.5);
    border-radius: 30px;
    background: $color-light;
    z-index: 9999;

    @media only screen  and  (max-width:992px) {
      width:600px;
      height: 400px;

    }

    img {
     width: 100%;
     height: 100%;
    //  display: block;
      object-fit: contain;
      border-radius: 20px;
      border-radius:30px;
    }
  }
}
</style>
