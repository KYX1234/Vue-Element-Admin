<template>
	<div
		:class="['sidebar-container', appStore.menuColor === '#ffffff' && 'light-menu']"
		:style="{ width: appStore.isCollapse ? '65px' : '200px', ...themeColor }"
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
const themeColor = computed(() => {
	return {
		background: appStore.menuColor
	}
})
</script>

<style lang="scss" scoped>
.sidebar-container {
	transition: width 0.3s ease-in-out;

	.el-scrollbar {
		height: calc(100% - 48px);
		:deep(.el-menu) {
			overflow-x: hidden;
			border-right: none;
			width: 100%;
			background-color: initial;
			// 折叠时样式
			&.el-menu--collapse {
				.el-sub-menu {
					&.is-active {
						color: var(--el-color-primary);
					}
				}
				.el-menu-item.is-active,
				.el-sub-menu.is-active {
					background: transparent;
					.el-sub-menu__title {
						color: var(--el-color-primary);
					}
					&::before {
						position: absolute;
						top: 0;
						left: 0;
						bottom: 0;
						right: 0;
						z-index: 2;
						width: 3px;
						content: '';
						background-color: var(--el-color-primary);
					}
				}
			}

			.el-menu-item,
			.el-sub-menu__title {
				display: flex;
				align-items: center;
				overflow: hidden;
				color: #bbbbbb;
				&:hover {
					color: var(--el-color-primary);
					background: transparent;
				}
				&.is-active {
					background: var(--el-color-primary);
					color: var(--el-color-white);
				}
			}
		}
	}
	&.light-menu {
		:deep(.el-menu) {
			.el-menu-item,
			.el-sub-menu__title {
				color: var(--el-color-black);
				&:not(.is-active):hover {
					background-color: var(--el-fill-color-light);
				}
			}
		}
	}
}
</style>
