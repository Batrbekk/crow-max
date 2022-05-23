import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import router from './router'
import 'tw-elements'
import { quillEditor } from 'vue3-quill'

createApp(App).use(router).use(quillEditor).mount('#app')
