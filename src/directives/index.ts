// 导入自定义指令
import { App } from "vue";
const directivesList = import.meta.glob("./modules/*.ts", { eager: true });
const directives = {
  install: function (app: App<Element>) {
    for (const [key, value] of Object.entries(directivesList)) {
      const name = key.replace(/^\.\/modules\/(.*)\.\w+$/, '$1')
      app.directive(name, (value as any).default);
     }
	}
};
export default directives