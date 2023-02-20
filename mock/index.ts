import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

import admin from './modules/admin'
import login from './modules/login'
import menu from './modules/menu'
import upload from './modules/upload'
// 生产环境使用
export function setupProdMockServer() {
	createProdMockServer([...admin, ...login, ...menu,...upload])
}
