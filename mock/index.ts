import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

import user from './modules/admin'

export function setupProdMockServer() {
  createProdMockServer([...user])
}
