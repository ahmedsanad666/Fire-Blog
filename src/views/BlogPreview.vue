<template>
  <div class="postPreview">
    <div class="con">
      <h1>{{ postData.blogHeader }}</h1>
      <div class="img">
        <img :src="postData.blogPhotoFileUrl" alt="postImg" />
      </div>
      <div class="postContent" v-html="postData.blogHtml"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPreview",

  data() {
    return {
      edit: false,
    };
  },
  computed: {
    postData() {
      console.log(this.$store.getters["post/postData"].blogPhotoFileUrl);
      return this.$store.getters["post/postData"];
    },
  },
};
</script>

<style lang="scss" scoped>
.postPreview {
  .con {
    
    max-width: 65%;
    margin: auto;
    text-align: center;
    padding: 2rem 1rem;
    h1{
        text-align: left;
    }
    .img {
      margin-top: 1rem;
      margin-bottom: 3rem;
      width: 80%;
      margin: auto;
      img {
        border-radius:15px;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .postContent {
      padding: 0.5rem 1rem;
      border: 1px $color-grey solid;
      border-radius: 15px;
      margin-top: 1rem;
    }
  }
}
</style>
