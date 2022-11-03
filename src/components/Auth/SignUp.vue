<template>
  <div class="form-group">
    <label for="First Name">First Name </label>
    <font-awesome-icon :icon="['fa-solidl', 'fa-user']" />

    <input
      type="First Name"
      class="form-control"
      id="First Name"
      placeholder="First Name"
      v-model="firstName"
    />
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Last Name </label>
    <font-awesome-icon :icon="['fa-solidl', 'fa-user']" />

    <input
      type="email"
      class="form-control"
      id="Last Name"
      placeholder="Last Name"
      v-model="lastName"
    />
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">User Name </label>
    <font-awesome-icon :icon="['fa-solidl', 'fa-user']" />

    <input
      type="email"
      class="form-control"
      id="User Name"
      placeholder="User Name"
      v-model="userName"
    />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Email</label>
    <font-awesome-icon :icon="['fa-solidl', 'fa-envelope']" />

    <input
      type="Email"
      class="form-control"
      id="Email"
      placeholder="Email"
      v-model="email"
    />
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Password </label>
    <font-awesome-icon :icon="['fa-solidl', 'fa-lock']" />

    <input
      type="password"
      class="form-control"
      id="Password"
      placeholder="Password"
      v-model="password"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: {
        val: "",
        isValid: null,
      },
      lastName: {
        val: "",
        isValid: null,
      },
      userName: {
        val: "",
        isValid: null,
      },
      email: {
        val: "",
        isValid: null,
      },
      password: {
        val: "",
        isValid: null,
      },
      validForm: null,
    };
  },
  methods: {
    submitData() {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        userName: this.userName,
        email: this.email,
        password: this.password,
        validForm: this.validForm,
      };

      this.$emit("form-data", formData);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-group {
  position: relative;
  .svg-inline--fa {
    position: absolute;
    top: 39px;
    left: 10px;
  }
  input {
    margin: 5px auto;
    padding: 0.3em 2.2em;
  }
}
</style>
