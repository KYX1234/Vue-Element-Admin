import request from '@/utils/request'

/** @desc 图片上传 */
export const uploadImg  = (data:any) => {
	return request.post(`/mock/upload/img`,data)
}

