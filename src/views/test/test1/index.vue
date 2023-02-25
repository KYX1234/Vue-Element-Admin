<template>
	<div>
		<el-select v-model="test">
			<el-option v-for="item in list" :label="item.label" :value="item.value"></el-option>
		</el-select>
	</div>
</template>

<script lang="ts" setup>
const test = ref(1)
const list = ref<any>([])

</script>

<style lang="scss" scoped></style>
