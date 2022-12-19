<template>
	<el-drawer :model-value="drawer" @close="emit('update:drawer', false)" title="I am the title">
		<span>Hi, there!</span>
	</el-drawer>
</template>

<script lang="ts" setup>
defineProps({
	drawer: {
		type: Boolean,
		default: false
	}
})
const emit = defineEmits(['update:drawer'])

</script>

<style lang="scss" scoped></style>
