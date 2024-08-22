<template>
	<!-- <p>Lorem, ipsum dolor.</p> -->
	<RouterView />
	<div class="debug-container">
		<span>Version:</span> {{ ver }} <br />
		<span>Route name:</span> {{ route.name }} <br />
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

const ver = ipcRenderer.ver
</script>

<style lang="scss">
.debug-container {
	position: absolute;
	left: 1.4rem;
	bottom: 1rem;
	font-size: 1.2rem;
	color: greenyellow;

	span {
		color: white;
	}
}
</style>
