import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import './assets/styles/style.scss'
import App from './App.vue'

// Global components
import Icon from './components/utils/Icon.vue'

// View components
import LoginView from './views/Login.vue'
import HomeView from './views/Home.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { name: 'login', component: LoginView },
    { name: 'home', component: HomeView },
  ],
});

createApp(App)
  .use(router)
  .component('Icon', Icon)
  .mount('#app')
  .$nextTick(() => {
    // Use contextBridge
    window.ipcRenderer.on('main-process-message', (_event, message) => {
      console.log(message)
    })
  })
