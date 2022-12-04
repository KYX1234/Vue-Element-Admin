<template>
	<div>
		<el-menu
			default-active="2"
			class="el-menu-vertical-demo"
			:collapse="isCollapse"
		>
		<MenuItem v-for="route in []" :key="route.path" :item="route"/>
	</el-menu>
	</div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store'
import MenuItem from './MenuItem.vue'
import { useRouteStore } from '@/store';
const appStore = useAppStore()
const route = useRoute()
console.log(useRouteStore().routes)
const isCollapse = computed(() => appStore.isCollapse)
const activeMenu = computed(() => route.path)

</script>

<style lang="scss" scoped></style>
