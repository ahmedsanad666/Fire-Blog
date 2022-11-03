<template>
  <div class="form-group">
    <label for="Email">Email address</label>
    <font-awesome-icon :icon="['fa-solidl', 'fa-envelope']" />
    <input
      type="email"
      class="form-control"
      id="Email"
      aria-describedby="emailHelp"
      placeholder="Enter email"
    />
    <small id="emailHelp" class="form-text text-muted"
      >We'll never share your email with anyone else.</small
    >
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <font-awesome-icon :icon="['fa-solidl', 'fa-lock']" />

    <input
      type="password"
      class="form-control"
      id="exampleInputPassword1"
      placeholder="Password"
    />
  </div>
</template>

<script>
export default {};
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
