<template>
	<el-card shadow="never">
		<el-form :model="state.search" inline>
			<el-form-item label="用户名">
				<el-input v-model="state.search.name" placeholder="请输入用户名"></el-input>
			</el-form-item>
			<el-form-item label="手机号">
				<el-input v-model="state.search.phone" placeholder="请输入手机号"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button :icon="Search">搜索</el-button>
			</el-form-item>
		</el-form>
		<el-table :data="state.list" border v-loading="state.loading">
			<el-table-column label="ID" prop="id"></el-table-column>
			<el-table-column label="头像">
				<template #default="{row}">
					<el-avatar :src="row.avatar" />
				</template>
			</el-table-column>
			<el-table-column label="名称" prop="name"></el-table-column>
			<el-table-column label="所属权限" prop="id"></el-table-column>
			<el-table-column label="手机号" prop="id"></el-table-column>
			<el-table-column label="邮箱" prop="id"></el-table-column>
			<el-table-column label="状态" prop="status"></el-table-column>
			<el-table-column label="创建时间" prop="creat_at"></el-table-column>
			<el-table-column label="操作"></el-table-column>
		</el-table>
	</el-card>
</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import { adminList, type AdminList } from '@/api'

const state = reactive({
	loading: false,
	list: [] as AdminList[],
	search: {
		name: '',
		phone: ''
	}
})
const getList = async () => {
	try {
		state.loading = true
		const { data } = await adminList()
		state.list = data.data
	} catch (error) {
		return error
	} finally {
		state.loading = false
	}
}
getList()
</script>

<style lang="scss" scoped></style>
