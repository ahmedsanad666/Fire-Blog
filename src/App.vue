<template>
  <div class="app">
    <base-spinner v-if="isloading"></base-spinner>
    <the-header v-if="isNave"></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import { auth, onAuthStateChanged } from "./firebase/firebaseInit";

export default {
  components: { TheHeader },

  data() {
    return {
      isNave: true,
      isloading: false,
    };
  },
  created() {
    this.showNav();
    this.tryLogin();
  },

  methods: {
    showNav() {
      if (
        this.$route.name == "auth" ||
        this.$route.name == "login" ||
        this.$route.name == "signup" ||
        this.$route.name == "password"
      ) {
        this.isNave = false;
      } else {
        this.isNave = true;
      }
    },
    tryLogin() {
      onAuthStateChanged(auth, (user) => {
        this.$store.commit("setAuthState", user);

        if (user) {
          this.$store.dispatch("getCurrentUser");
        
        } else {
          
          console.log("OUT");
        }
      });
    },
  },
  watch: {
    $route() {
      this.showNav();
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

nav {
  padding: 30px;

  // a {
  //   font-weight: bold;
  //   color: #2c3e50;

  //   &.router-link-exact-active {
  //     color: #42b983;
  //   }
  // }
}
</style>
