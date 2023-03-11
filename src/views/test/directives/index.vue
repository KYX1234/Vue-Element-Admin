<template>
	<div class="app-container card">
		<el-alert
			title="自定义权限指令"
			type="info"
			:closable="false"
			description="当前页面auth为['add','delete'],下方有两个按钮为add与edit,没有权限的按钮将不再渲染"
		/>
		<div style="margin-top: 10px">
			<el-button v-auth="'add'">add</el-button>
			<el-button v-auth="'edit'">edit</el-button>
		</div>
    <el-alert
			title="自定义复制指令"
			type="info"
			:closable="false"
			description="点击可复制文本"
		/>
		<div style="margin-top: 10px">
			...
		</div>
    <el-alert
			title="自定义防抖指令"
			type="info"
			:closable="false"
			description="点击可复制文本"
		/>
		<div style="margin-top: 10px">
			...
		</div>
    <el-alert
			title="自定义节流指令"
			type="info"
			:closable="false"
			description="点击可复制文本"
		/>
		<div style="margin-top: 10px">
			...
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
