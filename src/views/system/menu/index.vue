<template>
	<div class="app-container">
		<!-- 插槽渲染 -->
		<BaseTable
			ref="tableRef"
			:api="menuList"
			:column="column"
			:config="getConfig()"
			@handle-list="handleList"
		>
			<template #header>
				<el-form inline>
					<el-form-item>
						<el-button :icon="Plus" type="primary" @click="onAddOrUpdate()">添加</el-button>
					</el-form-item>
				</el-form>
			</template>
			<template #icon="scope">
				<svg-icon :class-name="scope.row.icon" size="22"></svg-icon>
			</template>
			<template #type="scope">
				<el-tag :type="scope.row.type ? 'success' : ''">
					{{ ['Layout', 'ParentLayout'].includes(scope.row.component) ? '目录' : '菜单' }}
				</el-tag>
			</template>
			<template #action="scope">
				<el-button type="primary" plain @click="onAddOrUpdate(scope.row)">编辑</el-button>
				<el-button type="danger" plain @click="onDelete">删除</el-button>
			</template>
		</BaseTable>
		<add-or-update ref="addOrUpdateRef" :data="allMenuList" />
	</div>
</template>

<script lang="ts" setup>
import { menuList } from '@/api/menu'
import AddOrUpdate from './components/AddOrUpdate.vue'
import { Plus } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const tableRef = ref()
const allMenuList = ref<Array<any>>([])
const addOrUpdateRef = ref()
const column: Table.Column[] = [
	{ type: 'index', width: 50, label: 'No.' },
	{ prop: 'title', label: '菜单名称' },
	{ slot: 'type', label: '类型' },
	{ prop: 'name', label: '标识' },
	{ prop: 'component', label: '标识' },
	{ slot: 'icon', label: '图标' },
	{ slot: 'action', label: '操作', width: 260 }
]
const getConfig = () => {
	return {
		'row-key': 'id'
	}
}
onMounted(() => {
	tableRef.value.getList()
})
const handleList = (list: Array<any>) => {
	allMenuList.value = list
}
const onAddOrUpdate = (data?: MenuItem) => {
	addOrUpdateRef.value.init(data)
}

const onDelete = () => {
	ElMessage.success('触发删除')
}
</script>

<style lang="scss" scoped></style>
