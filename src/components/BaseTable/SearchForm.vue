<template>
	<div class="card searchForm-wrap" v-if="search.length">
		<el-form ref="searchFormRef" class="form-inline" :model="form" label-width="80px">
			<el-row>
				<el-col
					:xs="24"
					:sm="12"
					:md="8"
					:lg="6"
					style="min-width: 250px;"
					v-for="(item, index) in search"
					:key="index"
					v-show="index < 4 || isExpand"
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
				</el-col>
			</el-row>
		</el-form>
		<div class="search-btn">
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
const form = reactive<any>({})
const searchFormRef=ref()
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
	display: flex;
	justify-content: space-between;
	margin-bottom: 15px;

	.form-inline {
		flex: 1;

		.el-row {
			width: 100%;
		}
	}

	.search-btn {
		display: flex;
		flex-shrink: 0;
		margin-left: 30px;

		.expand {
			height: 32px;
		}
	}
}
</style>
