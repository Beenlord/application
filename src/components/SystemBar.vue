<template>
	<v-system-bar v-if="isWindows" class="SystemBar" window>
		<v-icon class="me-2" icon="mdi-database-arrow-up"></v-icon>
		<span>DB Uploader {{ os }}</span>

		<v-spacer></v-spacer>
	</v-system-bar>
</template>

<script setup>
const isWindows =
	{
		win: true,
	}[ipcRenderer.os] ?? false
</script>

<style lang="scss">
.SystemBar {
	-webkit-user-select: none;
	-webkit-app-region: drag;
}
</style>
