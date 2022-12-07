<template>
  <div class="sidebar-logo-container">
    <transition name="fade" mode="out-in">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <img src="favicon.ico" class="sidebar-logo" />
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img src="favicon.ico" class="sidebar-logo" />
        <span class="sidebar-title ellipsis-1">my-Admin</span>
      </router-link>
    </transition>
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
.fade-enter-active {
  transition: opacity 1.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  height: 50px;
  line-height: 50px;
  text-align: center;
  overflow: hidden;

  .sidebar-logo {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }

  .sidebar-title {
    margin-left: 10px;
  }
}
</style>
