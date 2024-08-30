<template>
  <v-container>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const accessKey = ref("test");

function logIn(value) {
  accessKey.value = value;

  router.push({ name: "home" });
}
</script>

<style lang="scss">
.LoginView {
}
</style>
