<template>
	<div class="app-container">
		<!-- <el-form :model="search" inline class="search">
			<el-form-item label="手机号">
				<el-input v-model="search.phone" placeholder="请输入手机号" clearable></el-input>
			</el-form-item>
			<el-form-item label="状态">
				<el-select v-model="search.status" clearable placeholder="请选择">
					<el-option label="启用" :value="1"></el-option>
					<el-option label="禁用" :value="0"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button :icon="Search" @click="getList()" :loading="loading">搜索</el-button>
				<el-button :icon="Plus" type="primary" @click="onAddOrUpdate()">添加</el-button>
			</el-form-item>
		</el-form> -->
		<BaseTable ref="tableRef" :api="adminList" :column="column" :search="search">
			<template #action="scope">
				<el-button type="primary" plain @click="onAddOrUpdate(scope.row)">编辑</el-button>
				<el-button type="primary" plain>菜单权限</el-button>
				<el-button type="danger" plain @click="onDelete">删除</el-button>
			</template>
		</BaseTable>
		<add-or-update ref="addOrUpdateRef" />
	</div>
</template>

<script lang="ts" setup>

import { adminList, AdminItem } from '@/api/admin'
import AddOrUpdate from './components/AddOrUpdate.vue'
import { ElMessage, ElMessageBox, ElTag } from 'element-plus'

const tableRef = ref()
const addOrUpdateRef = ref()

onMounted(() => {
	tableRef.value.getList()
})
const onDelete = () => {
	ElMessageBox.confirm('您确认要删除当前项吗？', '提示', {
		confirmButtonText: '确认',
		cancelButtonText: '取消',
		type: 'warning'
	})
		.then(() => {
			ElMessage({
				type: 'success',
				message: '只是个demo！'
			})
		})
		.catch(() => {
			ElMessage({
				type: 'info',
				message: '取消操作'
			})
		})
}
const onAddOrUpdate = (data?: AdminItem) => {
	addOrUpdateRef.value.init(data)
}
const search: Table.Search[] = [
	{ type: 'el-input', prop: 'name', label: '名称' },
	{ type: 'el-input', prop: 'name1', label: '名称' },
	{ type: 'el-input', prop: 'name2', label: '名称' },
	{ type: 'el-input', prop: 'name3', label: '名称' },
	{ type: 'el-input', prop: 'name4', label: '名称' },
	{ type: 'el-input', prop: 'name5', label: '名称' },
	{ type: 'el-input', prop: 'name6', label: '名称' },
	{ type: 'el-input', prop: 'name6', label: '名称' },
]
const column: Table.Column[] = [
	{ type: 'selection', width: 50 },
	{ type: 'index', width: 50, label: 'No.' },
	{ prop: 'name', label: '名称' },
	{ label: '手机号', prop: 'phone' },
	{
		label: '角色',
		render: scope =>
			h(ElTag, { type: 'success' }, () => (scope.row.role ? '超级管理员' : '普通用户'))
	},
	{
		label: '状态',
		render: scope =>
			h(ElTag, { type: scope.row.status ? 'success' : 'info' }, () =>
				scope.row.status ? '启用' : '禁用'
			)
	},
	{ label: '创建时间', prop: 'creat_at', width: 180 },
	{ label: '操作', slot: 'action', width: 260, fixed: 'right' }
]
</script>

<style lang="scss" scoped></style>
