<template>
	<el-aside
		:style="{ width: isCollapse ? '65px' : '210px' }"
		:class="['sidebar-container', appStore.menuMode]"
	>
		<Logo :collapse="isCollapse" />
		<el-scrollbar>
			<el-menu
				:default-active="activeMenu"
				class="el-menu-vertical-demo"
				:collapse="isCollapse"
				:unique-opened="isMenuUnique"
				active-text-color="var(--el-color-primary)"
			>
				<menu-item v-for="menu in menus" :key="menu.path" :data="menu" />
			</el-menu>
		</el-scrollbar>
	</el-aside>
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
const isCollapse = computed(() => appStore.isCollapse)
const isMenuUnique = computed(() => appStore.isMenuUnique)
const activeMenu = computed(() => route.path)
</script>

<style lang="scss" scoped>
.sidebar-container {
	flex-shrink: 0;
	transition: all 0.3s ease;
	z-index: 99;
	background-color: var(--el-menu-bg-color);
	box-shadow: var(--el-box-shadow-lighter);

	.el-scrollbar {
		height: calc(100% - 48px);
		:deep(.el-menu) {
			border-right: none;
			background: transparent;
		}
	}
}
</style>
