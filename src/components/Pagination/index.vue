<template>
	<el-pagination
		background
		layout="->,total, sizes, prev, pager, next, jumper"
		:current-page="page.current"
		:page-size="page.limit"
		:total="page.total"
		:page-sizes="sizes"
		@update:current-page="pageNum"
		@update:page-size="pageSize"
	/>
</template>

<script lang="ts" setup name="Pagination">
import { PropType } from 'vue'

const emit = defineEmits(['update:page', 'pagination'])
const props = defineProps({
	page: {
		type: Object,
		default: () => ({
			current: 1,
			limit: 10,
			total: 0
		})
	},
	sizes: {
		type: Array as PropType<number[]>,
		default: [10, 25, 50, 100]
	}
})

const pageNum = (val: number) => {
	console.log(props.page)
	emit('update:page', { ...props.page, current: val })
	emit('pagination')
}
const pageSize = (val: number) => {
	emit('update:page', { ...props.page, limit: val })
	emit('pagination')
}
</script>

<style lang="scss" scoped></style>
