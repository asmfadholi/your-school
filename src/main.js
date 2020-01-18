import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
// import { BootstrapVue } from 'bootstrap-vue'
import router from './routers/router'
import store from './stores/store'
import './registerServiceWorker'

import 'buefy/dist/buefy.css'

import '@/sass/main.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Buefy)
// Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
