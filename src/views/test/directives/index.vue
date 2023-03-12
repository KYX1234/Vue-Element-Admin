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
			description="点击可复制文本,下方内容：今天天气不错哦~'"
		/>
		<div style="margin-top: 10px">
			<el-button v-copy="'今天天气不错哦~'">复制</el-button>
		</div>
		<el-alert
			title="自定义防抖指令"
			type="info"
			:closable="false"
			description="点击默认500ms后触发事件，可传入arg修改延迟时间"
		/>
		<div style="margin-top: 10px">
			<el-button v-debounce="onDebounce">防抖</el-button>
		</div>
		<el-alert
			title="自定义节流指令"
			type="info"
			:closable="false"
			description="点击默认1000ms后触发事件，可传入arg修改延迟时间"
		/>
		<div style="margin-top: 10px">
			<el-button v-throttle="onThrottle">节流</el-button>
		</div>

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

const onDebounce = () => {
	ElMessage({
		type: 'success',
		message: '500ms触发一次！'
	})
	console.log('500ms触发一次')
}
const onThrottle = () => {
	ElMessage({
		type: 'success',
		message: '1000ms触发一次！'
	})
	console.log('1000ms触发一次')
}
const onLongpress = (e:MouseEvent | TouchEvent) => {
	ElMessage({
		type: 'success',
		message: '2000ms触发一次！'
	})
	console.log('2000ms触发一次',e)
}
</script>

<style lang="scss" scoped></style>
