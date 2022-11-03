<template>
  <section class="blog-card-wrap px-4 container">
    <h3 v-if="getRouterName == 'home'">View More Recent Blogs</h3>

    <div class="blog-cards">
      <div class="row">
        <div
          class="col-lg-3 col-md-6 px-3 my-2"
          v-for="(card, index) in cards"
          :key="index"
        >
          <div class="card pb-2">
            <div class="edit" v-if="editMode" >
              <font-awesome-icon :icon="['fa-solid', 'fa-pen-to-square']" />
            </div>

            <div class="delete"  v-if="editMode">
              <font-awesome-icon :icon="['fa-solid', 'fa-trash-can']" />
            </div>

            <img
              :src="
                require(`../../assets/blogCards/${card.blogCoverPhoto}.jpg`)
              "
            />
            <div class="blog-info px-2 pt-2">
              <h4>{{ card.blogTitle }}</h4>
              <h6>Post on:{{ card.blogDate }}</h6>
            </div>
            <router-link to="#" class="btn btn-danger py-1">
              View more
              <font-awesome-icon :icon="['fa-solid', 'fa-arrow-right']" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["cards", "editMode"],
  created() {
    this.getRouterName;
  },
  computed: {
    getRouterName() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  cursor: pointer;
  margin: auto;

  .blog-cards {
    .card {
      min-height: 15rem;
      box-shadow: 0px 2px 5px rgba($color: #000000, $alpha: 1);
      border-radius: 15px;
      position: relative;
      transition: 0.3s all ease;

      &:hover {
        transform: rotate(-2deg) scale(1.02);
        box-shadow: 0px 5px 5px 4px rgba(0, 0, 0, 0.6);
      }
      .edit,
      .delete {
        position: absolute;
        .svg-inline--fa {
          transition: 0.2s all linear;
          padding: 9px;
          background: rgba(223, 230, 233, 0.7);
          border-radius: 50% 50%;
          color: rgba(45, 52, 54, 1);
          &:hover {
            background: rgba(214, 48, 49, 1);
            color: #fff;
          }
        }
      }

      .edit {
        right: 3.5em;
        top: 0.7em;
      }
      .delete {
        right: 1em;
        top: 0.7em;
      }

      h3 {
        text-align: start;
      }
      img {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
      }
      a {
        width: 50%;
        margin: 0.5em auto;
      }
    }
  }
}
</style>
