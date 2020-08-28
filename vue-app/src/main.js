import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../src/assets/css/reset.css'
import '../src/assets/js/rem.js'
// 引入第三方库
import axios from 'axios'
import VueAxios from 'vue-axios'

// 引入完整的 Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueAxios, axios)
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  // 通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到
  store,
  render: h => h(App)
}).$mount('#app')
