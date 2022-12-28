<template>
	<div class="main-container">
		<router-view>
			<template #default="{ Component, route }">
				<transition :name="appStore.transitionName" mode="out-in" appear>
					<component :is="Component" :key="route.path" />
				</transition>
			</template>
		</router-view>
	</div>
</template>

<script lang="ts" setup name="Main">
import { useAppStore } from '@/store'

const appStore = useAppStore()
const route = useRoute()
</script>

<style lang="scss" scoped>
.main-container {
	height: 100%;
	position: relative;
	overflow: hidden;
	padding: 10px;
	background: var(--el-bg-color-page);
	padding: 10px;
}
</style>
