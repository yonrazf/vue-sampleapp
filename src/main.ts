import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { Frontegg } from "@frontegg/vue";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [{ name: "HomePage", path: "/", component: App }],
});

const app = createApp(App).use(router);

app.use(Frontegg, {
  contextOptions: {
    baseUrl: "https://app-kcj0djtbjuee.frontegg.com",
    clientId: "a0fff686-59cd-4498-a5da-ef7def2a1613",
    appId: "3b077b47-5e92-4308-a650-52ad88d05f0c",
  },
  hostedLoginBox: false,
  router,
});

app.mount("#app");
