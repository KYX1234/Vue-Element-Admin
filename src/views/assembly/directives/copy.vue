<template>
	<div class="app-container card">

		<el-alert
			title="自定义复制指令"
			type="info"
			:closable="false"
			description="点击可复制文本,下方内容：今天天气不错哦~'"
		/>
		<div style="margin-top: 10px">
			<el-button v-copy="'今天天气不错哦~'">复制</el-button>
		</div>
	</div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped></style>
