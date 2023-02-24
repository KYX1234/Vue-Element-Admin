<template>
	<div class="app-container">
		<BaseTable
			ref="tableRef"
			:column="column"
			:api="roleList"
			:callback="callback"
			:is-pageable="false"
		>
			<template #action="scope">
				<el-button type="primary" plain @click="onAddOrUpdate(scope.row)">编辑</el-button>
				<el-button type="primary" plain @click="onAuthority(scope.row)">菜单权限</el-button>
				<el-button type="danger" plain @click="onDelete">删除</el-button>
			</template>
		</BaseTable>
		<add-or-update ref="addOrUpdateRef" />
		<authority ref="authorityRef" :all-menu-list="allMenuList" />
	</div>
</template>

<script lang="ts" setup>
import { roleList, getRoleById } from '@/api/role'
import { ElMessage, ElMessageBox } from 'element-plus'
import AddOrUpdate from './components/AddOrUpdate.vue'
import Authority from './components/Authority.vue'

const tableRef = ref()
const addOrUpdateRef = ref()
const authorityRef = ref()
const allMenuList = ref<MenuItem[]>([])

onMounted(() => {
	tableRef.value.getList()
	getAllMenuList()
})

const callback = (data: any) => {
	return data.list
}
const column: Table.Column[] = [
	{ type: 'index', width: 50, label: 'No.' },
	{ prop: 'name', label: '名称' },
	{ prop: 'role_name', label: '标识' },
	{ prop: 'creat_at', label: '创建时间' },
	{ slot: 'action', label: '操作', width: 260 }
]
const onAddOrUpdate = (data?: Recordable) => {
	addOrUpdateRef.value.init(data)
}
const onAuthority = async (data: MenuItem) => {
	const roleItem = await getRoleById({ id: data.id! })
	const arr = handleRoleMenusSelected(roleItem.data)
	authorityRef.value.init(arr)
}
const getAllMenuList = async () => {
	const { data } = await getRoleById({ id: 1 })
	allMenuList.value = data
}
const handleRoleMenusSelected = (menus: MenuItem[], arr: number[] = []) => {
	menus.forEach((item: any) => {
		if (item.children && item.children.length) {
			handleRoleMenusSelected(item.children, arr)
		} else {
			arr.push(item.id)
		}
	})
	return arr
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
