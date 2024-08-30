<template>
  <v-app :theme="currentTheme">
    <v-system-bar class="system-bar" window>
      <v-icon class="me-2" icon="mdi-database-arrow-up"></v-icon>
      <span>DB Uploader</span>
	  <v-spacer></v-spacer>
    </v-system-bar>
    <v-app-bar title="Login" elevation="7">
      <v-btn
        :icon="themeList[currentTheme]"
        slim
        @click="changeCurrentTheme"
      ></v-btn>
      <v-btn icon="mdi-logout"></v-btn>
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const currentTheme = ref("dark");

const themeList = {
  dark: "mdi-weather-sunny",
  light: "mdi-weather-night",
};

function changeCurrentTheme() {
  currentTheme.value = currentTheme.value === "light" ? "dark" : "light";
}
</script>
