<template>
	<div class="header-action-item" @click="drawer = true">
      <svg-icon class-name="setting" size="18"></svg-icon>
	</div>
	<ProjectSetting v-model:drawer="drawer" />
</template>

<script lang="ts" setup name="Setting">
import ProjectSetting from '../ProjectSetting/index.vue'

const drawer = ref(false)
</script>

<style lang="scss" scoped>
.header-action-item {
	display: flex;
	align-items: center;
	height: 100%;
	padding: 0 8px;
	cursor: pointer;

	&:hover {
		background-color: var(--el-fill-color-light);
	}
}
</style>
