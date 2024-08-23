<template>
    <div class="DevTools">
        <div class="DevTools__btns">
            <div
                class="DevTools__btn"
                cur-pointer
                @click.native="router.go(-1)"
            >
                <Icon id="undo" />
            </div>
            <div class="DevTools__btn"></div>
            <div
                class="DevTools__btn"
                cur-pointer
                @click.native="router.push({ name: 'login' })"
            >
                <Icon id="login" />
            </div>
            <div
                class="DevTools__btn"
                cur-pointer
                @click.native="router.push({ name: 'home' })"
            >
                <Icon id="home" />
            </div>
        </div>
        <div class="DevTools__divider"></div>
		<div><span>Version:</span> {{ ver }}</div>
		<div><span>Route name:</span> {{ route.name }}</div>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

const ver = ipcRenderer.ver
</script>

<style lang="scss">
.DevTools {
	position: absolute;
	left: 1.2rem;
	bottom: 1rem;
    right: 1.2rem;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
	font-size: 1.2rem;
	color: greenyellow;
    user-select: none;

	span {
		color: white;
	}

    &__divider {
        width: 100%;
		height: 1px;
        margin: 0.5rem 0;
		background: rgba($color: #333, $alpha: 0.8);
        pointer-events: none;
    }

    &__btns {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
    }

    &__btn {
        --i-size: 1.9rem;

        width: var(--i-size);
        
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            --i-fill: lightblue;
        }
    }
}
</style>
