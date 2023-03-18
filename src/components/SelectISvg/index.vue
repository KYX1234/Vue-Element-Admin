<template>
	<el-popover
		:width="350"
		trigger="click"
		ref="popoverRef"
		placement="bottom-start"
		content="this is content, this is content, this is content"
	>
		<el-row>
			<el-col :span="6" v-for="item of iconList" :key="item">
				<div class="icon-bg" @click="onSelectIcon(item)">
					<svg-icon :class-name="item" size="22"></svg-icon>
					<div>{{ item }}</div>
				</div>
			</el-col>
		</el-row>
		<template #reference>
			<el-input v-model="seletIcon" placeholder="点击选择图标" clearable>
      	<template v-if="seletIcon" #append>
					<svg-icon :class-name="seletIcon" size="20"></svg-icon>
				</template>
    	</el-input>
		</template>
	</el-popover>
</template>

<script lang="ts" setup>
const emit = defineEmits(["update:value"])
const props = defineProps({
	value: {
		type: String,
		default: ''
	}
})
const popoverRef=ref()
const seletIcon = ref(props.value)
const req = import.meta.glob('@/assets/svg/*.svg', { eager: true })
const iconList = Object.keys(req).map((v: string) => v.match(/src\/assets\/svg\/(.*)\.svg/)![1])

watch(() => props.value, (newVal) => {
	seletIcon.value=newVal
})

const onSelectIcon = (item:string) => {
	emit("update:value", item);
	unref(popoverRef).hide();
}
</script>

<style lang="scss" scoped>
.icon-bg {
	padding: 10px 0;
	text-align: center;
	cursor: pointer;
}
.icon-bg:hover {
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.el-input{
	width: 200px;
}
</style>
