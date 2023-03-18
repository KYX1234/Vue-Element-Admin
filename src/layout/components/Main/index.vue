<template>
	<div class="main-container">
			<router-view>
				<template #default="{ Component, route }">
					<transition :name="appStore.transitionName" mode="out-in" appear>
						<keep-alive :include="routeStore.keepAlive" v-if="appStore.reloadFlag">
							<component :is="Component" :key="route.path" />
						</keep-alive>
					</transition>
				</template>
			</router-view>
	</div>
</template>

<script lang="ts" setup name="Main">
import { useAppStore,useRouteStore } from '@/store'

const appStore = useAppStore()
const routeStore = useRouteStore()
</script>

<style lang="scss" scoped>
.main-container {
	height: 100%;
	position: relative;
	overflow-x: hidden;
	padding: 15px;
	background: var(--el-bg-color-page);
}
</style>
