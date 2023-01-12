<template>
	<el-config-provider :message="{max: 1}" :locale="zhCn">
		<router-view/>
	</el-config-provider>
</template>

<script lang="ts" setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>

<style lang="scss" scoped></style>
