<template>
	<div
		:class="['sidebar-container', appStore.menuMode]"
		:style="{ width: appStore.isCollapse ? '65px' : '200px' }"
	>
		<Logo :collapse="appStore.isCollapse" />
		<el-scrollbar>
			<el-menu
				:default-active="activeMenu"
				class="el-menu-vertical-demo"
				:collapse="appStore.isCollapse"
				:unique-opened="true"
				:collapse-transition="false"
			>
				<menu-item v-for="menu in menus" :key="menu.path" :data="menu" />
			</el-menu>
		</el-scrollbar>
	</div>
</template>

<script lang="ts" setup name="Asider">
import { useAppStore, useRouteStore } from '@/store'
import MenuItem from './MenuItem.vue'
import Logo from './Logo.vue'
import { getChildrenRouter } from '@/utils/permission'

const appStore = useAppStore()
const routeStore = useRouteStore()
const route = useRoute()
const menus = getChildrenRouter(routeStore.routes)
const activeMenu = computed(() => route.path)
</script>

<style lang="scss" scoped>
.sidebar-container {
	transition: width 0.3s ease-in-out;
	z-index: 99;
	.el-scrollbar {
		height: calc(100% - 48px);
		:deep(.el-menu) {
			overflow-x: hidden;
			border-right: none;
			width: 100%;
		}
	}
}
</style>
