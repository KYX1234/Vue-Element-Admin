<template>
	<div class="navtabs-container">
		<el-tabs v-model="activeName" type="card" class="demo-tabs" closable>
			<el-tab-pane label="User" name="first1">User1</el-tab-pane>
			<el-tab-pane label="User" name="first2">User2</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script lang="ts" setup>
const activeName = ref('first1')
</script>

<style lang="scss" scoped>
.navtabs-container {
	height: 32px;
	padding-top: 2px;
	border-bottom: 1px solid #d9d9d9;
	:deep(.el-tabs) {
		--el-tabs-header-height: 30px;
		.el-tabs__header {
			margin: 0;
			padding: 0 10px;
			border: 0;
			.el-tabs__nav {
				border: 0;
			}
		}
		.el-tabs__item {
			height: 28px;
      line-height: 28px;
			margin-right: 3px;
			padding: 0 15px 0 10px !important;
			border: 1px solid #d9d9d9;
      &.is-active{
        background-color: #f3f7ff;
        // color: #fff;
      }
			.is-icon-close:hover {
				background-color: #409eff;
			}
		}
	}
}
</style>
