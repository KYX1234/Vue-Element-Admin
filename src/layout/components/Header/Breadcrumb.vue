<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: item.path }" v-for="(item,index) in breadcrumbList" :key="index">
      <span class="breadcrumb-title">{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang='ts' setup name="Breadcrumb">
const route = useRoute()
const breadcrumbList = computed(() => route.matched.filter(item => item.meta && item.meta.title))
</script>

<style lang='scss' scoped>
@media screen and (max-width: 1000px) {
  .el-breadcrumb {
    display: none;
  }
}
.el-breadcrumb{
  padding: 0 5px;
  .breadcrumb-title {
  font-weight: 400;
}

.el-breadcrumb__item:last-child {
  .breadcrumb-title {
    color: #bbbbbb;
  }

}
}

</style>