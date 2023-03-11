
/**
 * v-auth
 * 按钮权限指令
 */
import type { Directive, DirectiveBinding } from 'vue'
import router from '@/router';
const auth: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
		const { value } = binding
		const authList = router.currentRoute.value.meta.auth as string[]
		if (value) {
			const hasAuth = authList.includes(value)
			if (!hasAuth) el.remove()
    } else {
      throw new Error('please set value')
    }
	}
}

export default auth
