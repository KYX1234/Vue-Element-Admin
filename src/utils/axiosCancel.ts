import axios from 'axios'
import type{ AxiosRequestConfig,Canceler } from 'axios'
import qs from 'qs'

// 声明一个 Map 用于存储每个请求的标识 和 取消函数
let pending = new Map<string, Canceler>()

/**
 * @description 添加请求
 * 函数在请求拦截器中注入
 * */
export const addPending = (config: AxiosRequestConfig) => {
	const url = [
		config.method,
		config.url,
		qs.stringify(config.params),
		qs.stringify(config.data)
	].join('&')
	config.cancelToken =
		config.cancelToken ||
		new axios.CancelToken(cancel => {
			if (!pending.has(url)) {
				// 如果 pending 中不存在当前请求，则添加进去
				pending.set(url, cancel)
			}
		})
}

/**
 * @description 移除请求
 * 函数在请求拦截器中注入，对之前的请求做检查取消操作
 * 函数在响应拦截器中注入
 * */
export const removePending = (config: AxiosRequestConfig) => {
	const url = [
		config.method,
		config.url,
		qs.stringify(config.params),
		qs.stringify(config.data)
	].join('&')
	if (pending.has(url)) {
		// 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
		const cancel = pending.get(url)
		cancel&&cancel(url)
		pending.delete(url)
	}
}

/**
 * @description 清空 pending 中的请求（在路由跳转时调用）
 * */
export const clearPending = () => {
	for (const [url, cancel] of pending) {
		cancel(url)
	}
	pending.clear()
}