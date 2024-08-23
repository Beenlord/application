<template>
    <component :is="props.tag" class="InputContainer">
        <slot></slot>
    </component>
</template>

<script setup>
const props = defineProps({
    tag: {
        default: 'div',
    },
})
</script>

<style lang="scss">
.InputContainer {
    width: 100%;
	padding: 1rem 1.2rem;
    
    display: flex;
	align-items: center;
	column-gap: 1.2rem;
	
    border-radius: 1rem;
	border: 1px solid rgba(#333, 0.8);
}
</style>
