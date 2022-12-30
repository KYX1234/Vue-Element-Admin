<template>
<div class="header-action-item" @click="toggle">
 <SvgIcon :class-name="isFullscreen?'fullscreen':'screen'" size="18"></SvgIcon>
</div>
</template>

<script lang='ts' setup name="Fullscreen">
import { useFullscreen } from '@vueuse/core';
const { isFullscreen, toggle } = useFullscreen();
</script>

<style lang='scss' scoped>
.header-action-item {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 8px;
  cursor: pointer;
  &:hover{
    background-color: var(--el-fill-color-light);
  }
}
</style>