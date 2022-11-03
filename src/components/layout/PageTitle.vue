<template>
  <section class="pageTitle text-center  py-4 mt-2 mb-4">
    <h1 class="P_title">{{ pageTitle.toUpperCase() }}</h1>
    <span class="bg_title ">{{ backgroundTitle.toUpperCase() }}</span>
  </section>
  
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      default: "Page Title",
    },
    backgroundTitle: {
      type: String,
      default: "Background Title",
    },
  },
};
</script>

<style lang="scss" scoped>
.pageTitle{
font-family: $title-font;
position: relative;
    h1 {
        //   color: $primary;
        text-transform: uppercase;
        font-size: 3rem;
        letter-spacing: 3px;
        color:$color-dark;
       font-weight: bold;

        
    }
span {
    letter-spacing: 6px;
    font-size: 4rem;
    font-weight: bold;
    position: absolute;
    width: 100%;
    bottom:50%;
    right: 50%;
    transform: translate(50%, 50%);
    z-index: -1;
    color:rgb(218, 201, 201);
    text-transform: uppercase;

}
}
</style>
