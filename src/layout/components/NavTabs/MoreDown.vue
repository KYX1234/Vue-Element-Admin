<template>
	<el-dropdown>
		<div class="more-down">
			<el-icon><i-ep-arrowDown /></el-icon>
		</div>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item>
					<el-icon><i-ep-refreshRight /></el-icon>
					重新加载
				</el-dropdown-item>
				<el-dropdown-item @click="navTabsStore.removeTabsItem(route.path)">
					<el-icon><i-ep-close /></el-icon>
					关闭当前
				</el-dropdown-item>
				<el-dropdown-item @click="navTabsStore.colseTabsOther(route.path)">
					<el-icon><i-ep-switch /></el-icon>
					关闭其它
				</el-dropdown-item>
				<el-dropdown-item @click="navTabsStore.clearTabsAll">
					<el-icon><i-ep-minus /></el-icon>
					关闭全部
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script lang="ts" setup name="MoreDown">
import { useNavTabsStore } from '@/store'

const route= useRoute()
const navTabsStore = useNavTabsStore()
</script>

<style lang="scss" scoped>
.more-down {
	flex-shrink: 0;
	width: 35px;
	height: 32px;
	line-height: 32px;
	text-align: center;
	cursor: pointer;
	border-left: 1px solid #d9d9d9;
}
</style>
