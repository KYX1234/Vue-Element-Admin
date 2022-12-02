import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from 'axios'
import { getToken } from '@/utils/auth'

const service: AxiosInstance = axios.create({
	// baseURL: process.env.VUE_APP_API_PREFIX,
	timeout: 30 * 1000
})

// 请求拦截器
service.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		const token = getToken()
		if (token) {
			if (!config.headers) {
				config.headers = {}
			}
			config.headers['Authorization'] = token
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

// 响应拦截器
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
		ElMessage.closeAll()
		ElMessage.error(error instanceof Error ? error.message : String(error) || '系统异常, 请检查网络或联系管理员！')
		return Promise.reject(error)
	}
)

// 封装axios类型
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
