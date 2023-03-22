<template>
	<div class="card searchForm-wrap" v-if="search.length">
		<el-form ref="searchFormRef" class="form-inline" :model="form">
			<div class="grid-wrap" :style="style">
				<div
					v-for="(item, index) in search"
					:key="index"
					:style="expandNum === 1 ? 'grid-column:span 1' : `grid-column:span ${item.span || 1}`"
					v-show="index < (expandNum>1 ? expandNum - 1 : expandNum) || isExpand"
				>
					<el-form-item :label="item.label" :prop="item.prop">
						<component
							:is="item.type"
							v-model="form[item.prop]"
							v-bind="item.config"
							style="width: 100%"
							:clearable="item.clearable ?? false"
							:placeholder="placeholder(item)"
							:options="item.type === 'cascader' ? item.options : []"
							range-separator="至"
							start-placeholder="开始时间"
							end-placeholder="结束时间"
						>
							<template v-if="item.type === 'el-select'">
								<component
									:is="'el-option'"
									v-for="col in item.options"
									:key="col[defaultName(item).value as 'value']"
									:label="col[defaultName(item).label as 'label']"
									:value="col[defaultName(item).value as 'value']"
								></component>
							</template>
						</component>
					</el-form-item>
				</div>
				<div :style="`grid-column:${expandNum}`">
					<div class="search-btn-box">
						<el-button @click="onSearch" type="primary" :icon="Search">搜索</el-button>
						<el-button @click="onReset" :icon="Refresh">重置</el-button>
						<el-button
							class="expand"
							type="primary"
							link
							@click="isExpand = !isExpand"
							:icon="isExpand ? ArrowUp : ArrowDown"
						>
							{{ isExpand ? '收起' : '展开' }}
						</el-button>
					</div>
				</div>
			</div>
		</el-form>
	</div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { Search, ArrowUp, ArrowDown, Refresh } from '@element-plus/icons-vue'
const emit = defineEmits(['search'])
const props = defineProps({
	search: {
		type: Array as PropType<Table.Search[]>,
		default: () => []
	}
})
const isExpand = ref<boolean>(false)
const expandNum = ref<number>(0)
const form = reactive<any>({})
const searchFormRef = ref()
for (const item of props.search) {
	form[item.prop] = item.defaultValue ?? ''
}
const defaultName = (item: Table.Search) => {
	return {
		label: item.defaultName?.label ?? 'label',
		value: item.defaultName?.value ?? 'value'
	}
}
const placeholder = (item: Table.Search) => {
	return item.placeholder ?? (item.type === 'el-input' ? '请输入' : '请选择')
}

const style = computed(() => {
	return {
		display: 'grid',
		gap: '15px',
		gridTemplateColumns: `repeat(${expandNum.value}, minmax(0, 1fr))`
	}
})

const resize = () => {
	const width = window.innerWidth
	switch (!!width) {
		case width < 768:
			expandNum.value = 1
			break
		case width >= 768 && width < 992:
			expandNum.value = 2
			break
		case width >= 992 && width < 1200:
			expandNum.value = 3
			break
		case width >= 1200 && width < 1920:
			expandNum.value = 4
			break
		case width >= 1920:
			expandNum.value = 4
			break
	}
}
onMounted(() => {
	resize()
	window.addEventListener('resize', resize)
})
onActivated(() => {
	resize()
	window.addEventListener('resize', resize)
})
onUnmounted(() => {
	window.removeEventListener('resize', resize)
})
onDeactivated(() => {
	window.removeEventListener('resize', resize)
})
const onSearch = () => {
	emit('search')
}
const onReset = () => {
	searchFormRef.value.resetFields()
}
defineExpose({ form })
</script>

<style lang="scss" scoped>
.searchForm-wrap {
	width: 100%;
	margin-bottom: 15px;
	.el-form-item {
		margin-bottom: unset;
	}
	.search-btn-box {
		display: flex;
		justify-content: flex-end;
	}
}
</style>
