<template>
	<el-card shadow="never">
		<el-form :model="search" inline class="search">
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
		</el-form>
		<el-table :data="list" v-loading="loading">
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
				<template #default="{ row }">
					<el-button type="primary" plain @click="onAddOrUpdate(row)">编辑</el-button>
					<el-button type="" plain>菜单权限</el-button>
					<el-button type="danger" plain @click="onDelete">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<pagination
			:disabled="loading"
			v-model:page="page"
			@pagination="getList()"
		></pagination>
		<add-or-update ref="addOrUpdateRef" />
	</el-card>
</template>

<script lang="ts" setup>
import { Search, Plus } from '@element-plus/icons-vue'
import { adminList } from '@/api'
import type { ListItem } from './index'
import AddOrUpdate from './components/AddOrUpdate.vue'

const addOrUpdateRef = ref()
const loading = ref(false)
const list = ref<ListItem[]>([])
const page = reactive({
	current: 1,
	limit: 10,
	total: 0
})
const search = reactive({
	status: '',
	phone: ''
})

const getList = async (current: number = page.current) => {
	try {
		loading.value = true
		if (current === 1) page.current = 1
		const { data } = await adminList({ current, limit: page.limit, ...search })
		list.value = data.data
		page.total = data.total
	} finally {
		loading.value = false
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
const onAddOrUpdate = (data?: ListItem) => {
	addOrUpdateRef.value.init(data)
}
</script>

<style lang="scss" scoped></style>
