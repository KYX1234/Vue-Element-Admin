<template>
	<div class="sidebar-container" :style="{ width: appStore.isCollapse ? '65px' : '200px' }">
		<Logo :collapse="appStore.isCollapse" />
		<el-scrollbar>
			<el-menu
				:default-active="activeMenu"
				class="el-menu-vertical-demo"
				:collapse="appStore.isCollapse"
				:unique-opened="true"
				:collapse-transition="false"
			>
				<menu-item v-for="menu in menus" :key="route.path" :data="menu" />
			</el-menu>
		</el-scrollbar>
	</div>
</template>

<script lang="ts" setup name="Asider">
import { useAppStore } from '@/store'
import MenuItem from './MenuItem.vue'
import { useRouteStore } from '@/store'
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
	box-shadow: 0 2px 4px #00000014;
	transition: width 0.3s ease-in-out;

	.el-scrollbar {
		height: calc(100% - 48px);
	}

	// Menu菜单组件修改

	:deep(.el-menu) {
		overflow-x: hidden;
		border-right: none;
		.svg-icon {
			font-size: 20px;
			margin: 0 auto;
		}

		&:not(.el-menu--collapse) {
			.svg-icon {
				margin-right: 8px;
			}
		}

		.el-menu-item,
		.el-sub-menu,
		.el-sub-menu__title {
			display: block;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
}
</style>
