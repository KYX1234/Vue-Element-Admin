<template>
	<el-dialog
		v-model="state.visible"
		:title="state.form.id ? '编辑' : '添加'"
		width="43%"
		@closed="onReset"
	>
		<el-form :model="state.form" inline label-width="55px">
			<el-form-item label="用户名">
				<el-input v-model="state.form.name" placeholder="请输入用户名" clearable></el-input>
			</el-form-item>
			<el-form-item label="邮箱">
				<el-input v-model="state.form.email" placeholder="请输入邮箱" clearable></el-input>
			</el-form-item>
			<el-form-item label="手机号">
				<el-input v-model="state.form.phone" placeholder="请输入手机号" clearable></el-input>
			</el-form-item>
			<el-form-item label="状态">
				<el-select v-model="state.form.status" clearable placeholder="请选择">
					<el-option label="启用" :value="1"></el-option>
					<el-option label="禁用" :value="0"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="角色">
				<el-select v-model="state.form.role" clearable placeholder="请选择">
					<el-option label="超级管理员" :value="1"></el-option>
					<el-option label="普通用户" :value="0"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="密码">
				<el-input v-model="state.form.password" placeholder="请输入密码" clearable></el-input>
			</el-form-item>
		</el-form>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="state.visible = false">取消</el-button>
				<el-button type="primary" @click="state.visible = false">确认</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script lang="ts" setup>
import type { EditState, ListItem } from '@/api'
const initState = (): EditState => ({
	visible: false,
	form: {
		id: 0,
		email: '',
		phone: '',
		name: '',
		password: '',
		status: 1,
		role: ''
	}
})
const state = reactive<EditState>(initState())
const init = (data: ListItem) => {
	state.visible = true
	if (data) state.form = data
}
const onReset = () => {
	Object.assign(state, initState())
}
defineExpose({ init })
</script>

<style lang="scss" scoped></style>
