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
					id: '@integer(10,100)',
					name: '@cname()',
					avatar: Random.image('200x100', Random.color(), '#FFF', 'png', '!'),
					phone:/^1[34578]\d{9}$/,
					email: '@email',
					'role|1':['超级管理员','普通用户'],
					'sex|1': [0,1],
					'status': '@boolean',
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
