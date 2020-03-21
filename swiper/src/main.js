import Vue from 'vue'
import App from './App.vue'
import vueSwiper from 'vue-awesome-swiper'  //引入vue-awesome-swiper
import 'swiper/dist/css/swiper.css'  //引入样式

Vue.config.productionTip = false
Vue.use(vueSwiper)  //使用插件




new Vue({
  render: h => h(App),
}).$mount('#app')
