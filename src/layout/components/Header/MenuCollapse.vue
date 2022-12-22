<template>
  <div class="header-action-item" @click="appStore.setCollapse">
    <SvgIcon :class-name="appStore.isCollapse?'menu-fold':'menu-unfold'" />
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
  font-size: 20px;
  cursor: pointer;
  &:hover{
        background-color: var(--el-fill-color-light);
  }
}
</style>