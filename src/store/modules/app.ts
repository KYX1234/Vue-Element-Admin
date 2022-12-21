import { defineStore } from 'pinia'
import { appSetting } from '@/settings/appSetting'

const AppSetting = JSON.parse(localStorage.getItem('AppSetting') || '{}')
console.log(appSetting)
export const useAppStore = defineStore({
	id: 'app',
	state: () => ({ ...appSetting, ...AppSetting }),
	getters: {
		transitionName: state => (state.animate ? state.animateMode : '')
	},
	actions: {

		setCollapse() {
			this.isCollapse = !this.isCollapse
		},
		setThemeColor(color: string) {
			this.themeColor = color
		},
		setMenuColor(color: string) {
			this.menuColor = color
		},
		onSetAnimate(value: boolean) {
			this.animate = value
		},
		onSetAnimateMode(value: string) {
			this.animateMode = value
		},
		onSetGrayMode(value: string) {
			this.grayMode = value
		},
		setStorage() {
			localStorage.setItem('AppSetting', JSON.stringify(this.$state))
		},
	}
})
