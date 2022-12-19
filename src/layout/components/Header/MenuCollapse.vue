<template>
  <div class="collapse-icon" @click="appStore.updateCollapse">
    <SvgIcon :class-name="appStore.isCollapse?'menu-fold':'menu-unfold'" />
  </div>
</template>

<script lang='ts' setup>
import { useAppStore } from '@/store'

const appStore = useAppStore()

</script>

<style lang='scss' scoped>
.collapse-icon {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  font-size: 20px;
  cursor: pointer;
  &:hover{
    background-color: #f6f6f6;
  }
}
</style>