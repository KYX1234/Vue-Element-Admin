export const useTable = (
	api: (params: any) => Promise<any>,
	searchParams?: Recordable,
	isPageable: boolean = true,
	callback?:(data: any) => any,
) => {
	const state = reactive({
		loading: false,
		tableData: [],
		page: {
			current: 1,
			limit: 10,
			total: 0
		}
	})
	onMounted(() => getList())

	const getList = async () => {
		try {
			state.loading = true
			let { data } = await api({
				...searchParams,
				current: state.page.current,
				limit: state.page.limit
			})
			callback && (data = callback(data))
			state.tableData = isPageable ? data.data: data 
			if (isPageable) state.page.total = data.total
		} finally {
			state.loading = false
		}
	}

	const handleSizeChange = (val: number) => {
		state.page.current = 1
		state.page.limit = val
		getList()
	}

	const handleCurrentChange = (val: number) => {
		state.page.current = val
		getList()
	}

	return {
		...toRefs(state),
		getList,
		handleSizeChange,
		handleCurrentChange
	}
}
