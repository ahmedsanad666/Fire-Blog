<template>
  <section class="main-page  ">
    <div class="row">
      <div class="col-md-5  blog-hero-content py-4">
        <h1 class="text-center" v-if="post.showScreen">{{ post.title }}</h1>
        <h2 class="text-center" v-else>{{ post.title }}</h2>
        <p v-if="post.showScreen">{{ post.BlogPost }}</p>
        <p v-else class="content-preview">{{ post.blogHTML }}</p>
        <router-link class="link link-light" to="#" v-if="post.showScreen"
          >Login/Signup</router-link
        >
        <router-link class="link link-light" to="#" v-else
          >View Post</router-link
        >
      </div>

      <div class="col-md-7 blog-hero-img">
        <img
          v-if="post.showScreen"
          :src="require(`../../assets/blogPhotos/${post.photo}.jpg`)"
          alt="BlogPic"
        />
        <img
          :src="require(`../../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)"
          alt="BlogPic"
          v-else
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/components/heroSection.scss";
</style>
