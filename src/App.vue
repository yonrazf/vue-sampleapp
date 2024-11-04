<template>
  <div id="app" v-if="fronteggLoaded">
    <img :src="authState.user.profilePictureUrl" />
    <div v-if="authState.user">
      <span>Logged in as: {{ authState.user.name }}</span>
    </div>
    <div>
      <button v-if="authState.user" v-on:click="logout">Logout</button>
      <button v-if="authState.user" v-on:click="showAccessToken">
        What is my access token?
      </button>
      <button v-if="!authState.user" v-on:click="goToLogin">Login</button>
      <AdminPortal />
    </div>
  </div>
</template>

<script>
import { useFrontegg, useFronteggAuthGuard } from "@frontegg/vue";
import { useRouter } from "vue-router";
import AdminPortal from "./components/AdminPortal.vue";

export default {
  setup() {
    useFronteggAuthGuard();

    const router = useRouter();

    const { fronteggLoaded, authState } = useFrontegg();

    const goToLogin = () => {
      router.push("/account/login");
    };
    const logout = () => {
      router.push("/account/logout");
    };
    const showAccessToken = () => {
      alert(authState.user.accessToken);
    };

    return {
      fronteggLoaded,
      authState,
      goToLogin,
      logout,
      showAccessToken,
    };
  },
  components: {
    AdminPortal,
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
