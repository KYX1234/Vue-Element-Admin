<template>
	<template v-if="!data.meta?.hidden">
		<template v-if="onlyOneChild && onlyOneChild.meta">
			<el-menu-item :index="onlyOneChild.path" :titlfe="onlyOneChild.meta.title">
				<svg-icon v-if="onlyOneChild.meta.icon" :class-name="onlyOneChild.meta.icon" />
				<template #title>
					<span class="menu">{{ onlyOneChild.meta.title }}</span>
				</template>
			</el-menu-item>
		</template>
		<el-sub-menu :index="data.path" v-else>
			<template #title>
				<svg-icon :class-name="data.meta?.icon"></svg-icon>
				<span>{{ data.meta!.title }}</span>
			</template>
			<menu-item v-for="child in data.children" :key="child.path" :data="child"></menu-item>
		</el-sub-menu>
	</template>
</template>

<script lang="ts" setup name="MenuItem">
import { PropType } from 'vue'
import { RouteRecordRaw } from 'vue-router'

const props = defineProps({
	data: {
		type: Object as PropType<RouteRecordRaw>,
		required: true
	}
})
let onlyOneChild = ref<RouteRecordRaw>()
const hasOneShowingChild = (children = [] as RouteRecordRaw[], parent: RouteRecordRaw) => {
	const showingChildren = children.filter(item => item.meta && !item.meta.hidden)
	if (showingChildren.length === 1) {
		onlyOneChild.value = showingChildren[0]
		return true
	}
	if (showingChildren.length === 0) {
		onlyOneChild.value = { ...parent }
		return true
	}
	return false
}
hasOneShowingChild(props.data.children, props.data)
</script>

<style lang="scss" scoped></style>
