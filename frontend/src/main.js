// frontend/src/main.js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // Tumeongeza router

const app = createApp(App)
app.use(router) // Tunaiambia Vue itumie router
app.mount('#app')