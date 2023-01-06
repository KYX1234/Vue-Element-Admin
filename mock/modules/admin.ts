import { Random } from 'mockjs';
import { success, fail } from '../base'

export default [
	{
		url: '/mock/admin',
		method: 'get',
		timeout: 1000,
		response: ({ query }:any) => {
			const result: any[] = [];
			const { page = 1, limit = 10 } = query;
			for (let i = 0; i < limit; i++){
				result.push({
					id: '@integer(10,999999)',
					name: '@cname()',
					avatar: Random.image('200x100', Random.color(), '#FFF', 'png', '!'),
					email:'@email',
					'sex|1': [0,1],
					'status|1': [true, false],
					creat_at: '@datetime',
					end_at: '@datetime',
				});
			}
			return success('获取成功', { page,limit, total: 20,data:result})
		}
	},
	{

	}
]
