<template>
	<div v-loading="loading">
		<el-table :data="data" :border="border" @selection-change="handleSelectionChange">
			<el-table-column v-for="item in column" v-bind="item" :align="item.align ?? 'center'">
				<template #default="{ row, $index }">
					<component v-if="item.render" :is="item.render" :row="row" :index="$index" />
					<slot v-else-if="item.slot" :name="item.slot" :row="row" :index="$index"></slot>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination
			v-if="page"
			background
			layout="->,total, sizes, prev, pager, next, jumper"
			:current-page="page.current"
			:page-size="page.limit"
			:total="page.total"
			:page-sizes="[10, 25, 50, 100]"
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
		/>
	</div>
</template>

<script lang="ts" setup>
interface BaseTableProps {
	data: any[]
	column: Table.Column[]
	pagination?: boolean
	border?: boolean
	loading?: boolean
	page?: Table.Page
}

withDefaults(defineProps<BaseTableProps>(), {
	column: () => [],
	pagination: true,
	border: true,
	loading: false
})
const emit = defineEmits(['handleSizeChange', 'handleCurrentChange', 'handleSelectionChange'])

const handleSizeChange = (limit: number) => {
	emit('handleSizeChange', limit)
}
const handleCurrentChange = (current: number) => {
	emit('handleCurrentChange', current)
}
const handleSelectionChange = (val: any[]) => {
	emit('handleSelectionChange', val)
}
</script>

<style lang="scss" scoped></style>
