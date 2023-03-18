<template>
	<div class="header-action-item" @click="onRefresh">
		<svg-icon class-name="refresh" :class="isRefresh && 'tun-refresh'" size="18"></svg-icon>
	</div>
</template>

<script lang="ts" setup name="Reload">
import { useAppStore } from '@/store'

const isRefresh = ref(false)
const appStore = useAppStore()

const onRefresh = () => {
	if (isRefresh.value) return
	isRefresh.value = true
	appStore.reloadPage()
	setTimeout(() => {
		isRefresh.value = false
	}, 1200)
}
</script>

<style lang="scss" scoped>
.header-action-item {
	display: flex;
	align-items: center;
	height: 100%;
	padding: 0 8px;
	cursor: pointer;

	&:hover {
		background-color: var(--el-fill-color-light);
	}
	.tun-refresh {
		animation: refresh 1.2s ease-in-out infinite;
	}
	@keyframes refresh {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
}
</style>
