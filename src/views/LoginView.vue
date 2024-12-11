<template>
  <div class="Login">
    <LoginPage />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginPage from "@/components/Login.vue";

export default {
  name: "LoginView",
  components: {
    LoginPage,
  },
};
</script>
