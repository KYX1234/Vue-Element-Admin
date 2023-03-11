import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import directives from "@/directives/index";
import 'default-passive-events'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
import '@/permission'
// 支持SVG
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(directives)
app.use(createPinia())

app.mount('#app')
