<template>
  <div reset-password>
    <ModalPage v-if="modalActive" v-on:close-modal="closeModal" />
    <loadingPage v-if="loading" />
    <div class="form-wrap">
      <form class="reset">
        <h2>Reset Password</h2>
        <p>Forgot your Password? Enter your email to Reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="email" v-model="email" />
            <fa class="icon" icon="envelope" />
          </div>
        </div>
        <button>Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import ModalPage from "../components/ModalPage.vue";
import LoadingPage from "../components/LoadingPage.vue";
export default {
  name: "ForgotPage",
  components: { ModalPage, LoadingPage },
  data() {
    return {
      email: null,
      modalActive: true,
      modalMessage: "",
      loading: null,
    };
  },
  methods: {
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;

  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
