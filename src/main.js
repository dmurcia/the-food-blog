import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/js/dist/collapse'

library.add(fas)

/**
 * Create app
 */
const app = createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)

app.config.globalProperties.global = {
  pagination: {
    perPage: 6
  }
}

app.mount('#app')
