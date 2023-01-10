<template>
	<el-header :class="['header-container', appStore.menuMode]">
		<div class="header-container-left">
			<MenuCollapseVue />
			<Breadcrumb />
		</div>
		<div class="header-container-right">
			<Search />
			<Refresh />
			<Notice />
			<Fullscreen />
			<!-- <Language /> -->
			<InfoDialog />
			<Setting />
		</div>
	</el-header>
</template>

<script lang="ts" setup name="Header">
import MenuCollapseVue from './MenuCollapse.vue'
import Breadcrumb from './Breadcrumb.vue'
import InfoDialog from './InfoDialog.vue'
import Language from './Language.vue'
import Notice from './Notice.vue'
import Search from './Search.vue'
import Fullscreen from './Fullscreen.vue'
import Setting from './Setting.vue'
import Refresh from './Refresh.vue'
import { useAppStore } from '@/store'

const appStore = useAppStore()
</script>

<style lang="scss" scoped>
.header-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 48px;
	padding: 0;
	border-bottom: 1px solid var(--el-border-color-lighter);
	.header-container-left {
		display: flex;
		align-items: center;
		height: 47px;
	}
	.header-container-right {
		display: flex;
		align-items: center;
		height: 47px;
	}
}
</style>
