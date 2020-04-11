import { createApp } from 'vue';
import { setupMedia } from '../../index'
import App from './App.vue'

createApp(App).use(setupMedia).mount('#app')
