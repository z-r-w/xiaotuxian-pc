import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css' // 重置样式包
import '@/assets/styles/common.less' // 自己的公共样式
import '@/assets/styles/iconfont.css' // 字体图标
import ui from './components/library' // 骨架图插件

createApp(App).use(store).use(router).use(ui).mount('#app')
