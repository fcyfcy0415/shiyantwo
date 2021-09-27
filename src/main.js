import Vue from 'vue'
import echarts from 'echarts' // 数据可视化工具
import App from './App.vue'
import router from './utils/interceptor' // 路由
import Mock from './mock' // 刚刚手写的mock.js文件
import axios from 'axios' // axios http请求库
import vueAxios from 'vue-axios'
import Vconsole from 'vconsole';
const vConsole = new Vconsole();
export default vConsole;
import '@core'
Vue.use(vueAxios,axios)
Vue.use(Mock) // 全区组件注册
axios.defaults.baseURL = 'http://mockjs.com/api' // 设置默认请求的url
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
