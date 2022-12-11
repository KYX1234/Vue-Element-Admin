<template>
  <el-popover ref="popover" placement="bottom-end" width="250" trigger="click">
    <template #reference>
      <div class="header-bell-icon">
        <i-ep-bell></i-ep-bell>
      </div>
    </template>
    <el-tabs class="demo-tabs" model-value="1">
      <el-tab-pane label="通知(1)" name="1" />
      <el-tab-pane label="关注(1)" name="2" />
      <el-tab-pane label="代办(1)" name="3" />
    </el-tabs>
    <section>
      <div v-for="(item,index) in list" :key="index" class="list-item">
        <img :src="item.avatar" alt="" loading="lazy">
        <div class="list-item-r">
          <div>
            <span class="name">{{item.name}}</span>
            <span class="time">{{item.datetime}}</span>
          </div>
          <div class="ellipsis-1">{{item.content}}</div>
        </div>
      </div>
    </section>
  </el-popover>
</template>

<script lang="ts" setup name="Notice">
const list = [
  {
    name: '青鸟',
    datetime: '1小时之前',
    content: '自行实现跳转到消息页面',
    avatar: 'https://lolicode.gitee.io/scui-doc/demo/img/avatar2.gif'
  },
  {
    name: '哈哈哈',
    datetime: '2小时之前',
    content: '关注了你',
    avatar: 'https://s1.ax1x.com/2022/06/14/XhteeO.jpg'
  },
  {
    name: '我可莉害了',
    datetime: '2个半小时之前',
    content: '收藏了你的文章',
    avatar: 'https://s1.ax1x.com/2022/06/14/XhtSwF.jpg'
  }
]

</script>

<style lang="scss" scoped>
.header-bell-icon {
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 15px;
  padding: 0 8px;
  cursor: pointer;

  &:hover {
    background-color: #f6f6f6;
  }
}
.list-item{
  display: flex;
  &:not(:first-child){
    margin-top: 20px;
  }
  img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-right: 15px;
  }
  .list-item-r{
    flex: 1;
    width: 0;
    .name{
      margin-right: 8px;
      font-size: 14px;
    }
    .time{
      color: #999;
      font-size: 12px;
    }
  }

}
</style>
