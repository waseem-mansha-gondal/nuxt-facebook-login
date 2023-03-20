<!-- Please remove this file from your project -->
<template>
  <div class="container d-flex align-items-center justify-content-center mt-5">
    <div
      class="col-8 flex-column d-flex align-items-center justify-content-center shadow p-3 mb-5 bg-white rounded"
      style="height: 300px"
    >
      <div v-if="$auth.loggedIn">Welcome, {{ $auth.user.name }}</div>
      <div v-else>
        <h3>click this button to login</h3>
      </div>

      <button
        v-if="!$auth.loggedIn"
        class="btn btn-primary d-flex align-items-center"
        @click="loginWithFacebook"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-facebook"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
          />
        </svg>
        <div class="ml-1">Login With Facebook</div>
      </button>
      <button
        class="btn btn-primary d-flex align-items-center"
        v-else
        @click="$auth.logout()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-facebook"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
          />
        </svg>
        <div class="ml-1">Logout</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    openInNewTab(url) {
      window.open(url, "_blank", "noreferrer");
    },
    async loginWithFacebook() {
      try {
        console.log("this.$auth", this.$auth.loginWith);

        await this.$auth.loginWith("facebook");
        this.loggedIn = true;
      } catch (error) {
        console.log(error);
      }
    },
  },
  name: "Box",
};
</script>
