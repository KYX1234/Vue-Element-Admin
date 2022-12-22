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

const appStore= useAppStore()
</script>

<style lang="scss" scoped>
.main-container {
	min-height: calc(100vh - 80px);
	position: relative;
	overflow: hidden;
	background: var(--el-bg-color-page);
}
</style>
