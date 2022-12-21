<template>
	<div class="header-setting-icon" @click="drawer=true">
		<i-ep-setting></i-ep-setting>
	</div>
	<ProjectSetting v-model:drawer="drawer"/>
</template>

<script lang="ts" setup name="Setting">
import ProjectSetting from '../ProjectSetting/index.vue'

const drawer=ref(false)
</script>

<style lang="scss" scoped>
.header-setting-icon {
	display: flex;
	align-items: center;
	height: 100%;
	font-size: 15px;
	padding: 0 8px;
	cursor: pointer;

	&:hover {
		background-color: #f6f6f6;
	}
}
</style>
