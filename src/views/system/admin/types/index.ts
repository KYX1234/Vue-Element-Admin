export interface State {
	loading: boolean
	list: Form[]
	search: Search
	page: Page
}
export interface Search {
	status: string
	phone: string
}
export interface EditState {
	visible: boolean
	form: Form
}
export interface Form {
	id: number
	name: string
	email: string
	phone: number | string
	password: number | string
	status: 0 | 1
	role: string
}
