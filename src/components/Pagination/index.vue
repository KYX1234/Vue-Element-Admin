<template>
	<div class="pagination-container">
		<el-pagination
			v-model:currentPage="currentPage"
			v-model:pageSize="pageSize"
			:background="background"
			:layout="layout"
			:page-sizes="pageSizes"
			:total="total"
			@current-change="handleChange"
			@size-change="handleChange"
		/>
	</div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
const props = defineProps({
	current: {
		type: Number,
		default: 1
	},
	limit: {
		type: Number,
		default: 10
	},
	total: {
		type: Number,
		default: 0
	},
	pageSizes: {
		type: Array as PropType<number[]>,
		default: () => [10, 20, 50, 100]
	},
	layout: {
		type: String,
		default: '->,total, sizes, prev, pager, next, jumper'
	},
	background: {
		type: Boolean,
		default: false
	}
})
const emit = defineEmits(['pagination', 'update:current', 'update:limit'])
const currentPage = computed({
	get() {
		return props.current
	},
	set(newValue) {
		emit('update:current', newValue)
	}
})
const pageSize = computed({
	get() {
		return props.limit
	},
	set(newValue) {
		emit('update:limit', newValue)
	}
})
const handleChange = () => {
	emit('pagination')
}
</script>
