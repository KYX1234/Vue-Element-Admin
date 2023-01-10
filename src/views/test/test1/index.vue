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
	
		<el-table :data="state.list" v-loading="state.loading" style="width: 100%">
			<el-table-column label="ID" prop="id" align="center" width="100"></el-table-column>
			<el-table-column label="名称" prop="name" align="center"></el-table-column>
			<el-table-column label="手机号" prop="phone" align="center" width="140"></el-table-column>
			<el-table-column label="手机号" prop="phone" align="center" width="140"></el-table-column>
			<el-table-column label="手机号" prop="phone" align="center" width="140"></el-table-column>
			<el-table-column label="手机号" prop="phone" align="center" width="140"></el-table-column>
			<el-table-column label="手机号" prop="phone" align="center" width="140"></el-table-column>
			<!-- <el-table-column label="角色" prop="role" align="center">
				<template #default="scope">
					<el-tag type="">{{ scope.row.status?'启用':'禁用' }}</el-tag>
					</template>
			</el-table-column>
			<el-table-column label="状态" prop="status" align="center">
				<template #default="scope">
					<el-tag :type="scope.row.status?'success':'info'">{{ scope.row.status?'启用':'禁用' }}</el-tag>
				</template>
			</el-table-column>
			<el-table-column label="创建时间" prop="creat_at" width="180" align="center"></el-table-column>
			<el-table-column label="操作" align="center" width="260" fixed="right">
				<template #default>
					<el-button type="primary" plain>编辑</el-button>
					<el-button type="" plain>菜单权限</el-button>
					<el-button type="danger" plain>删除</el-button>
				</template>
			</el-table-column> -->
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
	}finally {
		state.loading = false
	}
}
getList()
</script>

<style lang="scss" scoped></style>
