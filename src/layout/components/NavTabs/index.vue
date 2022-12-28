<template>
	<div class="navtabs-container" v-if="appStore.navTabs">
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
import { useNavTabsStore,useAppStore } from '@/store'
import { TabsPaneContext } from 'element-plus'
import MoreDown from './MoreDown.vue'
const appStore=useAppStore()
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
		if(route.name==='redirect') return 
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
						border-radius: 3px 3px 0 0;
						transition:none;
						&:hover {
							.is-icon-close {
								color: var(--el-color-primary);
							}
						}
						&.is-active {
							color: var(--el-color-primary);
							background-color: rgba(var(--el-color-primary-rgb),0.05);
							.is-icon-close {
								color: var(--el-color-primary);
							}
						}
						.is-icon-close {
							color: var(--el-color-white);
							&:hover {
								font-size: 30px;
								background-color:rgba(var(--el-color-primary-rgb),0.1);
							}
						}
					}
				}
			}
		}
	}
}
</style>
