<template>
	<div :class="['sidebar-logo-container', collapse && 'collapse']">
		<router-link key="collapse" class="sidebar-logo-link" to="/">
			<img src="/favicon.ico" alt="logo" class="sidebar-logo" />
			<span v-if="!collapse" class="sidebar-title">ElementAdmin</span>
		</router-link>
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
		justify-content: center;

		.sidebar-logo {
			display: inline-block;
			width: 27px;
			height: 27px;
			flex-shrink: 0;
			vertical-align: middle;
		}

		.sidebar-title {
			margin-left: 12px;
			font-size: 16px;
			white-space: nowrap;
			overflow: hidden;
			// transform: scale(1);
			text-overflow: ellipsis;
			// transition: all 0.3s;
			font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
			// &.collapse{
			// 	margin-left: 0;
			// 	width: 0;
			// 	// transform: scale(0.5);
			// }
		}
	}
}
</style>
