<template>
<div>
<el-button @click="test">test</el-button>
</div>
</template>

<script lang='ts' setup>
import { menuList } from '@/api'
const test=async () => {
  await menuList()
}
</script>

<style lang='scss' scoped>
</style>