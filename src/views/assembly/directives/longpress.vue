<template>
	<div class="app-container card">
		<el-alert
			title="自定义长按指令"
			type="info"
			:closable="false"
			description="点击长按2000ms后触发事件，可传入arg修改延迟时间"
		/>
		<div style="margin-top: 10px">
			<el-button v-longpress="onLongpress">长按</el-button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'

const onLongpress = (e:MouseEvent | TouchEvent) => {
	ElMessage({
		type: 'success',
		message: '2000ms触发一次！'
	})
	console.log('2000ms触发一次',e)
}
</script>

<style lang="scss" scoped></style>
