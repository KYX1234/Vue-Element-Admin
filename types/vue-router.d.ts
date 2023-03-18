import 'vue-router'

declare module 'vue-router' {
	interface RouteMeta {
		icon?: string
		title?: string
		isLink?: string
		hidden?: boolean
		isKeepAlive?: boolean
	}
}
