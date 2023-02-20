import { success} from '../base'

export default [
	{
		url: '/mock/upload/img', // 登录
		method: 'post',
		timeout: 300,
		response: (req: any) => {
			return success('上传成功', { fileUrl:'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'})
		}
	}
]
