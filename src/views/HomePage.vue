<template>
  <section class="home ">
    <BlogPost v-if="!isAuthenticated" :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />

    <blog-cards class="my-4" :cards="sampleBlogCards " ></blog-cards>
  </section>
</template>

<script>
import BlogPost from "../components/home/BlogPost.vue";
import BlogCards from "../components/home/BlogCards.vue";
export default {
  components: { BlogPost, BlogCards },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        BlogPost:
          "weekly blog articles with Programming including HMTL, CSS, JAVASCIRPT  and more. Register today to never miss new posts",
        showScreen: true,
        photo: "coding",
      },

      sampleBlogPost: [
        {
          title: "this is fillter title",
          blogHTML: "this is filter blogpost",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "this is fillter title 2",
          blogHTML: "this is filter blogpost 2",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
      sampleBlogCards: [
        {
          blogTitle: "blog card 1",
          blogCoverPhoto: "stock-1",
          blogDate: "may 1, 2022",
        },
        {
          blogTitle: "blog card 2",
          blogCoverPhoto: "stock-2",
          blogDate: "may 1, 2022",
        },
        {
          blogTitle: "blog card 3",
          blogCoverPhoto: "stock-3",
          blogDate: "may 1, 2022",
        },
        {
          blogTitle: "blog card 4",
          blogCoverPhoto: "stock-4",
          blogDate: "may 1, 2022",
        },
      ],
    };
  },
  computed:{
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  }
};
</script>

<style lang="scss" scoped>
.home{
  margin:auto;
overflow: hidden;
}
</style>
