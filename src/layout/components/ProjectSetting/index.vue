<template>
	<el-drawer :model-value="drawer" :size="350" @close="close" title="项目配置">
		<el-divider>主题</el-divider>
		<el-row class="row-bg" justify="center">
			<el-switch
				:model-value="appStore.theme"
				inline-prompt
				active-value="dark"
				inactive-value="light"
				:active-icon="Sunny"
				:inactive-icon="Moon"
				@change="appStore.setThemeMode"
			/>
		</el-row>
		<el-divider>系统主题</el-divider>
		<ul class="setting-item">
			<li
				v-for="(item, index) in appTheme"
				:key="index"
				:style="{ 'background-color': item }"
				@click="appStore.setThemeColor(item)"
			>
				<el-icon v-if="item === appStore.themeColor">
					<i-ep-check />
				</el-icon>
			</li>
		</ul>
		<el-divider>菜单风格</el-divider>
		<ul class="menu-item">
			<li
				:class="[appStore.menuMode === 'light' && 'is-select']"
				@click="appStore.setMenuMode('light')"
			></li>
			<li
				:class="[appStore.menuMode === 'dark' && 'is-select']"
				@click="appStore.setMenuMode('dark')"
			></li>
			<li
				:class="[appStore.menuMode === 'header-dark' && 'is-select']"
				@click="appStore.setMenuMode('header-dark')"
			></li>
		</ul>
		<el-divider>界面显示</el-divider>
		<ul class="show-setting">
			<li>
				<div>显示面包屑</div>
				<el-switch v-model="appStore.breadCrumb" />
			</li>
			<li>
				<div>显示标签页</div>
				<el-switch v-model="appStore.navTabs" />
			</li>
			<li>
				<div>菜单手风琴模式</div>
				<el-switch v-model="appStore.breadCrumb" />
			</li>
			<li>
				<div>灰色模式</div>
				<el-switch v-model="appStore.grayMode" />
			</li>
			<li>
				<div>色弱模式</div>
				<el-switch v-model="appStore.breadCrumb" />
			</li>
		</ul>
		<el-divider>动画</el-divider>
		<ul class="show-setting">
			<li>
				<div>显示动画</div>
				<el-switch v-model="appStore.animate" />
			</li>
			<li>
				<div>动画类型</div>
				<el-select v-model="appStore.animateMode">
					<el-option
						v-for="item in animateMode"
						:key="item.value"
						:label="item.label"
						:value="item.value"
					/>
				</el-select>
			</li>
		</ul>
	</el-drawer>
</template>

<script lang="ts" setup name="Drawer">
import { useAppStore } from '@/store'
import { Sunny, Moon } from '@element-plus/icons-vue'
import { appTheme } from '@/settings/appTheme'
import { animateMode } from '@/settings/animateMode'

defineProps({
	drawer: {
		type: Boolean,
		default: false
	}
})
const emit = defineEmits(['update:drawer'])
const appStore = useAppStore()

onBeforeMount(() => {
	appStore.setThemeMode(appStore.theme)
})

const close = () => {
	emit('update:drawer', false)
	appStore.setStorage()
}


</script>

<style lang="scss" scoped>
.setting-item {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	li {
		width: 20px;
		height: 20px;
		border-radius: 2px;
		text-align: center;
		margin-right: 8px;
		margin-top: 8px;
		margin-bottom: 8px;
		border: 1px solid var(--el-border-color-lighter);
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		&:hover {
			transform: scale(1.15);
		}
		.el-icon {
			color: #fff;
		}
	}
}
.menu-item {
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	li {
		width: 26%;
		height: 55px;
		background: #f0f2f5;
		border-radius: 3px;
		overflow: hidden;
		border: .5px solid var(--el-border-color-light);
		position: relative;
		transition: all 0.5s;
		cursor: pointer;
		&.is-select{
			box-shadow: 0 0 1px 2px var(--el-color-primary);
		}
		&:hover {
			transform: translateY(-10px);
			box-shadow: 0 0 1px 2px var(--el-color-primary);
		}
		&:first-child {
			&::before {
				content: '';
				position: absolute;
				width: 15%;
				height: 100%;
				background: #ffffff;
			}
			&::after {
				content: '';
				position: absolute;
				width: 100%;
				height: 20%;
				background: #ffffff;
			}
		}
		&:nth-child(2) {
			&::before {
				content: '';
				position: absolute;
				width: 15%;
				height: 100%;
				background: #141414;
				z-index: 2;
			}
			&::after {
				content: '';
				position: absolute;
				width: 100%;
				height: 20%;
				background: #ffffff;
			}
		}
		&:nth-child(3) {
			&::before {
				content: '';
				position: absolute;
				width: 15%;
				height: 100%;
				background: #141414;
				z-index: 2;
			}
			&::after {
				content: '';
				position: absolute;
				width: 100%;
				height: 20%;
				background: #141414;
			}
		}
	}
}
.show-setting {
	li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 3px 0;
		.el-select {
			width: 150px;
		}
	}
}
</style>
