<template>
  <section class="auth">
    <base-spinner v-if="isLoading"></base-spinner>
    <base-modal 
      :show="!!error"
      :title="!!error ? error : ''"
      @close="closeDialog"
    ></base-modal>
    <div class="auth-wrape">
      <div class="row h-100">
        <div class="col border">
          <section class="auth-section vh-75">
            <form @submit.prevent="submitData" v-if="currentRoute == 'auth'">
              <h2 class="text-center">{{ currentMode }} to FireBlog</h2>
              <!-- login form  -->
              <div class="login" v-if="loginMode">
                <div class="form-group">
                  <label for="Email">Email address</label>
                  <font-awesome-icon :icon="['fa-solidl', 'fa-envelope']" />
                  <input
                    type="email"
                    class="form-control"
                    id="Email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    v-model.trim="logIn.email.val"
                    @blur="clearValidity('email')"
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
                    v-model.trim="logIn.password.val"
                    @blur="clearValidity('password')"
                  />
                </div>
                <p class="error-p text-center" v-show="!!errorMesg">{{errorMesg}}</p>
              </div>
              <!-- login form  -->

              <!-- sign up form ...........................-->
              <div class="signup" v-else>
                <div class="form-group">
                  <label for="First Name">First Name </label>
                  <font-awesome-icon :icon="['fa-solidl', 'fa-user']" />

                  <input
                    type="text"
                    class="form-control"
                    id="First Name"
                    placeholder="First Name"
                    v-model.trim="signUp.firstName.val"
                    @blur="clearValidity('firstName')"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Last Name </label>
                  <font-awesome-icon :icon="['fa-solidl', 'fa-user']" />

                  <input
                    type="text"
                    class="form-control"
                    id="Last Name"
                    placeholder="Last Name"
                    v-model.trim="signUp.lastName.val"
                    @blur="clearValidity('lastName')"
                  />
                </div>

                <div class="form-group">
                  <label for="exampleInputEmail1">User Name </label>
                  <font-awesome-icon :icon="['fa-solidl', 'fa-user']" />

                  <input
                    type="text"
                    class="form-control"
                    id="User Name"
                    placeholder="User Name"
                    v-model.trim="signUp.userName.val"
                    @blur="clearValidity('userName')"
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
                    v-model.trim="signUp.email.val"
                    @blur="clearValidity('email')"
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
                    v-model.trim="signUp.password.val"
                    @blur="clearValidity('password')"
                  />
                </div>
              </div>
              <p class="text-center error-p" v-if="!validForm">
                Fields can't be empty or less than 5
              </p>

              <!-- sign up form.......................... -->
              <!-- controls to send data and toggle between signup and login mood -->
              <div class="controls mt-4">
                <button class="btn btn-danger px-3 py-1 me-3">
                  {{ setCurrentMode }}
                </button>

                <button
                  class="btn btn-success px-3 py-1"
                  @click.prevent="toggleMode"
                >
                {{loginMode ? 'SignUp instead': 'SignIn'}} 
                </button>
              </div>
              <!-- forget password component -->
              <h6 class="text-center mt-3" v-if="loginMode">
                <router-link to="auth/resetpassword"
                  >Forget Password !</router-link
                >
              </h6>
            </form>
            <h6>
              <router-view></router-view>
            </h6>
          </section>
        </div>
        <div class="col-xl-6 col-lg-5 d-none d-lg-block layout-wrape">
          <div class="layout h-100"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentMode: "",
      loginMode: true,
      isLoading: false,
      error: null,
      errorMesg:'',
      // ..........signup
      signUp: {
        firstName: {
          val: "",
          isValid: true,
        },
        lastName: {
          val: "",
          isValid: true,
        },
        userName: {
          val: "",
          isValid: true,
        },
        email: {
          val: "",
          isValid: true,
        },
        password: {
          val: "",
          isValid: true,
        },
      },
      // ...........login
      logIn: {
        email: {
          val: "",
          isValid: true,
        },
        password: {
          val: "",
          isValid: true,
        },
      },
      validForm: true,
    };
  },
  computed: {
    setCurrentMode() {
      return (this.currentMode = this.loginMode ? "LogIn" : "SignUp");
    },
    currentRoute() {
      return this.$route.name;
    },
  },
  methods: {
    toggleMode() {
      this.loginMode = !this.loginMode;
    },
    clearValidity(input) {
      if (this.currentMode === "logIn") {
        // console.log(this.logIn[input].isValid);
        this.logIn[input].isValid = true;
      } else {
        this.signUp[input].isValid = true;
      }
    },
    formValidity() {
      this.validForm = true;
      if (this.currentMode === "SignUp") {
        if (
          this.signUp.firstName.val === "" ||
          this.signUp.firstName.val.length < 5
        ) {
          this.signUp.firstName.isValid = false;
          this.validForm = false;
        }

        if (
          this.signUp.lastName.val === "" ||
          this.signUp.lastName.val.length < 5
        ) {
          this.signUp.lastName.isValid = false;
          this.validForm = false;
        }
        if (this.signUp.email.val === "") {
          this.signUp.email.isValid = false;
          this.validForm = false;
        }
        if (
          this.signUp.password.val === "" ||
          this.signUp.password.val.length < 5
        ) {
          this.signUp.password.isValid = false;
          this.validForm = false;
        }
        if (
          this.signUp.userName.val === "" ||
          this.signUp.userName.val.length < 5
        ) {
          this.signUp.userName.isValid = false;
          this.validForm = false;
        }
      } else {
        // ......................................
        if (this.logIn.email.val === "") {
          this.logIn.email.isValid = false;
          this.validForm = false;
        }
        if (
          this.logIn.password.val === "" ||
          this.logIn.password.val.length < 5
        ) {
          this.logIn.password.isValid = false;
          this.validForm = false;
        }
      }
    },

    async submitData() {
      this.formValidity();
      if (!this.validForm) {
        return;
      }

      if (this.currentMode === "SignUp") {
        const newUser = {
          firstName: this.signUp.firstName.val,
          lastName: this.signUp.lastName.val,
          userName: this.signUp.userName.val,
          email: this.signUp.email.val,
          password: this.signUp.password.val,
        };
        console.log(newUser)

        this.isLoading = true;
        try {
          await this.$store.dispatch("signUp", newUser);
          this.$router.push("/");
        } catch (error) {
          console.log(error);
          this.error = error.code;
        }
        this.isLoading = false;
      } else {
        const data = {
          email: this.logIn.email.val,
          password: this.logIn.password.val,
        };

        this.isLoading = true;
        try {
          await this.$store.dispatch("logIn", data);
          this.$router.push("/");
        } catch (error) {
          this.errorMesg = error;
        
        }
        this.isLoading = false;
      }
    },
    closeDialog() {
      this.error = null;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/views/Auth.scss";
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
h2 {
  font-family: $cool-font;
  font-weight: bold;
  margin-bottom: 1rem;
}
.error-p {
  color: rgb(228, 33, 33);
  font-size: 15px;
}
</style>
