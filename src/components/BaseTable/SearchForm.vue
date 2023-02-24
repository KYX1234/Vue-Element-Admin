<template>
	<div class="card searchForm-wrap" v-if="search.length">
		<el-form ref="searchFormRef" class="form-inline" :model="form">
			<el-row :gutter="25">
				<el-col
					:xs="24"
					:sm="12"
					:md="8"
					:lg="6"
					:xl="6"
					v-for="(item, index) in search"
					:key="index"
					v-show="index < 4 || isExpand"
				>
					<el-form-item :label="item.label">
						<component
							:is="item.type"
							v-model="form[item.prop]"
							:clearable="item.clearable ?? false"
							:placeholder="item.placeholder ?? '请输入'"
						/>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>
		<div class="search-btn">
			<el-button @click="onSearch" type="primary" :icon="Search">搜索</el-button>
			<el-button @click="onSearch">重置</el-button>
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
import { Search, ArrowUp, ArrowDown, Plus } from '@element-plus/icons-vue'
const emit = defineEmits(['search'])
const props = defineProps({
	search: {
		type: Array as PropType<Table.Search[]>,
		default: () => []
	}
})
const isExpand = ref<boolean>(false)
const form = reactive<any>({})
for (const item of props.search) {
	form[item.prop] = ''
}
const onSearch = () => {
	emit('search', form)
}
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
