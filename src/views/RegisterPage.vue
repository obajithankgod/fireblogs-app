<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an Account?
        <router-link class="router-link" :to="{ name: 'LoginPage' }">Login</router-link>
      </p>
      <h2>Create your FireBlog Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName" />
          <fa class="icon" icon="user" />
        </div>
        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastName" />
          <fa class="icon" icon="user" />
        </div>
        <div class="input">
          <input type="text" placeholder="Usre Name" v-model="userName" />
          <fa class="icon" icon="user" />
        </div>
        <div class="input">
          <input type="text" placeholder="email" v-model="email" />
          <fa class="icon" icon="envelope" />
        </div>
        <div class="input">
          <input type="password" placeholder="password" v-model="password" />
          <fa class="icon" icon="lock" />
        </div>
        <div v-show="error" class="error">{{ this.errorMsg }}</div>
      </div>
      <button @click.prevent="register">Sign In</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";
export default {
  name: "RegisterPage",
  data() {
    return {
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    async register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.userName !== ""
      ) {
        this.error = false;
        this.errorMsg = "";
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        const result = await createUser;
        const dataBase = db.collection("users").doc(result.user.uid);
        await dataBase.set({
          firstName: this.firstName,
          lastName: this.lastName,
          userName: this.userName,
          email: this.email,
        });
        this.$router.push({ name: "Home" });
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill in all the details";
      return;
    },
  },
};
</script>
<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>
