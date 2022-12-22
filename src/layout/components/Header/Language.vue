<template>
  <div class="header-action-item">
    <SvgIcon class-name="language"></SvgIcon>
  </div>
</template>

<script lang='ts' setup name="Language">

</script>

<style lang='scss' scoped>
.header-action-item {
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 18px;
  padding: 0 8px;
  cursor: pointer;

  &:hover {
        background-color: var(--el-fill-color-light);
  }
}
</style>