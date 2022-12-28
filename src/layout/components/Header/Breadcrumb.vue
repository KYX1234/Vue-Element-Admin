<template>
	<el-breadcrumb separator="/" v-if="appStore.breadCrumb">
		<el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index" @click="onLink(item)">
			<span class="breadcrumb-title">{{ item.meta.title }}</span>
		</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script lang="ts" setup name="Breadcrumb">
import router from '@/router';
import { useAppStore } from '@/store'
import { RouteLocationMatched } from 'vue-router'

const route = useRoute()
const appStore = useAppStore()
const breadcrumbList = computed(() => route.matched.filter(item => item.meta && item.meta.title))
const onLink = (item:RouteLocationMatched) => {
	if (item.redirect) {
		router.push(item.redirect as string)
	} else {
		router.push(item.path)
	}
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1000px) {
	.el-breadcrumb {
		display: none;
	}
}
.el-breadcrumb {
	padding: 0 5px;
	.breadcrumb-title {
		font-weight: 400;
		cursor: pointer;
	}

	.el-breadcrumb__item:last-child {
		.breadcrumb-title {
			color: #bbbbbb;
			cursor: text;
		}
	}
}
</style>
