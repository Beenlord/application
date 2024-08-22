<template>
	<div class="LoginView view">
		<LoginForm />
	</div>
</template>

<script setup>
import LoginForm from '../components/LoginForm.vue'
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
