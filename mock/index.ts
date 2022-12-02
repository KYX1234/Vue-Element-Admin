import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";

export function setupProdMockServer() {
  const modules = import.meta.glob('./modules/*.ts')
  let moduleArr: any[] = [];
  Object.entries(modules).forEach(([key, module]: any) => {
    moduleArr = moduleArr.concat(module);
  });
  createProdMockServer([...moduleArr]);
}
