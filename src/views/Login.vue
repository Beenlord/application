<template>
	<div class="LoginView view">
		<div class="form-container">
			<div class="form-container__row">
				<LoginForm @go="logIn" />
				<span>OR</span>
				<InputContainer cur-pointer>
					<Icon id="qr" cur-pointer />
					<span>Scan QR</span>
				</InputContainer>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LoginForm from '@/components/LoginForm.vue'

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

	.form-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 3rem;

		&__row {
			display: flex;
			column-gap: 3rem;
			align-items: center;
		}
	}

	.LoginForm {
		max-width: 320px;
	}

	.Icon-qr {
		--i-size: 2.8rem;
	}
}
</style>
