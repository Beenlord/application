<template>
	<Async :class="['Icon', `Icon-${id}`]" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps(['id'])

const Async = defineAsyncComponent(() => {
	return import(`../assets/icons/${props.id}.svg`)
})
</script>

<style lang="scss">
.Icon {
	path {
		stroke: var(--i-stroke, currentColor);
		fill: var(--i-fill, currentColor);
	}
}
</style>
