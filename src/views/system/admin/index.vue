<template>
	<div class="app-container">
		<!-- render渲染 -->
		<BaseTable ref="tableRef" :api="adminList" :column="column" :search="search" :params="params">
			<template #header>
				<el-button :icon="Plus" type="primary" @click="onAddOrUpdate()">添加</el-button>
			</template>
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
import { Plus } from '@element-plus/icons-vue'
import { adminList, AdminItem, adminStatus } from '@/api/admin'
import AddOrUpdate from './components/AddOrUpdate.vue'
import { ElMessage, ElMessageBox, ElTag } from 'element-plus'

const tableRef = ref()
const addOrUpdateRef = ref()
// 如果需要初始化携带额外参数
const params = reactive({
	type:1
})
onMounted(() => {
	getStatus()
	tableRef.value.getList()
})
const getStatus = async () => {
	const { data } = await adminStatus()
	search.value[2].options=data
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
const onAddOrUpdate = (data?: AdminItem) => {
	addOrUpdateRef.value.init(data)
}
// 针对异步的select数据需要将数组变为响应式
const search = ref([
	{ type: 'el-input', prop: 'name', label: '名称' },
	{ type: 'el-input', prop: 'phone', label: '手机号' },
	{
		type: 'el-select',
		prop: 'status',
		label: '状态',
		defaultValue:'',
		options:[],
		clearable: true
	}
])
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
