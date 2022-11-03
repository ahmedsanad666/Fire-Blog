<template>
  <div class="profile">
    <span>{{ userData.nameInit }}</span>
    <div class="profile-menu">
      <ul>
        <li class="info">
          <div class="row">
            <div class="col name">
              <span>
                {{ userData.nameInit }}
              </span>
            </div>
            <div class="col userName">
              <h6>{{ userData.userName }}</h6>
              <h6>{{ userData.email }}</h6>
            </div>
          </div>
        </li>
        <li class="links">
          <router-link to="/profile">
            <font-awesome-icon :icon="['fa-solid', 'user']" />
            Profile</router-link
          >
        </li>
        <li class="links">
          <router-link to="#">
            <i class="fa-solid f"></i>
            <font-awesome-icon icon=" fa-solid fa-crown" />
            <!-- <font-awesome-icon :icon="['fa-sharp','fa-solid', 'fa-crown']" /> -->
            Admin</router-link
          >
        </li>
        <li class="links" @click="signOut">
          <font-awesome-icon :icon="['fa-solid', 'arrow-right-from-bracket']" />
          SignOut
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userData() {
      return this.$store.getters.userData;
    },
  },
  methods: {
    signOut() {
      this.$store.dispatch("signOut");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/components/profile.scss";
</style>
