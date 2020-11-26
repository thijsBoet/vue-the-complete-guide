import { createApp } from 'vue'
import AddUser from './components/AddUser.vue'
import ListUsers from './components/ListUsers.vue'
import App from './App.vue'

const app = createApp(App)

app.component('list-user', ListUsers)
app.component('add-user', AddUser)

app.mount('#app')
