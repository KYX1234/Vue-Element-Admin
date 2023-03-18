<template>
	<div class="app-container card">
		<el-alert
			title="自定义防抖指令"
			type="info"
			:closable="false"
			description="点击默认500ms后触发事件，可传入arg修改延迟时间"
		/>
		<div style="margin-top: 10px">
			<el-button v-debounce="onDebounce">防抖</el-button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'

const onDebounce = () => {
	ElMessage({
		type: 'success',
		message: '500ms触发一次！'
	})
	console.log('500ms触发一次')
}

</script>

<style lang="scss" scoped></style>
