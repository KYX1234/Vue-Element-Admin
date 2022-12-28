import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "element-plus/dist/index.css";
import '@/styles/index.scss'
import '@/permission';

// 支持SVG
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')