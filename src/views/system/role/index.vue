<template>
	<div class="app-container">
		<BaseTable :data="tableData" :column="column" :loading="loading">
			<template #action="scope">
				<el-button type="primary" plain @click="onAddOrUpdate(scope.row)">编辑</el-button>
				<el-button type="primary" plain @click="onAuthority(scope.row)">菜单权限</el-button>
				<el-button type="danger" plain @click="onDelete">删除</el-button>
			</template>
		</BaseTable>
		<add-or-update ref="addOrUpdateRef" />
	</div>
</template>

<script lang="ts" setup>
import { roleList,getRoleById } from '@/api/role'
import { useTable } from '@/hooks/useTable'
import AddOrUpdate from './components/AddOrUpdate.vue';
const addOrUpdateRef=ref()
const callback = (data: any) => {
	return data.list
}
const { tableData,loading } = useTable(roleList, {}, false, callback)

const column: Table.Column[] = [
	{ type: 'index', width: 50, label: 'No.' },
	{ prop: 'name', label: '名称' },
	{ prop: 'role_name', label: '标识' },
	{ prop: 'creat_at', label: '创建时间' },
	{ slot: 'action', label: '操作',width:260 },
]
const onAddOrUpdate = (data?: Recordable) => {
	addOrUpdateRef.value.init(data)
}
const onAuthority = (data?: Recordable) => {
	getRoleById({id:1}).then(res => {
	})
}
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
</script>

<style lang="scss" scoped></style>
