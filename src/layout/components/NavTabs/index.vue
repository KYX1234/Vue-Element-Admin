<template>
	<div class="navtabs-container">
		<el-tabs v-model="activeName" type="card">
			<el-tab-pane
				:label="item.title"
				:key="item.path"
				:name="item.path"
				v-for="item in navTabsStore.tagList"
				:closable="item.path !== '/dashboard'"
			/>
		</el-tabs>
	</div>
</template>

<script lang="ts" setup name="NavTabs">
import { useNavTabsStore } from '@/store'

const navTabsStore = useNavTabsStore()
const route = useRoute()
const activeName = ref(route.path)

// 监听路由变化
watch(
	() => route.path,
	() => {
		handleNavTab()
	}
)

const handleNavTab = () => {
	navTabsStore.addTagItem({title:route.meta.title||'未命名', path:route.path})
}
</script>

<style lang="scss" scoped>
.navtabs-container {
	height: 32px;
	padding-top: 2px;
	border-bottom: 1px solid #d9d9d9;
	:deep(.el-tabs) {
		--el-tabs-header-height: 30px;
		.el-tabs__header {
			margin: 0;
			padding: 0 10px;
			border: 0;
			.el-tabs__nav {
				border: 0;
			}
		}
		.el-tabs__item {
			height: 28px;
			line-height: 28px;
			margin-right: 3px;
			padding: 0 15px 0 10px !important;
			border: 1px solid #e5e6eb;
			border-radius: 2px;
			&.is-active {
				background-color: #f3f7ff;
			}
			.is-icon-close:hover {
				background-color: #409eff;
			}
		}
	}
}
</style>
