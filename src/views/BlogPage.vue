<template>
  <page-title pageTitle="blogs" backgroundTitle="knowledge"></page-title>
  <section class="container AllBlogs">
    <div class="toggle-editing text-center px-5 d-flex mb-4">
      Toggle Editing <input type="checkbox" v-model="editMode" />
    </div>
    <blog-cards :cards="sampleBlogCards" :editMode="editMode"></blog-cards>
  </section>
</template>

<script>
import BlogCards from "../components/home/BlogCards.vue";
import PageTitle from "@/components/layout/PageTitle.vue";
export default {
  components: { BlogCards, PageTitle },
  data() {
    return {
      editMode: false,
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
};
</script>

<style lang="scss" scoped>
.toggle-editing {
  display: flex;
  justify-content: flex-end;

  input[type="checkbox"] {
    position: relative;
    cursor: pointer;
    width: 70px;
    height: 30px;
    outline: none;
    appearance: none;
    border-radius: 20px;
    margin-left: 10px;
    box-shadow: 1px 1px 4px rgba($color: #000000, $alpha: 1);
    &::before {
      content: "";
      position: absolute;
      height: 30px;
      width: 30px;
      top: 0;
      left: 0px;
      border-radius: 20px;
      background: $color-grey;
      transition: 0.4s all ease;
    }
    &:checked {
      &:before {
        left: 41px;
        background: #1363df;
      }
    }
  }
}
</style>
