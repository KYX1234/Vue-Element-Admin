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
		<BaseTable
			:data="tableData"
			:loading="loading"
			:column="column"
			:page="page"
			@handleSizeChange="handleSizeChange"
			@handleCurrentChange="handleCurrentChange"
		>
			<template #action="scope">
				<el-button type="primary" plain @click="onAddOrUpdate(scope)">编辑</el-button>
				<el-button type="primary" plain>菜单权限</el-button>
				<el-button type="danger" plain @click="onDelete">删除</el-button>
			</template>
		</BaseTable>

		<add-or-update ref="addOrUpdateRef" />
	</el-card>
</template>

<script lang="ts" setup>
import { Search, Plus } from '@element-plus/icons-vue'
import { getAdminList } from '@/api'
import AddOrUpdate from './components/AddOrUpdate.vue'
import { useTable } from '@/hooks/useTable'

const addOrUpdateRef = ref()
const search = reactive({
	status: '',
	phone: ''
})
const { tableData, loading, page, getList, handleSizeChange, handleCurrentChange } = useTable(
	getAdminList,
	search
)
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
const onAddOrUpdate = (data?: Recordable) => {
	addOrUpdateRef.value.init(data)
}
</script>

<style lang="scss" scoped></style>
