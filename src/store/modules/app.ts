import { defineStore } from 'pinia'
import { appSetting } from '@/settings/appSetting'
import { getLightColor, getDarkColor } from "@/utils/tools";

const AppSetting = JSON.parse(localStorage.getItem('AppSetting') || '{}')

export const useAppStore = defineStore({
	id: 'app',
	state: () => ({ ...appSetting, ...AppSetting }),
	getters: {
		transitionName: state => (state.animate ? state.animateMode : ''),
		isDark:state=>state.theme==='dark'?true:false
	},
	actions: {
		setCollapse() {
			this.isCollapse = !this.isCollapse
		},
		setThemeColor(color: string) {
			this.themeColor = color
			this.changePrimary(color)
		},
		setMenuColor(color: string) {
			this.menuColor = color
		},
		changePrimary(color: string){
			document.documentElement.style.setProperty("--el-color-primary", color);
			document.documentElement.style.setProperty("--el-color-primary-dark-2",this.isDark?`${getDarkColor(color,0.3)}`:`${getLightColor(color,0.3)}`)
			for (let i = 1; i <= 9; i++) {
				document.documentElement.style.setProperty(`--el-color-primary-light-${i}`,this.isDark?`${getDarkColor(color,i/10)}`:`${getLightColor(color,i/10)}`)
			}
		},
		setThemeMode(value: string) {
			this.theme = value
			if (this.isDark) {
				document.documentElement.classList.add("dark")
			} else {
				document.documentElement.classList.remove("dark")
			}
			this.changePrimary(this.themeColor)
		},
		setStorage() {
			localStorage.setItem('AppSetting', JSON.stringify(this.$state))
		}
	}
})
