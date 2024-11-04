<template>
  <button v-on:click="showAdminPortal">Settings</button>
</template>

<script>
import { AdminPortal } from "@frontegg/vue";

export default {
  name: "AdminPortal",
  methods: {
    showAdminPortal() {
      AdminPortal.show();
    },
  },
};
</script>
