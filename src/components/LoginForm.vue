<template>
	<InputContainer tag="form" class="LoginForm" @submit.prevent="$emit('go', values.accessKey)">
		<Icon id="encrypted" />
		<input
			v-model="values.accessKey"
			type="password"
			placeholder="Personal access key"
		/>
		<div class="LoginForm__divider"></div>
		<input type="submit" value="Enter" cur-pointer />
	</InputContainer>
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
	padding-left: 1.4rem;
	
	.Icon-encrypted {
		// --i-size: 2.3rem;
		--i-fill: lightgreen;
	}

	input {
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
		background: rgba(#333, 0.8);
	}
}
</style>
