<template>
  <teleport to="body">
    <div v-if="show" class="backdrop" @click="tryClose"></div>
    <dialog  open v-if="show" class="col-md-4 col-lg-3 col text-center">
      <p>{{ title }}</p>
      
      <div class="btn btn-secondary " @click="tryClose">Close</div>
    </dialog>
  </teleport>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    show: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close"],
  methods: {
    tryClose() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba($color: #000000, $alpha: 0.7);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  // width: 50%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0 auto;
  overflow: hidden;
  background-color: white;
  padding: 1.5rem;
}
.btn-secondary{
  padding: .2rem 1.5rem ;
  border-radius: 1rem;
}
</style>
