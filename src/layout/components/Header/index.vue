<template>
  <div class="header-container">
    <div class="header-container-left">
      <MenuCollapseVue />
    </div>
    <div class="header-container-right">

    </div>
  </div>
</template>

<script lang='ts' setup name="Header">
import MenuCollapseVue from './MenuCollapse.vue';
</script>

<style lang='scss' scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  .header-container-left{
    height: 100%;
  }
  .header-container-right{
    height: 100%;
  }
}
</style>