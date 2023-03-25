import Mock from 'mockjs'
export function success(msg = '操作成功', data: any) {
  return Mock.mock({ code: 200, data, msg });
}

// code 401 代表token失效
export function fail(msg= '操作失败', code = 500, data: any = null) {
  return Mock.mock({ code, data, msg });
}
