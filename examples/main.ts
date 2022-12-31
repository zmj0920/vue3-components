import {createApp} from 'vue'
import App from './app.vue'

const app = createApp(App)
import vueViewUi from "vue-view-ui"
// import { Button } from 'vue-view-ui'
app.use(vueViewUi)
// app.use(Button)
app.mount('#app')