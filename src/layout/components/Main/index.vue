<template>
	<div class="main-container">
		<router-view></router-view>
	</div>
</template>

<script lang="ts" setup name="Main"></script>

<style lang="scss" scoped>
.main-container {
	min-height: calc(100vh - 50px);
	position: relative;
	overflow: hidden;
}
</style>
