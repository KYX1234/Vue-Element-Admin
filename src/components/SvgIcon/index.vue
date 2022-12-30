<template>
	<svg :class="svgClass" aria-hidden="true">
		<use :xlink:href="iconName" :fill="color" />
	</svg>
</template>

<script lang="ts" setup name="SvgIcon">
const props = defineProps({
	className: {
		type: String,
		default: ''
	},
	color: {
		type: String,
		default: ''
	},
	size: {
		type: String,
		default: ''
	}
})

const iconName = computed(() => {
	return `#icon-${props.className}`
})

const svgClass = computed<string>(() => {
	if (props.className) return `svg-icon icon-${props.className}`
	return 'svg-icon'
})

const svgSize = computed(() => {
 return props.size?props.size+"px":"inherit"
})
</script>

<style lang="scss" scoped>
.svg-icon {
	width: 1em;
	height: 1em;
	vertical-align: middle;
  font-size: v-bind(svgSize);
	fill: currentColor;
	flex-shrink: 0;
}
</style>
