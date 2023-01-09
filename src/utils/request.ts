import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { getToken } from '@/utils/auth'
import qs from 'qs'

const service: AxiosInstance = axios.create({
	// baseURL: process.env.VUE_APP_API_PREFIX,
	timeout: 10 * 1000
})

// 声明一个 Map 用于存储每个请求的标识 和 取消函数,如果不需要取消重复请求，可以注释removePending/addPending/removePending 方法引用
const pending = new Map()

/**
 * @description 请求拦截器
 * */
service.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		removePending(config) // 在请求开始前，对之前的请求做检查取消操作
		addPending(config) // 将当前请求添加到 pending 中
		const token = getToken()
		if (token && config.headers && typeof config.headers.set === 'function') {
			config.headers.set('Authorization', token)
		}
		return config
	},
	(error: AxiosError) => {
		return Promise.reject(error)
	}
)

/**
 * @description 响应拦截器
 * */
service.interceptors.response.use(
	(response: AxiosResponse) => {
		removePending(response.config) // 在请求结束后，移除本次请求
		const { data } = response
		if (data.code !== 200) {
			ElMessage.error(data.msg || '服务器端错误')
			return Promise.reject(new Error(data.msg || 'Error'))
		}
		return data
	},
	error => {
		// 取消重复的 axios 不处理报错
		if (axios.isCancel(error)) return
		// 接口超时
		if (error?.message?.includes('timeout')) ElMessage.error('请求超时！请您稍后重试')
		// 其它错误
		ElMessage.error(
			error instanceof Error ? error.message : String(error) || '系统异常, 请检查网络或联系管理员！'
		)
		return Promise.reject(error)
	}
)

/**
 * @description 添加请求
 * */
const addPending = (config: AxiosRequestConfig) => {
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
 * */
const removePending = (config: AxiosRequestConfig) => {
	const url = [
		config.method,
		config.url,
		qs.stringify(config.params),
		qs.stringify(config.data)
	].join('&')
	if (pending.has(url)) {
		// 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
		const cancel = pending.get(url)
		cancel(url)
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

/**
 * @description 封装axios类型
 * */
const request = {
	get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
		return service.get(url, config)
	},

	post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
		return service.post(url, data, config)
	},

	put<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
		return service.put(url, data, config)
	},

	delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
		return service.delete(url, config)
	}
}

export default request
