
import * as light from "ant-design-vue/dist/antd.css";
import * as dark from "ant-design-vue/dist/antd.dark.css";

export const DarkMode = (isDark: boolean) => {
  if (isDark) {
    changeTheme(dark);
  } else {
    changeTheme(light);
  }
}


export const changeTheme = (theme:any) => {
  const head = document.head;
  document.getElementById("theme")?.remove();
  const styleDom = document.createElement("style");
  styleDom.id = "theme";
  styleDom.innerHTML = theme;
  head.appendChild(styleDom);
}
