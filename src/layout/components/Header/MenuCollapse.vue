<template>
  <div class="header-action-item" @click="appStore.setCollapse">
    <svg-icon :class-name="appStore.isCollapse?'fold':'unfold'" size="20"/>
  </div>
</template>

<script lang='ts' setup>
import { useAppStore } from '@/store'

const appStore = useAppStore()

</script>

<style lang='scss' scoped>
.header-action-item {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  cursor: pointer;
  &:hover{
        background-color: var(--el-fill-color-light);
  }
}
</style>