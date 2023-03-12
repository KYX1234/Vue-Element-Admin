/*
  按钮节流指令
  规定时间内只能点击一次
*/
import type { Directive, DirectiveBinding } from 'vue'
interface ElType extends HTMLElement {
	handleClick: () => any
	disabled: boolean
}
const throttle: Directive = {
	mounted(el: ElType, binding: DirectiveBinding) {
		const { arg: delay = 1000, value } = binding
		if (typeof binding.value !== 'function') {
			throw 'callback must be a function'
		}
		let timer: NodeJS.Timeout | null = null
		el.handleClick = function () {
			if (timer) return
			value()
			timer = setTimeout(() => {
				timer = null
			}, delay as number)
		}
		el.addEventListener('click', el.handleClick)
	},
	beforeUnmount(el: ElType) {
		el.removeEventListener('click', el.handleClick)
	}
}

export default throttle
