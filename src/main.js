import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import router from './router';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
// import store from './store';

Vue.config.productionTip = false
new Vue({
    router,
    vuetify,
    render: h => h(App),
}).$mount('#app')