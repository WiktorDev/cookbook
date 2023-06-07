import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Toast, {POSITION} from "vue-toastification";
import "vue-toastification/dist/index.css";

import './assets/main.css'
import InputComponent from "@/components/form/InputComponent.vue";
import TextareaComponent from "@/components/form/TextareaComponent.vue";
import ButtonComponent from "@/components/form/ButtonComponent.vue";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toast, {
    position: POSITION.TOP_RIGHT
})
app.component('y-input', InputComponent)
app.component('y-textarea', TextareaComponent)
app.component('y-button', ButtonComponent)

app.mount('#app')
