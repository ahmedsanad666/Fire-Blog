<template>
  <div class="container">
    <base-modal
      :show="!!error || !!message"
      :title="!!error ? error : message || ''"
      @close="closeDialog"
    ></base-modal>
    <base-spinner v-if="isLoading"></base-spinner>
    <div class="profile-img d-flex flex-column text-center">
      <div class="user-name">{{ nameInit }}</div>
      <span class="admin-icon">
        <font-awesome-icon icon=" fa-solid fa-crown " />
        Admin
      </span>
    </div>
    <form @submit.prevent="update">
      <div class="form-group">
        <label for="First Name">First Name </label>

        <input
          type="text"
          class="form-control"
          id="First Name"
          placeholder="First Name"
          v-model.trim="firstName"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Last Name </label>

        <input
          type="text"
          class="form-control"
          id="Last Name"
          placeholder="Last Name"
          v-model.trim="lastName"
        />
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">User Name </label>

        <input
          type="text"
          class="form-control"
          id="User Name"
          placeholder="User Name"
          v-model.trim="userName"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Email</label>

        <input
          type="Email"
          class="form-control"
          id="Email"
          placeholder="Email"
          v-model.trim="email"
          disabled
        />
      </div>

      <div class="controls text-center my-3">
        <button
          class="update"
          :class="disabled ? 'btn btn-secondary disabled' : ''"
        >
          Save changes
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      nameInit: "",
      isLoading: false,
      error: null,
      message: null,
      disabled: false,
    };
  },
  computed: {
    userData() {
      const data = this.$store.getters.userData;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.userName = data.userName;
      this.email = data.email;
      this.nameInit = data.nameInit;
      console.log(data);
      return data;
    },
  },
  created() {
    // this.userData();

    this.btnState();
    console.log("created");
  },

  methods: {
    // userData() {
    //   const data = this.$store.getters.userData;
    //   this.firstName = data.firstName;
    //   this.lastName = data.lastName;
    //   this.userName = data.userName;
    //   this.email = data.email;
    //   this.nameInit = data.nameInit;

    //   console.log(data);
    //   return data;
    // },
    btnState() {
      if (
        this.userName === this.userData.userName &&
        this.lastName === this.userData.lastName &&
        this.firstName === this.userData.firstName
      ) {
        this.disabled = true;
      }
    },

    async update() {
      const newData = {
        firstName: this.firstName,
        lastName: this.lastName,
        userName: this.userName,
      };

      this.isLoading = true;
      try {
        await this.$store.dispatch("update", newData);
        this.message = "User Updated. you will be redirected to home page";
        setTimeout(() => {
          this.$router.push("/");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }, 4000);
      } catch (err) {
        this.error = err;
      }
      this.isLoading = false;
    },
    closeDialog() {
      this.error = null;
      this.message = null;
    },
  },
  watch: {
    firstName(val) {
      if (
        val !== this.userData.firstName ||
        this.lastName !== this.userData.lastName ||
        this.userName !== this.userData.userName
      ) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    lastName(val) {
      if (
        val !== this.userData.lastName ||
        this.firstName !== this.userData.firstName ||
        this.userName !== this.userData.userName
      ) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    userName(val) {
      if (
        val !== this.userData.userName ||
        this.lastName !== this.userData.lastName ||
        this.firstName !== this.userData.firstName
      ) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.profile-img {
  .user-name {
    padding: 2rem;
    background: $color-secondary;
    width: 1rem;
    height: 1rem;
    margin: auto;
    border-radius: 50% 50%;
    @include flex-box;
    color: $color-light;
    font-size: 1.8rem;
    text-transform: uppercase;
  }
  .admin-icon {
    background: $color-secondary;
    width: 5rem;
    margin: 1rem auto;
    height: 2rem;
    color: $color-light;
    @include flex-box;
    border-radius: 0.5rem;
  }
}
form {
  width: 40%;
  box-shadow: 0px 0px 3px rgba($color: #000000, $alpha: 1);
  margin: auto;
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 5rem;

  @media only screen and (max-width: 992px) {
    width: 80%;
  }
  .form-group {
    width: 80%;
    margin: auto;

    input {
      margin: 0.3rem 0;
      padding: 5px 5px;
    }
  }
  button {
    all: unset;
    padding: 0.4rem 1.4rem;
    cursor: pointer;
    border-radius: 10px;
    background-color: $btn-success;
    color: $color-light;
    letter-spacing: 1.3px;
    font-size: 1.1rem;
    text-transform: capitalize;
    transition: all 0.2s linear;
    &:hover {
      background-color: $color-secondary;
    }
  }
}
</style>
