<template>
	<el-dialog v-model="visible" :title="form.id ? '编辑' : '添加'" width="650px" @closed="onReset">
		<el-form :model="form" label-width="70px" ref="formRef" inline>
			<el-form-item label="类型" prop="type">
				<el-input v-model="form.type" placeholder="请输入类型" clearable></el-input>
			</el-form-item>
			<el-form-item label="菜单名称" prop="title">
				<el-input v-model="form.title" placeholder="请输入菜单名称" clearable></el-input>
			</el-form-item>
			<el-form-item label="标识" prop="name">
				<el-input v-model="form.name" placeholder="请输入标识" clearable></el-input>
			</el-form-item>
			<el-form-item label="前端路径" prop="component">
				<el-input v-model="form.component" placeholder="请输入前端路径" clearable></el-input>
			</el-form-item>
			<el-form-item label="图标" prop="icon">
				<SelectISvg></SelectISvg>
			</el-form-item>
			<el-form-item label="隐藏" prop="password">
				<el-input v-model="form.password" placeholder="请输入密码" clearable></el-input>
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
import { FormInstance } from 'element-plus';
const visible = ref(false)
const formRef = ref<FormInstance>()
const form = reactive({
	id: 0,
	type: '',
	name: '',
	title: '',
	password: '',
	component: 1,
	icon: ''
})

const init = (data:Recordable) => {
	visible.value = true
	if (data) Object.assign(form, data)
}
const onReset = () => {
	if (!formRef.value) return
	formRef.value.resetFields()
}
defineExpose({ init })
</script>

<style lang="scss" scoped></style>
