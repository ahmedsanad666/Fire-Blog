<template>
  <page-title
    pageTitle="Account settings"
    backgroundTitle="admin page"
  ></page-title>


  <section >
    <profile-card></profile-card>
  </section>
</template>

<script>
import ProfileCard from "../components/profile/ProfileCard.vue";
export default {
  components: { ProfileCard },
};
</script>

<style></style>
