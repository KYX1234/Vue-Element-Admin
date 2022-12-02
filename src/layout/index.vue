<template>
	<el-container class="layout">
		<Asider></Asider>
		<el-container direction="vertical">
			<Header></Header>
			<Main></Main>
		</el-container>
	</el-container>
</template>

<script lang="ts" setup name="Layout">
import Asider from './components/Asider.vue'
import Header from './components/Header.vue'
// import NavTab from './components/NavTab.vue'
import Main from './components/Main.vue'
</script>

<style lang="scss" scoped>
.layout {
	height: 100%;
}
</style>
