<template>
  <div class="header-action-item">
    <el-dropdown trigger="click">
      <div class="info">
        <img :src="userStore.userInfo.avatar" />
        <span>{{ userStore.userInfo.username }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item><el-icon><i-ep-user/></el-icon>个人中心</el-dropdown-item>
          <el-dropdown-item divided @click="userStore.logout"><el-icon><i-ep-switchButton/></el-icon>退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang='ts' setup name="InfoDialog">
import { useUserStore } from '@/store'

const userStore = useUserStore()
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
  .el-dropdown{
    height: 100%;
    .info{
    display: flex;
    align-items: center;
    color:var(--el-text-color-primary);
    font-weight: 500;
    img{
      width: 24px;
      height: 24px;
      margin-right: 12px;
      border-radius:50%
    }
  }
  }

}
</style>