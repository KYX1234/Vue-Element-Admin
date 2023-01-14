export interface State {
	loading: boolean
	list: ListItem[]
	search: SearchParams
	page: Pages
}

export interface SearchParams{
	status: string
	phone: string
}

export interface EditState {
	visible: boolean
	form: ListItem
}

export interface ListItem {
	id: number
	name: string
	email: string
	phone: number|string
	password: number|string
	status: 0 | 1
	role: string
}