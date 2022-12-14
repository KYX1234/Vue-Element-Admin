<template>
	<el-container class="layout">
		<Asider></Asider>
		<el-container direction="vertical">
			<Header></Header>
			<NavTabs></NavTabs>
			<Main></Main>
		</el-container>
	</el-container>
</template>

<script lang="ts" setup name="Layout">
import Asider from './components/Asider/index.vue'
import Header from './components/Header/index.vue'
import NavTabs from './components/NavTabs/index.vue'
import Main from './components/Main/index.vue'
</script>

<style lang="scss" scoped>
.layout {
	height: 100%;
}
</style>
