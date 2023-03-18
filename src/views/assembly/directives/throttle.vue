<template>
	<div class="app-container card">
		<el-alert
			title="自定义节流指令"
			type="info"
			:closable="false"
			description="点击默认1000ms后触发事件，可传入arg修改延迟时间"
		/>
		<div style="margin-top: 10px">
			<el-button v-throttle="onThrottle">节流</el-button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'

const onThrottle = () => {
	ElMessage({
		type: 'success',
		message: '1000ms触发一次！'
	})
	console.log('1000ms触发一次')
}

</script>

<style lang="scss" scoped></style>
