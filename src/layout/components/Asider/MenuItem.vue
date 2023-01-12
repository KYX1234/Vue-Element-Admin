<template>
	<el-sub-menu :index="data.path" v-if="data.children && data.children.length > 0" :popper-class="appStore.menuMode">
		<template #title>
			<el-icon>
				<svg-icon :class-name="data.meta?.icon"></svg-icon>
			</el-icon>
			<span class="menu-title">{{ data.meta?.title }}</span>
		</template>
		<menu-item v-for="child in data.children" :key="child.path" :data="child"></menu-item>
	</el-sub-menu>
	<el-menu-item :index="data.path" v-else @click="onClickMenu(data)">
		<el-icon v-if="data.meta?.icon">
			<svg-icon :class-name="data.meta.icon" />
		</el-icon>
		<template #title>
			<span class="menu-title">{{ data.meta?.title }}</span>
		</template>
	</el-menu-item>
</template>

<script lang="ts" setup name="MenuItem">
import { PropType } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { useAppStore } from '@/store'

defineProps({
	data: {
		type: Object as PropType<RouteRecordRaw>,
		required: true
	}
})

const router = useRouter();
const appStore = useAppStore()

const onClickMenu = (item:RouteRecordRaw) => {
	if (item.meta?.isLink) return window.open(item.meta.isLink, "_blank");
	router.push(item.path);
};
</script>

<style lang="scss" scoped>

</style>
