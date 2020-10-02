import Vue from 'vue'
import App from './App.vue'
import router from './router' // 路由
import store from './store' // vuex
import '@/utils/directives'
import elementUi from 'element-ui' // element组件库
import 'element-ui/lib/theme-chalk/index.css' // element样式库
import './static/iconfont.css' // icon样式
Vue.config.productionTip = false
Vue.use(elementUi)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
