/**
 * v-debounce
 * 按钮防抖指令
 * 默认延迟500ms执行方法，可以传入时间修改默认
 */
import type { Directive, DirectiveBinding } from 'vue'
interface ElType extends HTMLElement {
	handleClick: () => any
}
const debounce: Directive = {
	mounted(el: ElType, binding: DirectiveBinding) {
		const { arg: delay = 500, value } = binding
		if (typeof value !== 'function') {
			throw 'callback must be a function'
		}

		let timer: NodeJS.Timeout | null = null
		el.handleClick = function () {
			timer && clearInterval(timer)
			timer = setTimeout(() => {
				value()
			}, delay as number)
		}
		el.addEventListener('click', el.handleClick)
	},
	beforeUnmount(el: ElType) {
		el.removeEventListener('click', el.handleClick)
	}
}

export default debounce
