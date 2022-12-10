<template>
  <div class="header-bell-icon">
    <i-ep-bell></i-ep-bell>
  </div>
</template>

<script lang='ts' setup name="Notice">

</script>

<style lang='scss' scoped>
.header-bell-icon {
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