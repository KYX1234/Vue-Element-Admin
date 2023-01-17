export interface SearchParams {
	status: string
	phone: string
}

export interface ListItem {
	id: number
	name: string
	email: string
	phone: number | string
	password: number | string
	status: 0 | 1
	role: string
}
