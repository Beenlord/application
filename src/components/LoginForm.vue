<template>
	<form class="LoginForm" @submit.prevent="$emit('go', values.accessKey)">
		<Icon id="encrypted" />
		<input
			v-model="values.accessKey"
			type="password"
			placeholder="Personal access key"
		/>
		<div class="LoginForm__divider"></div>
		<input type="submit" value="Enter" cur-pointer />
	</form>
</template>

<script>
export default {
	data() {
		return {
			values: {
				accessKey: null,
			},
		}
	},
}
</script>

<style lang="scss">
.LoginForm {
	width: 100%;
	padding: 1rem 1.2rem;
	display: flex;
	align-items: center;
	column-gap: 1.2rem;
	border-radius: 1rem;
	border: 1px solid rgba($color: #333, $alpha: 0.8);

	.Icon-encrypted {
		--i-size: 2.3rem;
		--i-fill: lightgreen;
		margin: 0 0.4rem 0 1rem;
	}

	input {
		padding: 8px 0;
		color: currentColor;
		background: transparent;
		border: 1px solid transparent;
		outline: none;
	}

	input[type='password'] {
		flex-grow: 1;
	}

	input[type='submit'] {
		opacity: 0.8;
		transition: 0.2s opacity;
	}

	input[type='submit']:hover,
	input[type='submit']:focus {
		opacity: 1;
	}

	&__divider {
		width: 1px;
		height: 1.8rem;
		background: rgba($color: #333, $alpha: 0.8);
	}
}
</style>
