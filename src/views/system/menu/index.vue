<template>
	<el-card shadow="never">
		<el-table
			:data="tableData"
			v-loading="loading"
			row-key="id"
			:tree-props="{ children: 'children' }"
		>
			<el-table-column label="菜单名称" prop="title"></el-table-column>
			<el-table-column label="类型" align="center">
				<template #default="scope">
					<el-tag :type="scope.row.type ? 'success' : ''">
						{{ ['Layout', 'ParentLayout'].includes(scope.row.component) ? '目录' : '菜单' }}
					</el-tag>
				</template>
			</el-table-column>
			<el-table-column label="标识" align="center" prop="name"></el-table-column>
			<el-table-column label="路径" align="center" prop="component"></el-table-column>
			<el-table-column label="图标" align="center">
				<template #default="scope">
					<svg-icon :class-name="scope.row.icon" size="22"></svg-icon>
				</template>
			</el-table-column>
			<el-table-column label="操作" align="center" fixed="right">
				<template #default="scope">
					<el-button type="primary" plain @click="onAddOrUpdate(scope.row)">编辑</el-button>
					<el-button type="danger" plain @click="onDelete">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<Pagination
			v-model:current="page.current"
			v-model:limit="page.limit"
			:total="page.total"
			@pagination="getList"
		/>
		<add-or-update ref="addOrUpdateRef" :data="tableData" />
	</el-card>
</template>

<script lang="ts" setup>
import { menuList } from '@/api/menu'
import AddOrUpdate from './components/AddOrUpdate.vue'
const addOrUpdateRef = ref()
const tableData = ref([])
const loading = ref(false)

const page = reactive({
	current: 1,
	limit: 10,
	total: 0
})
const getList = async () => {
	try {
		loading.value = true
		const { data } = await menuList({ current: page.current, limit: page.limit })
		tableData.value = data.data
		page.total = data.total
	} finally {
		loading.value = false
	}
}
getList()

const onAddOrUpdate = (data?: Recordable) => {
	addOrUpdateRef.value.init(data)
}

const onDelete = () => {
	ElMessage.success('触发删除')
}
</script>

<style lang="scss" scoped></style>
