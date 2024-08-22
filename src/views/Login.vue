<template>
	<div class="LoginView view">
		<LoginForm @go="logIn" />
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import LoginForm from '../components/LoginForm.vue'

const router = useRouter()

const accessKey = ref('test')

function logIn(value) {
	accessKey.value = value

	router.push({ name: 'home' })
}
</script>

<style lang="scss">
.LoginView {
	display: flex;
	align-items: center;
	justify-content: center;

	.LoginForm {
		max-width: 320px;
	}
}
</style>
