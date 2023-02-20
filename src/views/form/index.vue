<template>
	<div>
		<WangEditor height="400px" v-model:value="content"/>
		<el-card shadow="never" style="margin-top:20px">
			<div>富文本内容</div>
			<div>{{ content }}</div>
		</el-card>
	</div>
</template>

<script lang="ts" setup>
const content = ref("")
</script>

<style lang="scss" scoped></style>
