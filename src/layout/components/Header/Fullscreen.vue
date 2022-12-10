<template>
<div class="header-screen-icon" @click="toggle">
 <SvgIcon :class-name="isFullscreen?'full-screen':'screen'"></SvgIcon>
</div>
</template>

<script lang='ts' setup name="Fullscreen">
import { useFullscreen } from '@vueuse/core';
const { isFullscreen, toggle } = useFullscreen();
</script>

<style lang='scss' scoped>
.header-screen-icon {
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 18px;
  padding: 0 8px;
  cursor: pointer;
  &:hover{
    background-color: #f6f6f6;
  }
}
</style>