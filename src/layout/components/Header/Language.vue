<template>
  <div class="header-language-icon">
    <SvgIcon class-name="language"></SvgIcon>
  </div>
</template>

<script lang='ts' setup name="Language">

</script>

<style lang='scss' scoped>
.header-language-icon {
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 18px;
  padding: 0 8px;
  cursor: pointer;

  &:hover {
    background-color: #f6f6f6;
  }
}
</style>