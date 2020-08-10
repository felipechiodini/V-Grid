import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

useEslint: false,

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
