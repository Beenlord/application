import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import "./assets/styles/style.scss";

import '@mdi/font/css/materialdesignicons.css';

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as framework from "vuetify/framework";
import { md3 } from "vuetify/blueprints";

import App from "./App.vue";

const vuetify = createVuetify({
  components,
  directives,
  framework,
  blueprint: md3,
  theme: {
    defaultTheme: 'dark'
  },
  icons: {
    defaultSet: 'mdi',
  },
});

// View components
import LoginView from "@/views/Login.vue";
import HomeView from "@/views/Home.vue";

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { name: "login", component: LoginView },
    { name: "home", component: HomeView },
  ],
});

createApp(App)
  .use(vuetify)
  .use(router)
  .mount("#app")
  .$nextTick(() => {
    // Use contextBridge
    window.ipcRenderer.on("main-process-message", (_event, message) => {
      console.log(message);
    });
  });
