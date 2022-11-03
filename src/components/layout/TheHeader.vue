<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">FireBlog</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- ....... -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto px-4 ">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="blogs" class="nav-link">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link to="#" class="nav-link">Create Post</router-link>
            </li>
            <li class="nav-item" v-if="!isAuthenticated">
              <router-link :to="{ name: 'auth' }" class="nav-link"
                >Login/Signup</router-link
              >
            </li>
          </ul>
          <profile-menu v-if="isAuthenticated"></profile-menu>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import ProfileMenu from "./ProfileMenu.vue";
export default {
  components: { ProfileMenu },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>
<style lang="scss" scoped></style>
