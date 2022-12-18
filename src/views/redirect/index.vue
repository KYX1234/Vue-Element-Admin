<template>
	<div></div>
</template>

<script lang="ts" setup>
const router = useRouter()
const route = useRoute()

const { params, query } = route
const { path } = params

router.replace({
	path: '/' + (Array.isArray(path) ? path.join('/') : path),
	query
})
</script>

<style lang="scss" scoped></style>
