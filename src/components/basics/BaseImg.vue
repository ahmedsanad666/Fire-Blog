<template>
  <div>
    <img :src="imgSrc" :alt="ImgName" />
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: null,
    },
    ImgName: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
