<template>
	<SearchForm ref="form" :search="search" @search="onSearch"></SearchForm>
	<div v-loading="loading" class="card table" shadow="never">
		<el-form inline>
			<el-form-item>
				<slot name="header"></slot>
			</el-form-item>
		</el-form>
		<el-table :data="list" v-bind="getProps()">
			<el-table-column v-for="item in column" v-bind="item" :align="item.align ?? 'center'">
				<template #default="{ row, $index }">
					<component v-if="item.render" :is="item.render" :row="row" :index="$index" />
					<slot v-else-if="item.slot" :name="item.slot" :row="row" :index="$index"></slot>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination
			v-if="isPageable"
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
import { PropType } from 'vue'

const emit = defineEmits(['handleList'])
const props = defineProps({
	search: {
		type: Array as PropType<Table.Search[]>,
		default: () => []
	},
	column: {
		type: Object,
		default: () => []
	},
	api: {
		type: Function,
		required: true
	},
	//回调函数处理后端返回时不是对应的格式
	callback: {
		type: Function,
		default: null
	},
	// 初始化的请求参数
	params: {
		type: Object,
		default: () => ({})
	},
	// 是否显示分页
	isPageable: {
		type: Boolean,
		default: true
	},
	// table的其他属性
	config: {
		type: Object,
		default: () => ({})
	}
})

const form = ref()
const list = ref([])
const loading = ref(false)
const page = reactive({
	current: 1,
	limit: 10,
	total: 0
})
const getProps = () => {
	return {
		border: true,
		...props.config
	}
}

const getList = async () => {
	try {
		loading.value = true
		const pageParams = props.isPageable ? { current: page.current, limit: page.limit } : {}
		const allParams = { ...props.params, ...form.value.form, ...pageParams }
		let { data } = await props.api(allParams)
		props.callback && (data = props.callback(data))
		list.value = props.isPageable ? data.data : data
		props.isPageable && (page.total = data.total)
		//暴露数组与原始数据，以便有其他内容展示
		emit('handleList', list.value, data)
	} finally {
		loading.value = false
	}
}

const onSearch = () => {
	getList()
}

const handleSizeChange = (val: number) => {
	page.current = 1
	page.limit = val
	getList()
}

const handleCurrentChange = (val: number) => {
	page.current = val
	getList()
}
const resetTable = () => {
	page.current = 1
	getList()
}
defineExpose({ getList, resetTable })
</script>

<style lang="scss" scoped>
.el-pagination {
	margin-top: 15px;
}
.table {
	flex: 1;
	width: 100%;
	display: flex;
	flex-direction: column;
}
</style>
