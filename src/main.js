import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import MyHome from './pages/MyHome.vue'
import MyApp from './pages/MyApp.vue'

const app = createApp(App)

const routes = [
   { path: '/', name: 'Home', component: MyHome },
   {  path: '/MyApp', name: 'MyApp', component: MyApp }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)

app.mount('#app')
