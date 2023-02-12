import { Ref } from 'vue'

interface TableData<T = any> {
	loading: Ref<boolean>
	tableData: Ref<T[]>
	page: {
		current: number
		limit: number
		total: number
	}
	[key: string]: any
}

export const useTable = <T = any>(
	api: (params: any) => Promise<any>,
	searchParams?: Recordable,
	isPageable: boolean = true,
	callback?: (data: any) => any
): TableData<T> => {
	const tableData = ref<T[]>([]) as Ref<T[]>
	const loading = ref<boolean>(false)
	const page = reactive({
		current: 1,
		limit: 10,
		total: 0
	})
	onMounted(() => getList())

	const getList = async () => {
		try {
			loading.value = true
			let { data } = await api({
				...searchParams,
				current: page.current,
				limit: page.limit
			})
			callback && (data = callback(data))
			tableData.value = isPageable ? data.data : data
			if (isPageable) page.total = data.total
		} finally {
			loading.value = false
		}
	}

	const handleSizeChange = (val: number) => {
		page.current = 1
		page.limit = val
		getList()
	}

	const handleCurrentChange = (val: number) => {
		page.current = val
		getList()
	}

	return {
		tableData,
		page,
		loading,
		getList,
		handleSizeChange,
		handleCurrentChange
	}
}
