import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Home from './pages/Home.vue';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount('#app')
