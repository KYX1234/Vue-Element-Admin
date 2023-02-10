<template>
	<div></div>
</template>

<script lang="ts" setup>
const { currentRoute, replace } = useRouter()

const { params, query } = unref(currentRoute)

const { path } = params

replace({
	path: '/' + (Array.isArray(path) ? path.join('/') : path),
	query
})
</script>

<style lang="scss" scoped></style>
