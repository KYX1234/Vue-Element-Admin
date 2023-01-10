<template>
	<div class="sidebar-logo-container" :style="{ width: collapse ? '65px' : '210px' }">
		<transition name="zoom-out" mode="out-in" >
			<router-link key="collapse" class="sidebar-logo-link" to="/" v-if="!collapse">
				<img src="favicon.ico" alt="logo" class="sidebar-logo" />
				<span class="sidebar-title">my-Admin-pro-asdasd</span>
			</router-link>
			<router-link key="expand" class="sidebar-logo-link" to="/" v-else>
				<img src="favicon.ico" alt="logo" class="sidebar-logo" />
			</router-link>
		</transition>
	</div>
</template>

<script lang="ts" setup name="Logo">
defineProps({
	collapse: {
		type: Boolean,
		required: true
	}
})

</script>

<style lang="scss" scoped>
.sidebar-logo-container {
	display: flex;
	border-bottom: 1px solid var(--el-border-color-lighter);
	height: 48px;
	box-sizing: border-box;
	transition: all 0.3s;
	.sidebar-logo-link {
		display: flex;
		flex: 1;
		height: 100%;
		align-items: center;
		padding: 0 20px;

		.sidebar-logo {
			display: inline-block;
			width: 25px;
			height: 25px;
			flex-shrink: 0;
			vertical-align: middle;
		}

		.sidebar-title {
			margin-left: 12px;
			font-size: 16px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
		}
	}
}
</style>
