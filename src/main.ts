import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import './styles/index.less'

const app = createApp(App)
app.use(router)
app.mount('#app')
