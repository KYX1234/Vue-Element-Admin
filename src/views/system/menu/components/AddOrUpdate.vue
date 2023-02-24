<template>
	<el-dialog
		v-model="visible"
		:title="form.id ? '编辑' : '添加'"
		width="700px"
		@closed="onReset"
		append-to-body
	>
		<el-form :model="form" label-width="80px" ref="formRef" inline>
			<el-form-item label="名称" prop="title">
				<el-input v-model="form.title" placeholder="请输入菜单名称" clearable></el-input>
			</el-form-item>
			<el-form-item label="标识" prop="name">
				<el-input v-model="form.name" placeholder="请输入标识" clearable></el-input>
			</el-form-item>
			<el-form-item label="上级菜单" prop="pid">
				<el-tree-select
					v-model="form.parentName"
					:data="data"
					:props="{ value: 'id', children: 'children', label: 'title' }"
					check-strictly
					clearable
					@clear="onNodeClear"
					:render-after-expand="false"
					@node-click="onNodeClick"
				/>
			</el-form-item>
			<el-form-item label="路径" prop="component">
				<el-input v-model="form.component" placeholder="请输入前端路径" clearable></el-input>
			</el-form-item>
			<el-form-item label="图标" prop="icon">
				<SelectISvg v-model:value="form.icon"></SelectISvg>
			</el-form-item>
			<el-form-item label="排序" prop="sort">
				<el-input-number
					v-model="form.sort"
					:precision="0"
					:controls="false"
					style="width: 100%"
					placeholder="排序"
					:value-on-clear="0"
					:min="0"
				></el-input-number>
			</el-form-item>
			<el-form-item label="隐藏">
				<el-switch v-model="form.hidden" :active-value="1" :inactive-value="0" />
			</el-form-item>
		</el-form>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="visible = false">取消</el-button>
				<el-button type="primary" @click="onSubmit">确认</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script lang="ts" setup>
import type { MenuFormItem } from '@/api/menu';
import { ElMessage, FormInstance } from 'element-plus'

const props = defineProps(['data'])
const visible = ref(false)
const formRef = ref<FormInstance>()
const form = reactive({
	id: 0,
	name: '',
	title: '',
	pid: 0,
	component: '',
	parentName: '',
	hidden: 0,
	sort: undefined,
	icon: ''
})

const init = async (data: MenuFormItem) => {
	visible.value = true
	if (data) {
		const { children, ...newData } = data
		await nextTick()
		Object.assign(form, newData)
		form.parentName = form.pid ? getNodeLabel(props.data) : ''
	}
}
const getNodeLabel = (data: MenuFormItem[]): string => {
	if (data && data.length > 0) {
		for (let index = 0; index < data.length; index++) {
			const item = data[index]
			if (item.id === form.pid) {
				return item.title
			} else {
				if (item.children && item.children.length > 0) {
					const label = getNodeLabel(item.children)
					if (label) {
						return label
					} else {
						continue
					}
				} else {
					continue
				}
			}
		}
	}
	return ''
}
const onNodeClick = (data: MenuFormItem) => {
	form.pid = data.id!
}
const onNodeClear = () => {
	form.pid = 0
}
const onReset = () => {
	if (!formRef.value) return
	formRef.value.resetFields()
	form.parentName=''
}
const onSubmit = () => {
	ElMessage.success(JSON.stringify(form))
	visible.value=false
}
defineExpose({ init })
</script>

<style lang="scss" scoped>
.el-form-item {
	width: 280px;
}
</style>
