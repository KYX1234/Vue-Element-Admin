<template>
	<div class="sidebar-container">
		<Logo :collapse="appStore.isCollapse"/>
		<el-scrollbar>
			<el-menu
				default-active="2"
				class="el-menu-vertical-demo"
				:collapse="appStore.isCollapse"
				:unique-opened="true"
			>
				<menu-item
					v-for="route in routeStore.routes"
					:key="route.path"
					:data="route"
				/>
			</el-menu>
		</el-scrollbar>
	</div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store'
import MenuItem from './MenuItem.vue'
import { useRouteStore } from '@/store'
import Logo from './Logo.vue'

const appStore = useAppStore()
const routeStore = useRouteStore()
const route = useRoute()

const activeMenu = computed(() => route.path)
</script>

<style lang="scss" scoped>
.sidebar-container {
	// Menu菜单组件修改
	.el-menu:not(.el-menu--collapse) {
		width: 200px;
	}
	:deep(.el-menu) {
		width: 56px;
		border: none;
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
