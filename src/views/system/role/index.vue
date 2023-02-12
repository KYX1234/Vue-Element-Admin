<template>
	<div class="app-container">
		<BaseTable  :data="tableData" :column="column" :loading="loading"></BaseTable>
	</div>
</template>

<script lang="ts" setup>
import { roleList } from '@/api/role'
import { useTable } from '@/hooks/useTable'
const callback = (data: any) => {
	return data.list
}
const { tableData,loading } = useTable(roleList, {}, false, callback)

const column: Table.Column[] = [
	{ type: 'index', width: 50, label: 'No.' },
	{ prop: 'name', label: '名称' }
]
</script>

<style lang="scss" scoped></style>
