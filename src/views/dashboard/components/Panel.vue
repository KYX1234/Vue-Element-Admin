<template>
	<el-row :gutter="20">
		<el-col :span="6">
			<el-card class="box-card" shadow="never">
				<template #header>
					<div class="card-header">
						<span>访问量</span>
            <el-tag>月</el-tag>
					</div>
				</template>
				<div class="card-content">
          <div class="number">16428</div>
        </div>
			</el-card>
		</el-col>
    <el-col :span="6">
			<el-card class="box-card" shadow="never" >
				<template #header>
					<div class="card-header">
						<span>访问量</span>
            <el-tag>月</el-tag>
					</div>
				</template>
				<div class="card-content">
          <div class="number">16428</div>
        </div>
			</el-card>
		</el-col>
    <el-col :span="6">
			<el-card class="box-card" shadow="never">
				<template #header>
					<div class="card-header">
						<span>访问量</span>
            <el-tag>月</el-tag>
					</div>
				</template>
				<div class="card-content">
          <div class="number">16428</div>
        </div>
			</el-card>
		</el-col>
    <el-col :span="6">
			<el-card class="box-card" shadow="never">
				<template #header>
					<div class="card-header">
						<span>访问量</span>
            <el-tag>月</el-tag>
					</div>
				</template>
				<div class="card-content">
          <div class="number">16428</div>
        </div>
			</el-card>
		</el-col>
	</el-row>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
:deep(.box-card){
	.el-card__header {
    padding: 10px 22px;
    .card-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
	}
  .card-content{
    .number{
      font-size: 20px;
    }
  }
}
</style>
