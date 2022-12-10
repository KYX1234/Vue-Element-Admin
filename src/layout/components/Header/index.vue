<template>
  <div class="header-container">
    <div class="header-container-left">
      <MenuCollapseVue />
      <Breadcrumb/>
    </div>
    <div class="header-container-right">
      <Search/>
      <Notice/>
      <Fullscreen/>
      <Language/>
      <InfoDialog/>
      <Setting/>
    </div>
  </div>
</template>

<script lang='ts' setup name="Header">
import MenuCollapseVue from './MenuCollapse.vue';
import Breadcrumb from './Breadcrumb.vue'
import InfoDialog from './InfoDialog.vue'
import Language from './Language.vue'
import Notice from './Notice.vue'
import Search from './Search.vue'
import Fullscreen from './Fullscreen.vue'
import Setting from './Setting.vue'
</script>

<style lang='scss' scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  .header-container-left{
    display: flex;
    align-items: center;
    height: 100%;
  }
  .header-container-right{
    display: flex;
    align-items: center;
    height: 100%;
  }
}
</style>