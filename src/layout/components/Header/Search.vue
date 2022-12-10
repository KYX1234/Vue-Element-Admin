<template>
  <div class="header-search-icon">
      <i-ep-search></i-ep-search>
  </div>
</template>

<script lang='ts' setup name="Search">

</script>

<style lang='scss' scoped>
.header-search-icon {
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 15px;
  padding: 0 8px;
  cursor: pointer;
  &:hover{
    background-color: #f6f6f6;
  }
}
</style>