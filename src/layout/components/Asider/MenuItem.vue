<template>
	<el-sub-menu :index="data.path" v-if="data.children && data.children.length > 0">
		<template #title>
			<svg-icon :class-name="data.meta?.icon"></svg-icon>
			<span>{{ data.meta?.title }}</span>
		</template>
		<menu-item v-for="child in data.children" :key="child.path" :data="child"></menu-item>
	</el-sub-menu>
	<el-menu-item :index="data.path" v-else>
		<svg-icon v-if="data.meta?.icon" :class-name="data.meta.icon" />
		<template #title>
			<span class="menu">{{ data.meta?.title }}</span>
		</template>
	</el-menu-item>
</template>

<script lang="ts" setup name="MenuItem">
import { PropType } from 'vue'
import { RouteRecordRaw } from 'vue-router'

defineProps({
	data: {
		type: Object as PropType<RouteRecordRaw>,
		required: true
	}
})
</script>

<style lang="scss" scoped></style>
