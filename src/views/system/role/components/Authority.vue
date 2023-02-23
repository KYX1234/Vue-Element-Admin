<template>
	<el-dialog title="菜单权限" v-model="visible" append-to-body @closed="onReset">
		<el-tree
			ref="tree"
			:data="allMenuList"
			show-checkbox
			node-key="id"
			:default-checked-keys="expandedKeys"
			:default-expanded-keys="expandedKeys"
			:props="{ label: 'title' }"
		></el-tree>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="visible = false">取消</el-button>
				<el-button type="primary" @click="onConfirm">确认</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

const props = defineProps({
	allMenuList: {
		type: Array as PropType<MenuItem[]>,
		default: () => []
	}
})
const tree = ref()
const visible = ref(false)
const expandedKeys = ref<number[]>([])

const init = (arr: number[]) => {
	visible.value = true
	expandedKeys.value=arr
	nextTick(() => {
		tree.value.setCheckedKeys(arr)
	})
}
const onReset = () => {
	expandedKeys.value = []
}
const onConfirm = () => {
	ElMessage.success('修改成功，数据为' + JSON.stringify(tree.value.getCheckedKeys()))
	visible.value = false
}
defineExpose({ init })
</script>

<style lang="scss" scoped></style>
