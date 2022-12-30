<template>
  <div class="header-action-item">
      <svg-icon class-name="search" size="20"></svg-icon>
  </div>
</template>

<script lang='ts' setup name="Search">

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