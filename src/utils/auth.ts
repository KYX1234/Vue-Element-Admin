const TOKEN_KEY = 'token'

export const getStore = (key: string = TOKEN_KEY) => {
	return localStorage.getItem(key)
}

export const setStore = ({ key: key = TOKEN_KEY, value }: { key?: string; value: string}) => {
	localStorage.setItem(key, value)
}

export const clearStore = (key: string = TOKEN_KEY) => {
	localStorage.removeItem(key)
}
