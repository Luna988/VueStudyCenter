import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from './router/index'
import store from './store/index'
import iview from 'iview' // 引入iview依赖

import { Icon, Calendar } from 'vant'
import 'iview/dist/styles/iview.css'
import 'vant/lib/index.css'
import '@/assets/styles/style.scss'
Vue.config.productionTip = false
Vue.use(Router)
Vue.use(iview)
Vue.use(Icon)
Vue.use(Calendar)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
