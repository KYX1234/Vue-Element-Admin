<template>
	<div class="navtabs-container">
		<el-tabs
			v-model="activeName"
			type="card"
			@tab-click="onClick"
			@tab-remove="navTabsStore.removeTabsItem"
		>
			<el-tab-pane
				:label="item.title"
				:key="item.path"
				:name="item.path"
				v-for="item in navTabsStore.tabsList"
				:closable="item.path !== '/dashboard'"
			/>
		</el-tabs>
		<MoreDown />
	</div>
</template>

<script lang="ts" setup name="NavTabs">
import { useNavTabsStore } from '@/store'
import { TabsPaneContext } from 'element-plus'
import MoreDown from './MoreDown.vue'

const navTabsStore = useNavTabsStore()
const route = useRoute()
const router = useRouter()
const activeName = ref(route.path)

onMounted(() => {
	handleNavTabs()
})

// 监听路由变化
watch(
	() => route.path,
	() => {
		handleNavTabs()
	}
)

const handleNavTabs = () => {
	activeName.value = route.path
	navTabsStore.addTabsItem({
		title: route.meta.title || '未命名',
		name: route.name as string,
		path: route.path
	})
}

const onClick = (keyName: TabsPaneContext) => {
	router.push(keyName.props.name as string)
}
</script>

<style lang="scss" scoped>
.navtabs-container {
	display: flex;
	height: 32px;
	box-sizing: border-box;
	border-bottom: 1px solid var(--el-border-color-lighter);
	:deep(.el-tabs) {
		width: calc(100% - 35px);
		--el-tabs-header-height: 32px;
		overflow: hidden;
		.el-tabs__header {
			margin: 0;
			padding: 2px 10px 0;
			border: 0;
			.el-tabs__nav-wrap {
				margin: 0;
				.el-tabs__nav-prev,
				.el-tabs__nav-next {
					line-height: 30px;
				}
				.el-tabs__nav {
					border: 0;
					.el-tabs__item {
						height: 30px;
						line-height: 30px;
						margin-right: 3px;
						font-size: 13px;
						padding: 0 15px 0 10px !important;
						border: 1px solid var(--el-border-color-lighter);
						border-bottom: 0;
						border-radius: 2px 2px 0 0;
						&.is-active {
							color: var(--el-color-white);
							background-color: var(--el-color-primary-light-2);
						}
						.is-icon-close:hover {
							background-color: var(--el-color-primary);
						}
					}
				}
			}
		}
	}
}
</style>
