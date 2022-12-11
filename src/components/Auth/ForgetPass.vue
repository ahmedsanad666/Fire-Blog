<template>
  <base-modal :show="!!showMode" :title="message" @close="closeDialog" />
  <form @submit.prevent="submitData" class="d-flex">
    <base-spinner v-if="isLoading"></base-spinner>
    <div class="form-group">
      <label for="Email">Email address</label>
      <input
        type="email"
        class="form-control mt-2"
        id="Email"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model.trim="email"
      />
    </div>
    <button class="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      showMode: null,
      isLoading: false,
      email: "",
      message: "",
    };
  },
  methods: {
    closeDialog() {
      this.showMode = null;
    },
    async submitData() {
      
      const email = this.email;
      this.isLoading = true;
      try {
        await this.$store.dispatch("resetPassword", email);
        this.message = "password was sent if this email exsist";
        this.showMode = "show";
      } catch (error) {
        this.showMode = error;
         this.message=  error.split("/")[1]

        console.log("herer");
      }
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  padding: 0.5rem 1rem;
}
.submit {
  height: 2rem;
  margin-left: 1rem;
  padding: 1.2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  outline: none;
  margin-top: 1.8rem;
  background-color: #636e72;
  border: none;
  color: $color-light;
  transition: 0.1s all linear;

  &:hover {
    background: #d63031;
  }
}
</style>
