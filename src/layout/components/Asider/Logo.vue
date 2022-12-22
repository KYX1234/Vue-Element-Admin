<template>
  <div class="sidebar-logo-container">
    <router-link key="collapse" class="sidebar-logo-link" to="/">
      <img src="favicon.ico" alt="logo" class="sidebar-logo" />
      <span v-show="!collapse" class="sidebar-title">my-Admin-pro</span>
    </router-link>
  </div>
</template>

<script lang="ts" setup name="Logo">
defineProps({
  collapse: {
    type: Boolean,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.sidebar-logo-container {
  height: 48px;
  overflow: hidden;
  border-bottom: 1px solid var(--el-border-color-lighter);
  box-sizing: border-box;
  .sidebar-logo-link {
    display: flex;
    height: 100%;
    align-items: center;
    padding:0 20px ;

    .sidebar-logo {
      display: inline-block;
      width: 25px;
      height: 25px;
      vertical-align: middle;
    }

    .sidebar-title {
      margin-left: 12px;
      font-size: 16px;
      white-space: nowrap;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    }
  }

}
</style>
