<template>
	<div class="header-action-item" @click="onRefresh">
		<i-ep-refreshRight :class="isRefresh && 'tun-refresh'"></i-ep-refreshRight>
	</div>
</template>

<script lang="ts" setup name="Reload">
const router = useRouter()
const route = useRoute()
const isRefresh = ref(false)

const onRefresh = () => {
	if (isRefresh.value) return
	isRefresh.value = true
	router.push({
		path: '/redirect' + unref(route).fullPath
	})
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
	font-size: 15px;
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
