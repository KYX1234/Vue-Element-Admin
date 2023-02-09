<template>
	<el-popover
		:width="350"
		trigger="click"
		content="this is content, this is content, this is content"
	>
		<el-row>
			<el-col :span="4" v-for="item of iconList" :key="item">
				<div class="icon-bg">
					<svg-icon :class-name="item" size="24"></svg-icon>
          <div>{{ item}}</div>
				</div>
			</el-col>
		</el-row>
		<template #reference>
			<el-button>请选择图标</el-button>
		</template>
	</el-popover>
</template>

<script lang="ts" setup>
const req = import.meta.glob('@/assets/svg/*.svg', { eager: true })
const iconList = Object.keys(req).map((v: string) => v.match(/src\/assets\/svg\/(.*)\.svg/)![1])
console.log(iconList)
</script>

<style lang="scss" scoped>
.icon-bg {
	border: 1px solid #f5f5f5;
  text-align: center;
  cursor: pointer;
}
.icon-bg:hover{
 box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
</style>
