<template>
	<el-dialog
		v-model="visible"
		:title="form.id ? '编辑' : '添加'"
		width="700px"
		@closed="onReset"
		append-to-body
	>
		<el-form :model="form" label-width="80px" ref="formRef" inline>
			<el-form-item label="名称" prop="title">
				<el-input v-model="form.title" placeholder="请输入菜单名称" clearable></el-input>
			</el-form-item>
			<el-form-item label="标识" prop="name">
				<el-input v-model="form.name" placeholder="请输入标识" clearable></el-input>
			</el-form-item>
			<el-form-item label="上级菜单" prop="name">
				<el-tree-select
					v-model="form.pid"
					:data="data"
					:props="{ value: 'id', children: 'children', label: 'title' }"
					check-strictly
					clearable
					:render-after-expand="false"
					@node-click="onNodeClick"
				/>
			</el-form-item>
			<el-form-item label="路径" prop="component">
				<el-input v-model="form.component" placeholder="请输入前端路径" clearable></el-input>
			</el-form-item>
			<el-form-item label="图标" prop="icon">
				<SelectISvg v-model:value="form.icon"></SelectISvg>
			</el-form-item>
			<el-form-item label="隐藏" prop="hidden">
				<el-switch v-model="form.hidden" :active-value="1" :inactive-value="0" />
			</el-form-item>
		</el-form>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="visible = false">取消</el-button>
				<el-button type="primary" @click="visible = false">确认</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script lang="ts" setup>
import { FormInstance } from 'element-plus'
defineProps(['data'])
const visible = ref(false)
const formRef = ref<FormInstance>()
const form = reactive({
	id: 0,
	type: 0,
	name: '',
	title: '',
	pid: '',
	password: '',
	component: '',
	hidden: 0,
	icon: ''
})

const init = (data: Recordable) => {
	visible.value = true
	Object.keys(form).forEach((v:string) => {
		form.v=data[v]
	})
}
const onNodeClick = (data: any) => {
	console.log(data)
}
const onReset = () => {
	formRef.value!.resetFields()
}
defineExpose({ init })
</script>

<style lang="scss" scoped>
.el-form-item {
	width: 280px;
}
</style>
