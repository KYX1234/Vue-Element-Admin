import { defineStore } from 'pinia'
import { setting } from '@/settings/AppSetting'

const AppSetting = JSON.parse(localStorage.getItem('AppSetting') || '{}')
console.log(setting)
export const useAppStore = defineStore({
	id: 'app',
	state: () => ({ ...setting,...AppSetting }),
  getters: {},
	actions: {
		updateCollapse() {
      this.isCollapse = !this.isCollapse
      localStorage.setItem('AppSetting', JSON.stringify(this.$state))
		}
	}
})
