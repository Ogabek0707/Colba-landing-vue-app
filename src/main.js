import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import veeValidatePlugins from './plugins/vee-validate'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VueTheMask from "vue-the-mask"
import 'element-plus/dist/index.css'
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueTheMask)
app.use(veeValidatePlugins)
.component('font-awesome-icon', FontAwesomeIcon)
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//        app.component(key, component)
// }

app.mount('#app')
export default app;
