import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { getStore } from '@/utils/auth'
import { ElMessage } from 'element-plus'

const service: AxiosInstance = axios.create({
	baseURL:
		process.env.NODE_ENV === 'development' ? import.meta.env.VITE_API_BASE_URL : location.origin,
	timeout: 10 * 1000
})

/**
 * @description 请求拦截器
 * */
service.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		const token = getStore()
		if (token && config.headers) {
			config.headers['Authorization'] = token
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
		ElMessage.error(error?.message)
		return Promise.reject(error)
	}
)

// /**
//  * @description 封装axios类型
//  * */
const request = {
	get<T = any>(url: string, config?: AxiosRequestConfig): Promise<ApiRes<T>> {
		return service.get(url, config)
	},

	post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<ApiRes<T>> {
		return service.post(url, data, config)
	},

	put<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<ApiRes<T>> {
		return service.put(url, data, config)
	},

	delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<ApiRes<T>> {
		return service.delete(url, config)
	}
}

export default request
// export default service
