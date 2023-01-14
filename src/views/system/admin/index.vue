<template>
	<el-card shadow="never">
		<el-form :model="state.search" inline class="search">
			<el-form-item label="手机号">
				<el-input v-model="state.search.phone" placeholder="请输入手机号" clearable></el-input>
			</el-form-item>
			<el-form-item label="状态">
				<el-select v-model="state.search.status" clearable placeholder="请选择">
					<el-option label="启用" :value="1"></el-option>
					<el-option label="禁用" :value="0"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button :icon="Search" @click="getList()" :loading="state.loading">搜索</el-button>
				<el-button :icon="Plus" type="primary" @click="onAddOrUpdate()">添加</el-button>
			</el-form-item>
		</el-form>
		<el-table :data="state.list" v-loading="state.loading">
			<el-table-column label="ID" prop="id" align="center" width="100"></el-table-column>
			<el-table-column label="名称" prop="name" align="center"></el-table-column>
			<el-table-column label="手机号" prop="phone" align="center" width="140"></el-table-column>
			<el-table-column label="角色" prop="role" align="center">
				<template #default="scope">
					<el-tag type="">{{ scope.row.status ? '超级管理员' : '普通用户' }}</el-tag>
				</template>
			</el-table-column>
			<el-table-column label="状态" prop="status" align="center">
				<template #default="scope">
					<el-tag :type="scope.row.status ? 'success' : 'info'">
						{{ scope.row.status ? '启用' : '禁用' }}
					</el-tag>
				</template>
			</el-table-column>
			<el-table-column
				label="创建时间"
				prop="creat_at"
				width="180"
				align="center"
			></el-table-column>
			<el-table-column label="操作" align="center" width="260" fixed="right">
				<template #default="{row}">
					<el-button type="primary" plain @click="onAddOrUpdate(row)">编辑</el-button>
					<el-button type="" plain>菜单权限</el-button>
					<el-button type="danger" plain @click="onDelete">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<pagination
			:disabled="state.loading"
			v-model:page="state.page"
			@pagination="getList()"
		></pagination>
		<add-or-update ref="addOrUpdateRef"/>
	</el-card>
</template>

<script lang="ts" setup>
import { Search, Plus } from '@element-plus/icons-vue'
import { adminList } from '@/api'
import type { State,Form } from './types'
import AddOrUpdate from './components/AddOrUpdate.vue'
const addOrUpdateRef=ref()
const state = reactive<State>({
	loading: false,
	list: [],
	search: {
		status: '',
		phone: ''
	},
	page: {
		current: 1,
		limit: 10,
		total: 0
	}
})
const getList = async (current:number = state.page.current) => {
	try {
		state.loading = true
		const { data } = await adminList({ current, limit: state.page.limit, ...state.search })
		state.list = data.data
		state.page.total = data.total
	} finally {
		state.loading = false
	}
}
getList()
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
const onAddOrUpdate = (data?:Form) => {
	addOrUpdateRef.value.init(data)
}
</script>

<style lang="scss" scoped></style>
